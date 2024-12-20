import express, { Response, Request } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors"
import { DataSource } from "typeorm";
import "reflect-metadata";
import dotenv from "dotenv";
import { User } from "./Entities/User";
import { RefreshToken } from "./Entities/RefreshToken";

declare module 'express' {
    interface Request {
        user?: {
            id: string;
            userName: string;
        };
    }
}

dotenv.config();

const port = 8000;
const app = express();
app.use(cors())
app.use(express.json());

const AppDataSource = new DataSource({
    type: "mysql",
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    logging: true,
    synchronize: true,
    entities: [User, RefreshToken],
});

AppDataSource.initialize()
    .catch((error) => {
        console.error("Error during Data Source initialization:", error);
    });

function authenticateToken(req: Request, res: Response, next: Function) {
    const authHeader = req.headers["authorization"];
    const token = typeof authHeader === "string" ? authHeader.split(" ")[1] : null;

    if (!token) return res.sendStatus(401);

    if (!process.env.ACCESS_TOKEN_SECRET) {
        return res.status(500).send("Missing access token secret");
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: any) => {
        if (err) return res.sendStatus(403);
        if (!user) return res.sendStatus(403);

        // Перевіряємо, що розшифрований токен містить правильні дані
        console.log("Decoded user from token:", user);

        // Зберігаємо дані про користувача в req для подальшого використання
        req.user = {id: user.id, userName: user.userName};
        next();
    });
}


function generateAccessToken(user: any, res: Response) {
    if (!process.env.ACCESS_TOKEN_SECRET) {
        return res.status(500).send("Missing access token secret");
    }

    return jwt.sign({id: user.id, userName: user.userName}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "10s"});
}

function generateRefreshToken(user: any, res: Response) {
    if (!process.env.REFRESH_TOKEN_SECRET) {
        res.status(500).send("Missing refresh token secret");
        return;
    }

    return jwt.sign({id: user.id, userName: user.userName}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "15d"});
}


app.get("/user", authenticateToken, async (req, res) => {
    try {
        const user = await User.findOneBy({
            // @ts-ignore
            userName: req.user.userName,
        });

        if (!user)
            return res.status(400).send("User not found");

        res.status(200).json({id: user.id, userName: user.userName});

    } catch (error) {
        res.status(500).send("Server error" + error);
    }
});

app.post("/user", async (req, res) => {
    try {
        let user = await User.findOneBy({userName: req.body.userName})
        let email = await User.findOneBy({email: req.body.email})
        if (user)
            return res.status(400).send("User already exists");
        if (email)
            return res.status(401).send("Email already exists");

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        await User.insert({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword,
        })
        res.status(201).send();
    } catch (error) {
        res.status(500).send("Error creating user" + error);
    }
});

app.post("/token", async (req, res) => {
    const refreshToken = req.body.refreshToken;

    if (!refreshToken) return res.sendStatus(401);
    let token = await RefreshToken.findOneBy({refreshToken: refreshToken});
    if (!token) return res.sendStatus(403);
    if (!process.env.REFRESH_TOKEN_SECRET)
        return res.sendStatus(500).send("Missing refresh token secret");

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err: any, user: any) => {
            if (err) return res.sendStatus(403);
            if (!user) return res.sendStatus(403);
            const accessToken = generateAccessToken({id: user.id, userName: user.userName}, res);
            res.json({accessToken: accessToken});
        }
    );
});

app.post("/user/login", async (req, res) => {
    const user = await User.findOneBy({
        userName: req.body.userName
    });
    if (!user) {
        return res.status(400).send("Cannot find user");
    }
    try {

        if (!await bcrypt.compare(req.body.password, user.password)) {
            return res.status(401).send("Access denied");
        }

        if (
            !process.env.ACCESS_TOKEN_SECRET ||
            !process.env.REFRESH_TOKEN_SECRET
        ) {
            return res
                .status(500)
                .send("Missing access or/and refresh token secret");
        }

        const accessToken = generateAccessToken({id: user.id, userName: user.userName}, res);
        const refreshToken = generateRefreshToken({id: user.id, userName: user.userName}, res);

        // Check if the user already has a refresh token
        const existingToken = await RefreshToken.findOneBy({user: user});

        if (existingToken) {
            // Update the existing refresh token
            await RefreshToken.update(existingToken.id, {
                refreshToken: refreshToken
            });
        } else {

            await RefreshToken.insert({
                refreshToken: refreshToken,
                user: user // Associate refresh token with the user
            });
        }
        res.status(202).json({accessToken: accessToken, refreshToken: refreshToken});
    } catch (error) {
        res.status(500).send("Error logging in" + error);
    }
});

app.delete("/logout", async (req, res) => {
    const {userId, refreshToken} = req.body;

    const tokenRecord = await RefreshToken.findOneBy({refreshToken});

    if (tokenRecord) {
        await RefreshToken.delete({user: {id: userId}, refreshToken: refreshToken});
    }
    res.sendStatus(204);
});

app.listen(port, () => {
})
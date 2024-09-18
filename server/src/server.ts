import express, { Response, Request } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { createConnection } from "typeorm"
import "reflect-metadata"
import { User } from "./Entities/User";

dotenv.config();


const port = 8000;
const app = express();
app.use(express.json());

createConnection({
    type: "mysql",
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    logging: true,
    synchronize: true,
    entities: [User]
});


let users = [
    {
        username: "test",
        email: "$2b$10$spQbk.yOgomdhO3tog6Wv.KQquxtggK//3bt47s3figoY3IuwHJHG",
        password: "$2b$10$ZhpV0hze1XmIuxkfMiay4.aMcW3ZOujlDGM5DYb01LH1eHA3i4f72",
    },
];

app.get("/user", authenticateToken, (req, res) => {
    // @ts-ignore
    res.json(users.filter((user) => user.username === req.user.username));
});

function authenticateToken(req: Request, res: Response, next: Function) {
    const authHeader = req.headers["authorization"];
    const token =
        typeof authHeader === "string" ? authHeader.split(" ")[1] : null;
    if (token == null) return res.sendStatus(401);

    if (!process.env.ACCESS_TOKEN_SECRET) {
        return res.status(500).send("Missing access token secret");
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: any) => {
        if (err) return res.sendStatus(403);
        // @ts-ignore
        req.user = user;
        next();
    });
}

app.post("/user", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const hashedEmail = await bcrypt.hash(req.body.email, 10);

        const user = {
            username: req.body.username,
            email: hashedEmail,
            password: hashedPassword,
        };

        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send("Error creating user");
    }
});

let refreshTokens: any = [];

app.post("/token", (req, res) => {
    let refreshToken = req.body.refreshToken;
    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    if (!process.env.REFRESH_TOKEN_SECRET)
        return res.sendStatus(500).send("Missing refresh token secret");
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err: any, user: any) => {
            if (err) return res.sendStatus(403);
            const accessToken = generateAccessToken({name: user.username}, res);
            res.json({accessToken: accessToken});
        }
    );
});

app.post("/user/login", async (req, res) => {
    const user = users.find((user) => user.username === req.body.username);
    if (!user) {
        return res.status(400).send("Cannot find user");
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            if (
                !process.env.ACCESS_TOKEN_SECRET ||
                !process.env.REFRESH_TOKEN_SECRET
            ) {
                return res
                    .status(500)
                    .send("Missing access or/and refresh token secret");
            }

            const accessToken = jwt.sign(
                {username: user.username},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: "20s"}
            );
            const refreshToken = jwt.sign(
                {username: user.username},
                process.env.REFRESH_TOKEN_SECRET
            );
            refreshTokens.push(refreshToken);
            res.json({accessToken: accessToken, refreshToken: refreshToken});

            res.status(202);
        } else {
            res.status(401).send("Access denied");
        }
    } catch {
        res.status(500).send();
    }
});

function generateAccessToken(user: any, res: Response) {
    if (!process.env.ACCESS_TOKEN_SECRET) {
        return res.status(500).send("Missing access token secret");
    }

    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "20s"});
}

app.delete("/logout", (req, res) => {
    refreshTokens = refreshTokens.filter((refreshToken: any) => refreshToken !== req.body.refreshToken);
    res.sendStatus(204);
})

app.listen(port, () => {
});

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = require("./Entities/User");
const RefreshToken_1 = require("./Entities/RefreshToken");
dotenv_1.default.config();
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    logging: true,
    synchronize: true,
    entities: [User_1.User, RefreshToken_1.RefreshToken],
});
AppDataSource.initialize()
    .catch((error) => {
    console.error("Error during Data Source initialization:", error);
});
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = typeof authHeader === "string" ? authHeader.split(" ")[1] : null;
    if (!token)
        return res.sendStatus(401);
    if (!process.env.ACCESS_TOKEN_SECRET) {
        return res.status(500).send("Missing access token secret");
    }
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        if (!user)
            return res.sendStatus(403);
        // @ts-ignore
        req.user = user;
        next();
    });
}
function generateAccessToken(user, res) {
    if (!process.env.ACCESS_TOKEN_SECRET) {
        return res.status(500).send("Missing access token secret");
    }
    return jsonwebtoken_1.default.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}
function generateRefreshToken(user, res) {
    if (!process.env.REFRESH_TOKEN_SECRET) {
        res.status(500).send("Missing refresh token secret");
        return;
    }
    return jsonwebtoken_1.default.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "15d" });
}
app.get("/user", authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.User.findOneBy({
            // @ts-ignore
            userName: req.user.userName,
            // @ts-ignore
            email: req.user.email,
        });
        if (!user)
            return res.status(400).send("User not found");
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).send("Server error" + error);
    }
}));
app.post("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield User_1.User.findOneBy({ userName: req.body.userName });
        let email = yield User_1.User.findOneBy({ email: req.body.email });
        if (user)
            return res.status(400).send("User already exists");
        if (email)
            return res.status(400).send("Email already exists");
        const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
        yield User_1.User.insert({
            userName: req.body.userName,
            email: req.body.email,
            password: hashedPassword,
        });
        res.status(201).send();
    }
    catch (error) {
        res.status(500).send("Error creating user" + error);
    }
}));
app.post("/token", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let refreshToken = req.body.refreshToken;
    if (!refreshToken)
        return res.sendStatus(401);
    let token = yield RefreshToken_1.RefreshToken.findOneBy({ refreshToken: refreshToken });
    if (!token)
        return res.sendStatus(403);
    if (!process.env.REFRESH_TOKEN_SECRET)
        return res.sendStatus(500).send("Missing refresh token secret");
    jsonwebtoken_1.default.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        if (!user)
            return res.sendStatus(403);
        const accessToken = generateAccessToken({ name: user.userName }, res);
        res.json({ accessToken: accessToken });
    });
}));
app.post("/user/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.User.findOneBy({
        userName: req.body.userName,
        email: req.body.email,
    });
    if (!user) {
        return res.status(400).send("Cannot find user");
    }
    try {
        if (!(yield bcrypt_1.default.compare(req.body.password, user.password))) {
            return res.status(401).send("Access denied");
        }
        if (!process.env.ACCESS_TOKEN_SECRET ||
            !process.env.REFRESH_TOKEN_SECRET) {
            return res
                .status(500)
                .send("Missing access or/and refresh token secret");
        }
        const accessToken = generateAccessToken({ name: user.userName }, res);
        const refreshToken = generateRefreshToken({ name: user.userName }, res);
        yield RefreshToken_1.RefreshToken.insert({
            refreshToken: refreshToken,
            user: user // Associate refresh token with the user
        });
        res.status(202).json({ accessToken: accessToken });
    }
    catch (error) {
        res.status(500).send("Error logging in" + error);
    }
}));
app.delete("/logout", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.body.userId;
    yield RefreshToken_1.RefreshToken.delete({ user: { id: userId } });
    res.sendStatus(204);
}));
app.listen(port, () => {
});

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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
let users = [
    {
        username: "test",
        email: "$2b$10$spQbk.yOgomdhO3tog6Wv.KQquxtggK//3bt47s3figoY3IuwHJHG",
        password: "$2b$10$ZhpV0hze1XmIuxkfMiay4.aMcW3ZOujlDGM5DYb01LH1eHA3i4f72",
    },
];
app.get("/user", authenticateToken, (req, res) => {
    res.json(users.filter((user) => user.username === req.user.username));
});
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = typeof authHeader === "string" ? authHeader.split(" ")[1] : null;
    if (token == null)
        return res.sendStatus(401);
    if (!process.env.ACCESS_TOKEN_SECRET) {
        return res.status(500).send("Missing access token secret");
    }
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
}
app.post("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
        const hashedEmail = yield bcrypt_1.default.hash(req.body.email, 10);
        const user = {
            username: req.body.username,
            email: hashedEmail,
            password: hashedPassword,
        };
        users.push(user);
        res.status(201).send();
    }
    catch (_a) {
        res.status(500).send("Error creating user");
    }
}));
let refreshTokens = [];
app.post("/token", (req, res) => {
    let refreshToken = req.body.refreshToken;
    if (refreshToken == null)
        return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken))
        return res.sendStatus(403);
    if (!process.env.REFRESH_TOKEN_SECRET)
        return res.sendStatus(500).send("Missing refresh token secret");
    jsonwebtoken_1.default.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        const accessToken = generateAccessToken({ name: user.username }, res);
        res.json({ accessToken: accessToken });
    });
});
app.post("/user/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = users.find((user) => user.username === req.body.username);
    if (!user) {
        return res.status(400).send("Cannot find user");
    }
    try {
        if (yield bcrypt_1.default.compare(req.body.password, user.password)) {
            if (!process.env.ACCESS_TOKEN_SECRET ||
                !process.env.REFRESH_TOKEN_SECRET) {
                return res
                    .status(500)
                    .send("Missing access or/and refresh token secret");
            }
            const accessToken = jsonwebtoken_1.default.sign({ username: user.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "20s" });
            const refreshToken = jsonwebtoken_1.default.sign({ username: user.username }, process.env.REFRESH_TOKEN_SECRET);
            res.json({ accessToken: accessToken, refreshToken: refreshToken });
            res.status(202);
        }
        else {
            res.status(401).send("Access denied");
        }
    }
    catch (_a) {
        res.status(500).send();
    }
}));
function generateAccessToken(user, res) {
    if (!process.env.ACCESS_TOKEN_SECRET) {
        return res.status(500).send("Missing access token secret");
    }
    return jsonwebtoken_1.default.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "20s" });
}
app.listen(port, () => { });

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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const config_1 = require("./core/config");
const sequelize_1 = require("./sequelize");
const user_1 = require("./models/user");
const app = express();
const port = config_1.SERVER_PORT;
sequelize_1.sequlize.authenticate().then((data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("connection");
        yield sequelize_1.sequlize.sync({ force: true });
    }
    catch (ex) {
        console.error(ex);
    }
}));
app.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.json('Hello world');
}));
app.post('/user', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params);
    const result = yield user_1.default.create({
        first_name: "maneesh",
        last_name: "singh",
        email: "memaneesh@hotmail.com",
        password: "Hello@1234"
    });
    console.log(result);
    res.json({ status: 200 });
}));
app.put('/user', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_1.default.update({ first_name: "demo " }, { where: { id: 1 } });
    res.json({
        status: 200,
        result: result
    });
}));
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

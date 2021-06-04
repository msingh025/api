"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIR = exports.DB = void 0;
exports.DB = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
    dialect: process.env.dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
exports.DIR = __dirname;
//# sourceMappingURL=config.js.map
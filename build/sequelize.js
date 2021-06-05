"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequlize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("./core/config");
/*export const sequelize = new Sequelize({
    dialect: 'mysql',
    database: DB.DB,
    host:DB.HOST,
    username: DB.USER,
    password:DB.PASSWORD,
    port:3306,
    pool: DB.pool,
   models: [D'app/models']
  });*/
exports.sequlize = new sequelize_typescript_1.Sequelize(config_1.DB.DB, config_1.DB.USER, config_1.DB.PASSWORD, {
    host: config_1.DB.HOST,
    dialect: 'mysql',
    pool: config_1.DB.pool,
    models: [__dirname + '/models']
});
console.log(__dirname + '/models');
console.log(config_1.DB);

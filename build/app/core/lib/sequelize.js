"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("../config");
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
exports.sequelize = new sequelize_typescript_1.Sequelize(config_1.DB.DB, config_1.DB.USER, config_1.DB.PASSWORD, {
    dialect: "mysql",
    port: 3306,
    models: ['./app/models']
});
console.log(config_1.DIR);
//# sourceMappingURL=sequelize.js.map
import {Sequelize} from 'sequelize-typescript';
import {DB, DIR} from "./core/config"
  
  export const sequlize = new Sequelize(DB.DB, DB.USER, DB.PASSWORD, {
    host: DB.HOST,
    dialect: 'mysql',
    pool:DB.pool,
    models: [__dirname + '/models',__dirname + '/models/auth' ] 
 });

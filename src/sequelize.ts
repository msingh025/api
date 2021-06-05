import {Sequelize} from 'sequelize-typescript';
import {DB, DIR} from "./core/config"
 
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
 
  
  export const sequlize = new Sequelize(DB.DB, DB.USER, DB.PASSWORD, {
    host: DB.HOST,
    dialect: 'mysql',
    pool:DB.pool,
    models: [__dirname + '/models'] 
 });
  console.log(__dirname+'/models')
console.log(DB)
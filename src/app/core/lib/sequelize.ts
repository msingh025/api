import {Sequelize} from 'sequelize-typescript';
import {DB, DIR} from "../config"
 
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
  export const sequelize = new Sequelize(DB.DB, DB.USER, DB.PASSWORD, {
    dialect: "mysql",
    port: 3306,
    models: ['./app/models']
  });

  console.log(DIR);
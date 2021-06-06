const HOST = process.env.HOST || '127.0.0.2';
const USER = process.env.USER || 'root';
const PASSWORD = process.env.PASSWORD || 'Hello@1234' 
const databaseName = process.env.DB || 'test';
const dialect = process.env.dialect || 'mysql';
export const DB =  {
    HOST: HOST,
    USER: USER,
    PASSWORD: PASSWORD,
    DB: databaseName,
    dialect: dialect,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  } ;
  export const DIR = __dirname; 

  export const SERVER_PORT = process.env.SERVER_PORT
  
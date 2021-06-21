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
  

  export const log4jsConf = {
    "appenders": {
      "access": {
        "type": "dateFile",
        "filename": "log/access.log",
        "pattern": "-yyyy-MM-dd",
        "category": "http"
      },
      "app": {
        "type": "file",
        "filename": "log/app.log",
        "maxLogSize": 10485760,
        "numBackups": 3
      },
      "errorFile": {
        "type": "file",
        "filename": "log/errors.log"
      },
      "errors": {
        "type": "logLevelFilter",
        "level": "ERROR",
        "appender": "errorFile"
      }
    },
    "categories": {
      "default": { "appenders": [ "app", "errors" ], "level": "DEBUG" },
      "http": { "appenders": [ "access"], "level": "DEBUG" }
    }
  }
import log, {loginit} from './core/logger';
import  { Request, Response, NextFunction, Router } from 'express';
import * as express from 'express';
import {SERVER_PORT} from './core/config'
import {sequlize} from './sequelize';
import * as db from './core/lib/db';
import routes from './routes/v1';

// connect to  MYSQL data base
process.on('uncaughtException', (e) => {
  console.error(e);
});
db.connect(sequlize);
const app = express();
const router  = Router();
/**
 *  For Security reason disable x-powered-by
 */
app.disable('x-powered-by');

app.use(
    express.urlencoded({
      extended: true
    })
  )
  log.info("Enter to index ");
app.use(express.json())

app.use('/v1',routes);

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
  console.log(err)
  if(err){ 
      console.log('Error in request', err);
      res.status(400).json({err});
  }
  console.log('end Request ');

});
export  default app;

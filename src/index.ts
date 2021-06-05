import  { Request, Response, NextFunction } from 'express';
import * as express from 'express';

import {sequlize} from './sequelize'
const app = express()
const port = 4001
sequlize.authenticate().then(async (data)=>{
    try{ 
        console.log("connection");
    await sequlize.sync({force:true});
    } catch(ex) {
         console.error(ex);
    }
})
app.get('/', async (req: any, res: any, next : any) => {
    
    res.json('Hello world')
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
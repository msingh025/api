import  { Request, Response, NextFunction } from 'express';
import * as express from 'express';
import {SERVER_PORT} from './core/config'
import {sequlize} from './sequelize';
import  User from './models/user';
const app = express()
const port = SERVER_PORT
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
app.post('/user', async (req: Request, res: Response, next: NextFunction) => {
   console.log(req.params);
   
   const result = await User.create({
    first_name: "maneesh",
    last_name: "singh",
    email: "memaneesh@hotmail.com",
    password: "Hello@1234"
   });
   console.log(result);
   res.json({status:200})
});
app.put('/user', async (req: Request, res: Response, next:NextFunction) =>{
    const result= await User.update({first_name:"demo "}, {where:{id : 1}});
    res.json({
       status:200, 
       result: result
   });
})
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
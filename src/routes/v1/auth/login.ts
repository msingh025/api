
import  { Request, Response, NextFunction, Router} from 'express';
import User from '../../../models/user';

const router = Router();
  router.get('/', async (req: Request, res: Response, next : NextFunction) => {
    console.log(req.body);
   res.json('Hello world')
})
export default router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params);
   // sanitize request data 
  const result = await User.create({
   first_name: "maneesh",
   last_name: "singh",
   email: "memaneesh@hotmail.com",
   password: "Hello@1234"
  });
  console.log(result);
  res.json({status:200})
});

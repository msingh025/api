
import  { Request, Response, NextFunction, Router} from 'express';
const router = Router();
 
  export default router.get('/user', async (req: Request, res: Response, next : NextFunction) => {
    console.log(req.body);
   res.json('Hello world')
})
import {NextFunction, Router, Request, Response} from  'express'
import APIKEY from '../../models/auth/api-key'
const router = Router();
export default router.use((req, res, next:NextFunction)=>{
    console.log('firs on');
    return next();
}, async (req:Request, res:Response, next:NextFunction)=>{
     console.log('second one', req.headers['x-key']);
     
     try{
     // @ts-ignore
      const reqKey = req.apiKey =  req.headers['x-key']?.toString() || null;
     const key = await APIKEY.findOne({where: {key: reqKey, active: true}});
     console.log('result', key?.id);
      if(!key)
         throw new Forbidden(ErrorType.BAD_REQUEST);
      return next();
     } catch(e: any) {
       next(e);
     }
} );


class Forbidden extends Error {
      constructor(type: any) {
        super(type);
      }
      handle(req: Request, res: Response) {
        res.status(401).json({ 'message':'api key not found', status: false})
      }
       //res.status(401).json({ 'message':'api key not found', status: false, result: key})
}
enum ErrorType {
   BAD_REQUEST = 1
}

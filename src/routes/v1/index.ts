import {Router} from 'express';
import login from './auth/login';
import apiKey from '../../middle-ware/auth/api-key';
import user from './auth/user';
const route = Router();
route.use('/', apiKey);
route.use('/auth', login);
route.use('/profile', user);
export default route;
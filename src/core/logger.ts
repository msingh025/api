import { configure, getLogger } from "log4js";
import {log4jsConf} from './config';

 export const loginit = ()=> {configure(log4jsConf)};
 // setting for loglevel and label for evn wise 

  const log =  getLogger();
 
  export default log;
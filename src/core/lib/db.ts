import {Sequelize} from 'sequelize-typescript';
/*export const sequelize = new Sequelize({
    dialect: 'mysql',
    database: DB.DB,
    host:DB.HOST,
    username: DB.USER,
    password:DB.PASSWORD,
    port:3306,
    pool: DB.pool,
   models: [D'app/models']
  });*/
  
  export  const  connect = (sequlize : any)=> {
    sequlize.authenticate().then(async (data : any)=>{
        try{ 
            console.log("connection");
            console.log(data);
        //await sequlize.sync({force:true});
        } catch(ex) {
             console.error(ex);
        }
    })
  }
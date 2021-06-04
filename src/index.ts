import {DB} from './app/core/config';
import {sequelize} from './app/core/lib/sequelize';
class X {

constructor() {
    console.log(DB)
    

}
    async start() {
        sequelize.authenticate();
      //await sequelize.sync({force: true});
}
}
const x = new X();
x.start();
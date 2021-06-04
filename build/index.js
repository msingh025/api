"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./app/core/config");
const sequelize_1 = require("./app/core/lib/sequelize");
class X {
    constructor() {
        console.log(config_1.DB);
    }
    async start() {
        sequelize_1.sequelize.authenticate();
        //await sequelize.sync({force: true});
    }
}
const x = new X();
x.start();
//# sourceMappingURL=index.js.map
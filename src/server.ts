
import log, {loginit} from './core/logger';
loginit();

import app from './index';
import {SERVER_PORT} from './core/config';
console.log(SERVER_PORT);
app.listen(SERVER_PORT, () => {
    log.info("started log");
    console.log(`App is listening on port ${SERVER_PORT}`)
}) .on('error', (e) => console.error(e));;
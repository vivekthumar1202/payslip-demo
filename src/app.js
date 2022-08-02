
/**
* @author Vivek Thumar <vivekthumar1202@gmail.com>
* @description 
* Entry Point file of system. It's Create express server for RESTFUL api and also initialize cron jobs for different tasks.
* Based on application uses we can run as cluster mode in a production environment based on system resources.
*/

require('dotenv').config();
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const mongoose = require('./lib/mongoose');
const agenda = require('./controllers/agenda');

const app = express();

const server = http.createServer(app);

// connect with mongoDB via mongoose ORM
mongoose.connect();

app.use(compression({
  level: 6, // default compression
}));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(cors());

// manage console logs: to print the logs and error on console

require('./lib/logger/console')(app);
require('./routes')(app);

// log every errors into the logs/error.log file via winston error logger
require('./lib/logger/error')(app);

const port = process.env.PORT || 8083;
server.listen(port, () => {
  /**
  * @author Vivek Thumar <vivekthumar1202@gmail.com>
  * @description 
  * When server Initialise we can set up cron jobs
  * We have many options like node-cron, Agenda or system cron job to create cron jobs
  */
  agenda.payslip();
});

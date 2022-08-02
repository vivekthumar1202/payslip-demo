  /**
  * @author Vivek Thumar <vivekthumar1202@gmail.com>
  * @description Write Application log in to file and also on terminal output
  */

const winston = require('winston');
const expressWinston = require('express-winston');

module.exports = (app) => {
  app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console({
        format: winston.format.simple(),
      }),
      new winston.transports.File({ filename: 'logs/info.log' }),
    ],
    format: winston.format.combine(winston.format.json()),
    meta: false,
    msg: "{{req.method}} -- {{req.originalUrl}} -- {{res.statusCode}} ",
    expressFormat: true,
    colorize: true,
  }));
};

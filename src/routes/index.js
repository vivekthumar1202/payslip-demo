/**
* @author Vivek Thumar <vivekthumar1202@gmail.com>
* @description Routes file for RESTFUL api.
*/
const { sendResponse } = require('../lib/responseHandler');
const userRoutes = require('./user');

module.exports = (app) => {

  // add response handle method for all api endpoint and default bind req, res and next
  app.use((req, res, next) => {
    req.sendResponse = sendResponse.bind(null, req, res, next);
    next();
  });

  // Sample sub-route for user
  app.use('/user', userRoutes);

  // catch 404 and forward to error handler
  app.use((req, res) => {
    res.status(404).send({ error: `Not Found. Accessing route - ${req.path} For ${req.method}` });
  });
};

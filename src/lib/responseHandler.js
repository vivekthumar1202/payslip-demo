const emailProvider = require('./email');

const errorHandler = (err) => {
  return { error: err.message ? err.message : err };
};

const successHandler = (data) => {
  if (!data) {
    data = null;
  }
  if (typeof data === 'string') {
    return {
      message: data,
    };
  }
  if (Array.isArray(data) && data.length && data[0].option) {
    return data[0];
  }
  return data;
};

/**
 *
 * @param {Object} res response object of the request to send information to FE
 * @param {Integer} statusCode request status code based on success/fail
 * @param {Object} data information that need to send to request
 */
const sendResponse = async (req, res, next, statusCode, data) => {
  // if status code is success then response with success handler
  if (statusCode >= 200 && statusCode <= 299) {
    return res.status(statusCode).send(successHandler(data));
  }
  
  if (statusCode >= 500) {
    // Notify admin if code is break using email or some error handling portal like bugsnag/sentry/newrelic etc
    emailProvider.sendEmail(
      process.env.SEND_EMAIL_ALERT,
      `Error in Code (${process.env.NODE_ENV})`,
      'Error',
      { content: data.stack, apiendpoint: req.headers.host + req.baseUrl, method: req.method },
    );
    
    next(data);
  }
  return res.status(statusCode).send(errorHandler(data));
};

module.exports = {
  sendResponse,
};

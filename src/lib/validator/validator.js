// External module dependencies
const Joi = require('joi');
const _ = require('lodash');

/**
* @author Vivek Thumar <vivekthumar1202@gmail.com>
* @param {Object|Array} validations The validations to perform on the specified route
* @param {Object} options A list of options for validations.
* @return {Function}
*
* @public
*/
module.exports = function joiValidate(validations) {
  /**
  * The middleware that handles the route validation
  * @author Vivek Thumar <vivekthumar1202@gmail.com>
  * @param {Object} req The express request object
  * @param {Object} res The express result object
  * @param {Function} next The function to call upon validation completion
  *
  * @private
  */
  function validate(req, res, next) {
    const { error } = Joi.validate(body, validations);
    if (error) {
      if (error.details && error.details.length) {
        res.status(422).send({ error: error.details[0].message });
      } else {
        res.status(422).send({ error: error.message });
      }
    } else {
      next();
    }
  }

  return validate;
};

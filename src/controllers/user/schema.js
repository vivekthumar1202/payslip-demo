/**
* @author Vivek Thumar <vivekthumar1202@gmail.com>
* @description User schema for validation api request.
*/

const Joi = require('joi');

const schema = {
  email: Joi.string()
    .email().optional().label('Email')
    .options({
      language: {
        any: { required: 'is required.' },
        string: { email: 'should be valid email address.' },
      },
    }),
  firstName: Joi.string()
    .optional()
    .label('First name'),
  lastName: Joi.string()
    .optional()
    .label('Last name'),
  city: Joi.string()
    .optional()
    .label('City'),
};


module.exports = {
  schema,
};

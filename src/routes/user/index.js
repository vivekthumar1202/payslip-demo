/**
* @author Vivek Thumar <vivekthumar1202@gmail.com>
* @description sub-route file for /user endpoint. 
*/

const express = require('express');
const router = express.Router();
const validator = require('../../lib/validator/validator');
const user = require('../../controllers/user');
const schemas = require('../../controllers/user/schema');

// Sample post method
router.post(
  '/',
  // Validate Schemas
  validator(schemas),
  // call post function for execution
  user.post,
);

// Sample get method
router.get(
  '/',
  // call get function for execution
  user.get,
);

module.exports = router;

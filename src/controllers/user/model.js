/**
* @author Vivek Thumar <vivekthumar1202@gmail.com>
* @description Database schema for user table/collection.
*/

const mongoose = require('mongoose');

const UserModelSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  city: { type: String },
});

const UserModel = mongoose.model('User', UserModelSchema);

module.exports = UserModel;

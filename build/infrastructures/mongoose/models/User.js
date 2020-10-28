"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var userRoles = ["user", "admin"];
var userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    "enum": userRoles,
    "default": "user"
  },
  password: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});

var userModel = _mongoose["default"].model("User", userSchema);

module.exports = userModel;
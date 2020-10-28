"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var cateogorySchema = new Schema({
  categoryName: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});

var categoryModel = _mongoose["default"].model("Category", cateogorySchema);

module.exports = categoryModel;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var productSchema = new Schema({
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  categories: [{
    type: String,
    required: true
  }]
}, {
  versionKey: false
});

var productModel = _mongoose["default"].model("Product", productSchema);

module.exports = productModel;
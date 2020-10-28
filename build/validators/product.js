"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _joi = _interopRequireDefault(require("joi"));

var _validate = _interopRequireDefault(require("./validate"));

var productValidator = /*#__PURE__*/function () {
  function productValidator() {
    (0, _classCallCheck2["default"])(this, productValidator);
  }

  (0, _createClass2["default"])(productValidator, null, [{
    key: "validateCreate",
    value: function validateCreate(data) {
      var schema = _joi["default"].object().keys({
        productName: _joi["default"].string().required(),
        price: _joi["default"].number().required(),
        description: _joi["default"].string().required(),
        categories: _joi["default"].array().min(1).max(10).required()
      });

      return (0, _validate["default"])(schema, data);
    }
  }, {
    key: "validateUpdate",
    value: function validateUpdate(data) {
      var schema = _joi["default"].object().keys({
        productName: _joi["default"].string().optional(),
        price: _joi["default"].number().optional(),
        description: _joi["default"].string().optional(),
        categories: _joi["default"].array().min(1).max(10).optional()
      });

      return (0, _validate["default"])(schema, data);
    }
  }]);
  return productValidator;
}();

var _default = productValidator;
exports["default"] = _default;
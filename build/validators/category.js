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

var categoryValidator = /*#__PURE__*/function () {
  function categoryValidator() {
    (0, _classCallCheck2["default"])(this, categoryValidator);
  }

  (0, _createClass2["default"])(categoryValidator, null, [{
    key: "validateCreate",
    value: function validateCreate(data) {
      var schema = _joi["default"].object().keys({
        categoryName: _joi["default"].string().required()
      });

      return (0, _validate["default"])(schema, data);
    }
  }, {
    key: "validateUpdate",
    value: function validateUpdate(data) {
      var schema = _joi["default"].object().keys({
        categoryName: _joi["default"].string().optional()
      });

      return (0, _validate["default"])(schema, data);
    }
  }]);
  return categoryValidator;
}();

var _default = categoryValidator;
exports["default"] = _default;
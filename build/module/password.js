"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var password = /*#__PURE__*/function () {
  function password() {
    (0, _classCallCheck2["default"])(this, password);
  }

  (0, _createClass2["default"])(password, null, [{
    key: "hashPassword",
    value: function hashPassword(password) {
      try {
        var hash = _bcryptjs["default"].hashSync(password, _bcryptjs["default"].genSaltSync(10));

        return hash;
      } catch (error) {
        throw error;
      }
    }
  }, {
    key: "compareHash",
    value: function compareHash(hash, password) {
      try {
        return _bcryptjs["default"].compareSync(password, hash);
      } catch (error) {
        throw error;
      }
    }
  }]);
  return password;
}();

exports["default"] = password;
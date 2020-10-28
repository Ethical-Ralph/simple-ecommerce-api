"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var deleteProduct = function deleteProduct(_ref) {
  var productRepository = _ref.productRepository;
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(productId) {
      var exist;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return productRepository.findById(productId);

            case 3:
              exist = _context.sent;

              if (exist) {
                _context.next = 6;
                break;
              }

              throw new Error("Product with this id doesn't exist");

            case 6:
              _context.next = 8;
              return productRepository.remove(productId);

            case 8:
              return _context.abrupt("return", {
                message: "Product deleted successfully"
              });

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var _default = deleteProduct;
exports["default"] = _default;
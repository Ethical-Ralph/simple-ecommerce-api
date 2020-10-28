"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var getProduct = function getProduct(_ref) {
  var productRepository = _ref.productRepository;
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
      var product;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return productRepository.findById(id);

            case 3:
              product = _context.sent;

              if (product) {
                _context.next = 6;
                break;
              }

              throw new Error("Product not found");

            case 6:
              return _context.abrupt("return", {
                message: "Product fetched successfully",
                data: product
              });

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var _default = getProduct;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var getProducts = function getProducts(_ref) {
  var productRepository = _ref.productRepository;
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(meta, categories) {
      var products, count;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return productRepository.getProducts(meta, categories);

            case 3:
              products = _context.sent;
              _context.next = 6;
              return productRepository.countProduct(categories);

            case 6:
              count = _context.sent;
              return _context.abrupt("return", {
                message: "Products fetched successfully",
                data: {
                  products: products,
                  metaData: {
                    currentPage: Number(meta.page),
                    limit: Number(meta.limit),
                    totalDocuments: count,
                    totalPages: Math.ceil(count / meta.limit)
                  }
                }
              });

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var _default = getProducts;
exports["default"] = _default;
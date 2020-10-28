"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _product = _interopRequireDefault(require("../../validators/product"));

var createProduct = function createProduct(_ref) {
  var productRepository = _ref.productRepository,
      categoryRepository = _ref.categoryRepository;
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(productData) {
      var data, categories, product;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              data = _product["default"].validateCreate(productData);
              categories = productData.categories; // await categoryRepository.verifyCategories(categories);

              _context.next = 5;
              return productRepository.add(data);

            case 5:
              product = _context.sent;
              return _context.abrupt("return", {
                message: "Product added successfully",
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

var _default = createProduct;
exports["default"] = _default;
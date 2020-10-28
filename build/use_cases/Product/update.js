"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _product = _interopRequireDefault(require("../../validators/product"));

var updateProduct = function updateProduct(_ref) {
  var productRepository = _ref.productRepository,
      categoryRepository = _ref.categoryRepository;
  return /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref2) {
      var productData, productId, data, exist, categories, product;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              productData = _ref2.productData, productId = _ref2.productId;
              _context.prev = 1;
              data = _product["default"].validateUpdate(productData);
              _context.next = 5;
              return productRepository.findById(productId);

            case 5:
              exist = _context.sent;

              if (exist) {
                _context.next = 9;
                break;
              }

              console.log(exist, productId);
              throw new Error("Product with this id doesn't exist");

            case 9:
              categories = productData.categories;
              _context.next = 12;
              return categoryRepository.verifyCategories(categories);

            case 12:
              data.id = productId;
              _context.next = 15;
              return productRepository.update(data);

            case 15:
              product = _context.sent;
              return _context.abrupt("return", {
                message: "Product updated successfully",
                product: product
              });

            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](1);
              throw _context.t0;

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 19]]);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var _default = updateProduct;
exports["default"] = _default;
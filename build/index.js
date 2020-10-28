"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("dotenv");

var _webserver = _interopRequireDefault(require("./infrastructures/webserver"));

var _router = _interopRequireDefault(require("./infrastructures/router"));

var _mongoose = _interopRequireDefault(require("./infrastructures/mongoose"));

var _faker = _interopRequireDefault(require("faker"));

var _Product = _interopRequireDefault(require("./use_cases/Product"));

var _Category = _interopRequireDefault(require("./use_cases/Category"));

var _repository = _interopRequireDefault(require("./infrastructures/repository"));

var _Database$getModels = _mongoose["default"].getModels(),
    User = _Database$getModels.User,
    Product = _Database$getModels.Product,
    Category = _Database$getModels.Category;

var userRepository = (0, _repository["default"])(User);
var productRepository = (0, _repository["default"])(Product);
var categoryRepository = (0, _repository["default"])(Category);
var router = (0, _router["default"])({
  userRepository: userRepository,
  productRepository: productRepository,
  categoryRepository: categoryRepository
});
var webserver = (0, _webserver["default"])(router);

var startServer = function startServer() {
  webserver.start();
};

var database = new _mongoose["default"]();
database.connect(startServer);
(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
  var aa, i, categories, data;
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          aa = true;
          i = 0;

        case 2:
          if (!(i <= 100)) {
            _context2.next = 13;
            break;
          }

          categories = aa ? [_faker["default"].commerce.product(), _faker["default"].commerce.product()] : [_faker["default"].commerce.product()];
          categories.forEach( /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(cat) {
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return (0, _Category["default"])({
                        categoryRepository: categoryRepository
                      }).createCategoryUsecase({
                        categoryName: cat
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());
          data = {
            productName: _faker["default"].commerce.productName(),
            price: _faker["default"].commerce.price(),
            description: _faker["default"].commerce.productDescription(),
            categories: categories
          };
          _context2.next = 8;
          return (0, _Product["default"])({
            productRepository: productRepository,
            categoryRepository: categoryRepository
          }).createProductUsecase(data);

        case 8:
          aa = !aa;
          console.log(data);

        case 10:
          i++;
          _context2.next = 2;
          break;

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}))();
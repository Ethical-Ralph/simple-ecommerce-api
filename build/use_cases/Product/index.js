"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _create = _interopRequireDefault(require("./create"));

var _getAll = _interopRequireDefault(require("./getAll"));

var _get = _interopRequireDefault(require("./get"));

var _update = _interopRequireDefault(require("./update"));

var _delete = _interopRequireDefault(require("./delete"));

var productUsecase = function productUsecase(_ref) {
  var productRepository = _ref.productRepository,
      categoryRepository = _ref.categoryRepository;
  return {
    createProductUsecase: (0, _create["default"])({
      productRepository: productRepository,
      categoryRepository: categoryRepository
    }),
    getAllProductUsecase: (0, _getAll["default"])({
      productRepository: productRepository
    }),
    getProductUsecase: (0, _get["default"])({
      productRepository: productRepository
    }),
    deleteProductUsecase: (0, _delete["default"])({
      productRepository: productRepository
    }),
    updateProductUsecase: (0, _update["default"])({
      productRepository: productRepository,
      categoryRepository: categoryRepository
    })
  };
};

var _default = productUsecase;
exports["default"] = _default;
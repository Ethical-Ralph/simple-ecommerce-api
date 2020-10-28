"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _create = _interopRequireDefault(require("./create"));

var _update = _interopRequireDefault(require("./update"));

var _getAll = _interopRequireDefault(require("./getAll"));

var _delete = _interopRequireDefault(require("./delete"));

var categoryUsecase = function categoryUsecase(_ref) {
  var categoryRepository = _ref.categoryRepository;
  return {
    createCategoryUsecase: (0, _create["default"])({
      categoryRepository: categoryRepository
    }),
    getAllCategoryUsecase: (0, _getAll["default"])({
      categoryRepository: categoryRepository
    }),
    deleteCategoryUsecase: (0, _delete["default"])({
      categoryRepository: categoryRepository
    }),
    updateCategoryUsecase: (0, _update["default"])({
      categoryRepository: categoryRepository
    })
  };
};

var _default = categoryUsecase;
exports["default"] = _default;
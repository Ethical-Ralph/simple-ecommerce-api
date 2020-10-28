"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = require("express");

var _Category = _interopRequireDefault(require("../../controllers/Category"));

var _isAdmin = _interopRequireDefault(require("./middleware/isAdmin"));

var categoryRouter = function categoryRouter(_ref) {
  var categoryRepository = _ref.categoryRepository;

  var _controller = (0, _Category["default"])({
    categoryRepository: categoryRepository
  }),
      createCategoryController = _controller.createCategoryController,
      getAllCategoryController = _controller.getAllCategoryController,
      updateCategoryController = _controller.updateCategoryController,
      deleteCategoryController = _controller.deleteCategoryController;

  var router = (0, _express.Router)();
  router.route("/").get(getAllCategoryController).post( // isAdmin,
  createCategoryController);
  router.route("/:categoryId").patch( // isAdmin,
  updateCategoryController)["delete"]( // isAdmin,
  deleteCategoryController);
  return router;
};

module.exports = categoryRouter;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = require("express");

var _isAdmin = _interopRequireDefault(require("./middleware/isAdmin"));

var _Products = _interopRequireDefault(require("../../controllers/Products"));

var productRouter = function productRouter(_ref) {
  var productRepository = _ref.productRepository,
      categoryRepository = _ref.categoryRepository;

  var _controller = (0, _Products["default"])({
    productRepository: productRepository,
    categoryRepository: categoryRepository
  }),
      createProductController = _controller.createProductController,
      getProductController = _controller.getProductController,
      getAllProductController = _controller.getAllProductController,
      updateProductController = _controller.updateProductController,
      deleteProductController = _controller.deleteProductController;

  var router = (0, _express.Router)();
  router.route("/").get(getAllProductController).post(_isAdmin["default"], createProductController);
  router.route("/:productId").get(getProductController).patch(_isAdmin["default"], updateProductController)["delete"](_isAdmin["default"], deleteProductController);
  return router;
};

module.exports = productRouter;
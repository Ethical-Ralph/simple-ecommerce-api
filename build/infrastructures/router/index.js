"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./user"));

var _product = _interopRequireDefault(require("./product"));

var _category = _interopRequireDefault(require("./category"));

var _auth = _interopRequireDefault(require("./middleware/auth"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swagger = _interopRequireDefault(require("../../config/swagger.json"));

var routerFunc = function routerFunc(_ref) {
  var userRepository = _ref.userRepository,
      productRepository = _ref.productRepository,
      categoryRepository = _ref.categoryRepository;

  var router = _express["default"].Router();

  var apiRouter = _express["default"].Router();

  apiRouter.use("/docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
  apiRouter.use("/auth", (0, _user["default"])({
    userRepository: userRepository
  }));
  apiRouter.use("/product", (0, _auth["default"])(userRepository), (0, _product["default"])({
    productRepository: productRepository,
    categoryRepository: categoryRepository
  }));
  apiRouter.use("/category", (0, _auth["default"])(userRepository), (0, _category["default"])({
    categoryRepository: categoryRepository
  }));
  router.use("/api", apiRouter);
  return router;
};

var _default = routerFunc;
exports["default"] = _default;
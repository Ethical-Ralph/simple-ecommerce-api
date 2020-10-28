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

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var options = {
  swaggerOptions: {
    authAction: {
      JWT: {
        name: "JWT",
        schema: {
          type: "apiKey",
          "in": "header",
          name: "Authorization",
          description: ""
        },
        value: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdDExLmNvbSIsInJvbGUiOiJhZG1pbiIsImZpcnN0TmFtZSI6InRlc3QiLCJsYXN0TmFtZSI6InRlc3QiLCJpYXQiOjE2MDM3OTU5OTV9.JGgokG3zDVZ-dvgUsszYIadY8xvHo5-P54PZrwScUhc"
      }
    }
  }
};

var routerFunc = function routerFunc(_ref) {
  var userRepository = _ref.userRepository,
      productRepository = _ref.productRepository,
      categoryRepository = _ref.categoryRepository;

  var router = _express["default"].Router();

  var apiRouter = _express["default"].Router();

  apiRouter.use((0, _cors["default"])()).use(_bodyParser["default"].json());
  apiRouter.use("/docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"], options));
  apiRouter.use("/auth", (0, _user["default"])({
    userRepository: userRepository
  }));
  apiRouter.use("/product", // auth(userRepository),
  (0, _product["default"])({
    productRepository: productRepository,
    categoryRepository: categoryRepository
  }));
  apiRouter.use("/category", // auth(userRepository),
  (0, _category["default"])({
    categoryRepository: categoryRepository
  }));
  router.use("/api", apiRouter);
  return router;
};

var _default = routerFunc;
exports["default"] = _default;
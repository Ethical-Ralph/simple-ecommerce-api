"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = require("express");

var _User = _interopRequireDefault(require("../../controllers/User"));

var userRouter = function userRouter(_ref) {
  var userRepository = _ref.userRepository;
  var userController = (0, _User["default"])(userRepository);
  var router = (0, _express.Router)();
  router.post("/signup", userController.createUser);
  router.post("/login", userController.loginUser);
  return router;
};

module.exports = userRouter;
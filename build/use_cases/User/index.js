"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _CreateUser = _interopRequireDefault(require("./CreateUser"));

var _LoginUser = _interopRequireDefault(require("./LoginUser"));

var userUseCase = function userUseCase(userRepository) {
  return {
    createUserUsecase: (0, _CreateUser["default"])(userRepository),
    loginUserUsecase: (0, _LoginUser["default"])(userRepository)
  };
};

var _default = userUseCase;
exports["default"] = _default;
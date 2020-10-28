"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _expressForceHttps = _interopRequireDefault(require("express-force-https"));

var _cors = _interopRequireDefault(require("cors"));

var _env = _interopRequireDefault(require("../../config/env"));

var _errorHandler = _interopRequireDefault(require("./errorHandler"));

module.exports = function (router) {
  var app = (0, _express["default"])();
  app.use(_expressForceHttps["default"]).use((0, _cors["default"])());
  app.use(_express["default"].json());
  app.use(_express["default"].urlencoded({
    extended: false
  }));
  app.use(router);
  (0, _errorHandler["default"])(app);

  var applyMiddleware = function applyMiddleware(middleware) {
    app.use(middleware);
  };

  var start = function start() {
    app.listen(_env["default"].PORT, function () {
      console.log("App started at " + _env["default"].PORT);
    });
  };

  return {
    start: start,
    applyMiddleware: applyMiddleware
  };
};
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _env = _interopRequireDefault(require("../../../config/env"));

var _error = _interopRequireDefault(require("../../../module/error"));

var getToken = function getToken(req) {
  var authorization = req.headers.authorization;

  if (typeof authorization === "undefined" || !authorization) {
    throw _error["default"].AuthorizationError("Auth token missing");
  }

  if (authorization && authorization.split(" ") === "Bearer" || "Token") {
    return authorization.split(" ")[1];
  }

  throw _error["default"].AuthorizationError("Auth token malformed");
};

var auth = function auth(userRepository) {
  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
      var token, decoded, user;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(req.headers);
              _context.prev = 1;
              token = getToken(req);
              decoded = _jsonwebtoken["default"].verify(token, _env["default"].JWTSecret);
              _context.next = 6;
              return userRepository.findByEmail(decoded.email);

            case 6:
              user = _context.sent;

              if (user) {
                _context.next = 9;
                break;
              }

              throw _error["default"].AuthorizationError("User Doesnt't Exist");

            case 9:
              req.user = user;
              next();
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              next(_context.t0);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

module.exports = auth;
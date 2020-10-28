"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _error = _interopRequireDefault(require("../../module/error"));

var deleteCategory = function deleteCategory(_ref) {
  var categoryRepository = _ref.categoryRepository;
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(categoryId) {
      var exist;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return categoryRepository.findById(categoryId);

            case 3:
              exist = _context.sent;

              if (exist) {
                _context.next = 6;
                break;
              }

              throw _error["default"].NotFoundError("Category with this id doesn't exist");

            case 6:
              _context.next = 8;
              return categoryRepository.remove(categoryId);

            case 8:
              return _context.abrupt("return", {
                message: "Category deleted successfully"
              });

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var _default = deleteCategory;
exports["default"] = _default;
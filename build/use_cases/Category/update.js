"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _category = _interopRequireDefault(require("../../validators/category"));

var updateCategory = function updateCategory(_ref) {
  var categoryRepository = _ref.categoryRepository;
  return /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref2) {
      var categoryData, categoryId, data, exist, category;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              categoryData = _ref2.categoryData, categoryId = _ref2.categoryId;
              _context.prev = 1;
              data = _category["default"].validateUpdate(categoryData);
              _context.next = 5;
              return categoryRepository.findById(categoryId);

            case 5:
              exist = _context.sent;

              if (exist) {
                _context.next = 8;
                break;
              }

              throw new Error("Category with this id doesn't exist");

            case 8:
              data.id = categoryId;
              _context.next = 11;
              return categoryRepository.update(data);

            case 11:
              category = _context.sent;
              return _context.abrupt("return", {
                message: "category updated successfully",
                data: category
              });

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](1);
              throw _context.t0;

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 15]]);
    }));

    return function (_x) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var _default = updateCategory;
exports["default"] = _default;
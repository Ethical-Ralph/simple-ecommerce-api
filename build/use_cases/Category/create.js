"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _category = _interopRequireDefault(require("../../validators/category"));

var createCategory = function createCategory(_ref) {
  var categoryRepository = _ref.categoryRepository;
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(categoryData) {
      var data, exist, category;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              data = _category["default"].validateCreate(categoryData);
              _context.next = 4;
              return categoryRepository.findBy({
                categoryName: categoryData.categoryName
              });

            case 4:
              exist = _context.sent;

              if (!exist) {
                _context.next = 7;
                break;
              }

              throw new Error("A category with this name already exists");

            case 7:
              _context.next = 9;
              return categoryRepository.add(data);

            case 9:
              category = _context.sent;
              return _context.abrupt("return", {
                message: "Category added successfully",
                data: category
              });

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              throw _context.t0;

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var _default = createCategory;
exports["default"] = _default;
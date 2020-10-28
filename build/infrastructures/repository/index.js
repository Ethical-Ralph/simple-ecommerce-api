"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _error = _interopRequireDefault(require("../../module/error"));

var _isValidId = _interopRequireDefault(require("../../module/isValidId"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

module.exports = function (Model) {
  var add = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
      var newData;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newData = new Model(data);
              _context.next = 3;
              return newData.save();

            case 3:
              return _context.abrupt("return", newData);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function add(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var update = function update(data) {
    try {
      var id = data.id;

      if (!(0, _isValidId["default"])(id)) {
        throw _error["default"].ValidationError("Invalid Id");
      }

      return Model.findByIdAndUpdate(id, _objectSpread({}, data)).exec();
    } catch (error) {
      throw error;
    }
  };

  var remove = function remove(id) {
    try {
      if (!(0, _isValidId["default"])(id)) {
        throw _error["default"].ValidationError("Invalid Id");
      }

      return Model.findByIdAndRemove(id).exec();
    } catch (error) {
      throw error;
    }
  };

  var getProducts = function getProducts(_ref2, categories_) {
    var limit = _ref2.limit,
        page = _ref2.page;
    var query = categories_ ? {
      categories: {
        $in: categories_.split(",")
      }
    } : {};
    return Model.find(query).limit(Number(limit)).skip(Number((page - 1) * limit)).exec();
  };

  var findById = function findById(id) {
    try {
      if (!(0, _isValidId["default"])(id)) {
        throw _error["default"].ValidationError("Invalid Id");
      }

      return Model.findById(id).exec();
    } catch (error) {
      throw error;
    }
  };

  var findBy = function findBy(query) {
    return Model.findOne(query).exec();
  };

  var findByEmail = function findByEmail(email) {
    return Model.findOne({
      email: email
    }).exec();
  };

  var verifyCategories = /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(categories) {
      var i, categoryExist;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              i = 0;

            case 2:
              if (!(i < categories.length)) {
                _context2.next = 11;
                break;
              }

              _context2.next = 5;
              return findBy({
                categoryName: categories[i]
              });

            case 5:
              categoryExist = _context2.sent;

              if (categoryExist) {
                _context2.next = 8;
                break;
              }

              throw _error["default"].NotFoundError("Category ".concat(categories[i], " doesn't exist"));

            case 8:
              i++;
              _context2.next = 2;
              break;

            case 11:
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));

    return function verifyCategories(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var all = function all() {
    return Model.find().exec();
  };

  var removeall = function removeall() {
    return Model.deleteMany({}).exec();
  };

  var countProduct = function countProduct(categories_) {
    var query = categories_ ? {
      categories: {
        $in: categories_.split(",")
      }
    } : {};
    return Model.countDocuments(query);
  };

  return {
    add: add,
    update: update,
    remove: remove,
    findById: findById,
    findByEmail: findByEmail,
    all: all,
    removeall: removeall,
    findBy: findBy,
    getProducts: getProducts,
    verifyCategories: verifyCategories,
    countProduct: countProduct
  };
};
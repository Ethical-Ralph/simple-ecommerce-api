"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _env = _interopRequireDefault(require("../../config/env"));

var getDatabaseUri = function getDatabaseUri() {
  var nodeEnv = _env["default"].nodeEnv;
  var _config$databaseUrl = _env["default"].databaseUrl,
      prod = _config$databaseUrl.prod,
      dev = _config$databaseUrl.dev,
      test = _config$databaseUrl.test;

  switch (nodeEnv) {
    case "production":
    case "prod":
      return prod;

    case "dev":
    case "development":
      return dev;

    case "test":
      return test;

    default:
      return prod;
  }
};

var Database = /*#__PURE__*/function () {
  function Database() {
    (0, _classCallCheck2["default"])(this, Database);
    this.uri = getDatabaseUri();
  }

  (0, _createClass2["default"])(Database, [{
    key: "connect",
    value: function connect() {
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};

      try {
        _mongoose["default"].connect(this.uri, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false
        });

        _mongoose["default"].connection.once("open", function () {
          console.log("database connected");
          cb();
        });
      } catch (error) {
        console.error(error);
      }
    }
  }], [{
    key: "getModels",
    value: function getModels() {
      var dbModels = {};
      var modelsFolder = __dirname + "/models";

      var models = _fs["default"].readdirSync(modelsFolder);

      models.forEach(function (file) {
        var model = require(_path["default"].join(modelsFolder, file));

        dbModels[model.modelName] = model;
      });
      return dbModels;
    }
  }]);
  return Database;
}();

var _default = Database;
exports["default"] = _default;
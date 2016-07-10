(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.index = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = HelloWorld;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function HelloWorld(props) {
    return _react2.default.createElement(
      'h1',
      null,
      'Hello, World'
    );
  }
});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = App;
exports.y = exports.x = exports.C = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var C = /*#__PURE__*/_createClass(function C() {
  var _this = this;

  _classCallCheck(this, C);

  _defineProperty(this, "x", 10);

  _defineProperty(this, "getX", function () {
    return _this.x;
  });

  _defineProperty(this, "setX", function (newVal) {
    _this.x = newVal;
  });
});

exports.C = C;
var x = new C();
exports.x = x;

var y = _objectSpread({}, {
  some: "value"
});

exports.y = y;

function App() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "hello");
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50c3giXSwibmFtZXMiOlsiQyIsIngiLCJuZXdWYWwiLCJ5Iiwic29tZSIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztJQUNhQSxDOzs7Ozs2QkFDRyxFOztnQ0FDTDtBQUFBLFdBQU0sS0FBSSxDQUFDQyxDQUFYO0FBQUEsRzs7Z0NBQ0EsVUFBQ0MsTUFBRCxFQUFvQjtBQUFFLElBQUEsS0FBSSxDQUFDRCxDQUFMLEdBQVNDLE1BQVQ7QUFBa0IsRzs7OztBQUc1QyxJQUFJRCxDQUFDLEdBQUcsSUFBSUQsQ0FBSixFQUFSOzs7QUFDQSxJQUFJRyxDQUFDLHFCQUFRO0FBQUVDLEVBQUFBLElBQUksRUFBRTtBQUFSLENBQVIsQ0FBTDs7OztBQUVBLFNBQVNDLEdBQVQsR0FBZTtBQUNsQixzQkFDSSxxREFESjtBQUdIOztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjbGFzcyBDIHtcbiAgICBwcml2YXRlIHggPSAxMDtcbiAgICBnZXRYID0gKCkgPT4gdGhpcy54O1xuICAgIHNldFggPSAobmV3VmFsOiBudW1iZXIpID0+IHsgdGhpcy54ID0gbmV3VmFsOyB9XG59XG5cbmV4cG9ydCBsZXQgeCA9IG5ldyBDKCk7XG5leHBvcnQgbGV0IHkgPSB7IC4uLnsgc29tZTogXCJ2YWx1ZVwiIH0gfTtcblxuZXhwb3J0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PmhlbGxvPC9kaXY+XG4gICAgKTtcbn07XG4iXX0=
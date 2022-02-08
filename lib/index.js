"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.y = exports.x = exports.C = void 0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJDIiwieCIsIm5ld1ZhbCIsInkiLCJzb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQWFBLEM7Ozs7OzZCQUNHLEU7O2dDQUNMO0FBQUEsV0FBTSxLQUFJLENBQUNDLENBQVg7QUFBQSxHOztnQ0FDQSxVQUFDQyxNQUFELEVBQW9CO0FBQUUsSUFBQSxLQUFJLENBQUNELENBQUwsR0FBU0MsTUFBVDtBQUFrQixHOzs7O0FBRzVDLElBQUlELENBQUMsR0FBRyxJQUFJRCxDQUFKLEVBQVI7OztBQUNBLElBQUlHLENBQUMscUJBQVE7QUFBRUMsRUFBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBUixDQUFMIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEMge1xuICAgIHByaXZhdGUgeCA9IDEwO1xuICAgIGdldFggPSAoKSA9PiB0aGlzLng7XG4gICAgc2V0WCA9IChuZXdWYWw6IG51bWJlcikgPT4geyB0aGlzLnggPSBuZXdWYWw7IH1cbn1cblxuZXhwb3J0IGxldCB4ID0gbmV3IEMoKTtcbmV4cG9ydCBsZXQgeSA9IHsgLi4ueyBzb21lOiBcInZhbHVlXCIgfSB9OyJdfQ==
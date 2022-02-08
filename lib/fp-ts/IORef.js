"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IORef = void 0;
exports.newIORef = newIORef;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Mutable references in the `IO` monad
 *
 * @since 2.0.0
 */

/**
 * @example
 * import { io } from 'fp-ts/IO'
 * import { newIORef } from 'fp-ts/IORef'
 *
 * assert.strictEqual(io.chain(newIORef(1), ref => io.chain(ref.write(2), () => ref.read))(), 2)
 *
 * @category model
 * @since 2.0.0
 */
var IORef = /*#__PURE__*/function () {
  /**
   * @since 2.0.0
   */
  function IORef(value) {
    var _this = this;

    _classCallCheck(this, IORef);

    this.value = value;

    _defineProperty(this, "read", void 0);

    this.read = function () {
      return _this.value;
    };

    this.write = this.write.bind(this);
    this.modify = this.modify.bind(this);
  }
  /**
   * @since 2.0.0
   */


  _createClass(IORef, [{
    key: "write",
    value: function write(a) {
      var _this2 = this;

      return function () {
        _this2.value = a;
      };
    }
    /**
     * @since 2.0.0
     */

  }, {
    key: "modify",
    value: function modify(f) {
      var _this3 = this;

      return function () {
        _this3.value = f(_this3.value);
      };
    }
  }]);

  return IORef;
}();
/**
 * @category constructors
 * @since 2.0.0
 */


exports.IORef = IORef;

function newIORef(a) {
  return function () {
    return new IORef(a);
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9JT1JlZi50cyJdLCJuYW1lcyI6WyJJT1JlZiIsInZhbHVlIiwicmVhZCIsIndyaXRlIiwiYmluZCIsIm1vZGlmeSIsImEiLCJmIiwibmV3SU9SZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ2FBLEs7QUFDWDtBQUNGO0FBQ0E7QUFFRSxpQkFBb0JDLEtBQXBCLEVBQThCO0FBQUE7O0FBQUE7O0FBQUEsU0FBVkEsS0FBVSxHQUFWQSxLQUFVOztBQUFBOztBQUM1QixTQUFLQyxJQUFMLEdBQVk7QUFBQSxhQUFNLEtBQUksQ0FBQ0QsS0FBWDtBQUFBLEtBQVo7O0FBQ0EsU0FBS0UsS0FBTCxHQUFhLEtBQUtBLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQixJQUFoQixDQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUQsSUFBWixDQUFpQixJQUFqQixDQUFkO0FBQ0Q7QUFDRDtBQUNGO0FBQ0E7Ozs7O1dBQ0UsZUFBTUUsQ0FBTixFQUFzQjtBQUFBOztBQUNwQixhQUFPLFlBQU07QUFDWCxRQUFBLE1BQUksQ0FBQ0wsS0FBTCxHQUFhSyxDQUFiO0FBQ0QsT0FGRDtBQUdEO0FBQ0Q7QUFDRjtBQUNBOzs7O1dBQ0UsZ0JBQU9DLENBQVAsRUFBaUM7QUFBQTs7QUFDL0IsYUFBTyxZQUFNO0FBQ1gsUUFBQSxNQUFJLENBQUNOLEtBQUwsR0FBYU0sQ0FBQyxDQUFDLE1BQUksQ0FBQ04sS0FBTixDQUFkO0FBQ0QsT0FGRDtBQUdEOzs7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLFNBQVNPLFFBQVQsQ0FBcUJGLENBQXJCLEVBQXlDO0FBQzlDLFNBQU87QUFBQSxXQUFNLElBQUlOLEtBQUosQ0FBVU0sQ0FBVixDQUFOO0FBQUEsR0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNdXRhYmxlIHJlZmVyZW5jZXMgaW4gdGhlIGBJT2AgbW9uYWRcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuaW1wb3J0IHsgSU8gfSBmcm9tICcuL0lPJ1xuXG4vKipcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBpbyB9IGZyb20gJ2ZwLXRzL0lPJ1xuICogaW1wb3J0IHsgbmV3SU9SZWYgfSBmcm9tICdmcC10cy9JT1JlZidcbiAqXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoaW8uY2hhaW4obmV3SU9SZWYoMSksIHJlZiA9PiBpby5jaGFpbihyZWYud3JpdGUoMiksICgpID0+IHJlZi5yZWFkKSkoKSwgMilcbiAqXG4gKiBAY2F0ZWdvcnkgbW9kZWxcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY2xhc3MgSU9SZWY8QT4ge1xuICAvKipcbiAgICogQHNpbmNlIDIuMC4wXG4gICAqL1xuICByZWFkb25seSByZWFkOiBJTzxBPlxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZhbHVlOiBBKSB7XG4gICAgdGhpcy5yZWFkID0gKCkgPT4gdGhpcy52YWx1ZVxuICAgIHRoaXMud3JpdGUgPSB0aGlzLndyaXRlLmJpbmQodGhpcylcbiAgICB0aGlzLm1vZGlmeSA9IHRoaXMubW9kaWZ5LmJpbmQodGhpcylcbiAgfVxuICAvKipcbiAgICogQHNpbmNlIDIuMC4wXG4gICAqL1xuICB3cml0ZShhOiBBKTogSU88dm9pZD4ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gYVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogQHNpbmNlIDIuMC4wXG4gICAqL1xuICBtb2RpZnkoZjogKGE6IEEpID0+IEEpOiBJTzx2b2lkPiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSBmKHRoaXMudmFsdWUpXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXdJT1JlZjxBPihhOiBBKTogSU88SU9SZWY8QT4+IHtcbiAgcmV0dXJuICgpID0+IG5ldyBJT1JlZihhKVxufVxuIl19
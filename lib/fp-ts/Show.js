"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tuple = exports.struct = exports.showString = exports.showNumber = exports.showBoolean = exports.getTupleShow = exports.getStructShow = void 0;

var _ = _interopRequireWildcard(require("./internal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * The `Show` type class represents those types which can be converted into
 * a human-readable `string` representation.
 *
 * While not required, it is recommended that for any expression `x`, the
 * string `show(x)` be executable TypeScript code which evaluates to the same
 * value as the expression `x`.
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 * @since 2.10.0
 */
var struct = function struct(shows) {
  return {
    show: function show(a) {
      var s = '{';

      for (var k in shows) {
        if (_.has.call(shows, k)) {
          s += " ".concat(k, ": ").concat(shows[k].show(a[k]), ",");
        }
      }

      if (s.length > 1) {
        s = s.slice(0, -1) + ' ';
      }

      s += '}';
      return s;
    }
  };
};
/**
 * @category combinators
 * @since 2.10.0
 */


exports.struct = struct;

var tuple = function tuple() {
  for (var _len = arguments.length, shows = new Array(_len), _key = 0; _key < _len; _key++) {
    shows[_key] = arguments[_key];
  }

  return {
    show: function show(t) {
      return "[".concat(t.map(function (a, i) {
        return shows[i].show(a);
      }).join(', '), "]");
    }
  };
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */


exports.tuple = tuple;
var getTupleShow = tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */

exports.getTupleShow = getTupleShow;
var getStructShow = struct;
/**
 * Use [`Show`](./boolean.ts.html#show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getStructShow = getStructShow;
var showBoolean = {
  show: function show(a) {
    return JSON.stringify(a);
  }
};
/**
 * Use [`Show`](./string.ts.html#show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.showBoolean = showBoolean;
var showString = {
  show: function show(a) {
    return JSON.stringify(a);
  }
};
/**
 * Use [`Show`](./number.ts.html#show) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.showString = showString;
var showNumber = {
  show: function show(a) {
    return JSON.stringify(a);
  }
};
exports.showNumber = showNumber;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9TaG93LnRzIl0sIm5hbWVzIjpbInN0cnVjdCIsInNob3dzIiwic2hvdyIsImEiLCJzIiwiayIsIl8iLCJoYXMiLCJjYWxsIiwibGVuZ3RoIiwic2xpY2UiLCJ0dXBsZSIsInQiLCJtYXAiLCJpIiwiam9pbiIsImdldFR1cGxlU2hvdyIsImdldFN0cnVjdFNob3ciLCJzaG93Qm9vbGVhbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaG93U3RyaW5nIiwic2hvd051bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBVUE7Ozs7OztBQVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUlDLEtBQUo7QUFBQSxTQUF3RjtBQUM1R0MsSUFBQUEsSUFBSSxFQUFFLGNBQUNDLENBQUQsRUFBTztBQUNYLFVBQUlDLENBQUMsR0FBRyxHQUFSOztBQUNBLFdBQUssSUFBTUMsQ0FBWCxJQUFnQkosS0FBaEIsRUFBdUI7QUFDckIsWUFBSUssQ0FBQyxDQUFDQyxHQUFGLENBQU1DLElBQU4sQ0FBV1AsS0FBWCxFQUFrQkksQ0FBbEIsQ0FBSixFQUEwQjtBQUN4QkQsVUFBQUEsQ0FBQyxlQUFRQyxDQUFSLGVBQWNKLEtBQUssQ0FBQ0ksQ0FBRCxDQUFMLENBQVNILElBQVQsQ0FBY0MsQ0FBQyxDQUFDRSxDQUFELENBQWYsQ0FBZCxNQUFEO0FBQ0Q7QUFDRjs7QUFDRCxVQUFJRCxDQUFDLENBQUNLLE1BQUYsR0FBVyxDQUFmLEVBQWtCO0FBQ2hCTCxRQUFBQSxDQUFDLEdBQUdBLENBQUMsQ0FBQ00sS0FBRixDQUFRLENBQVIsRUFBVyxDQUFDLENBQVosSUFBaUIsR0FBckI7QUFDRDs7QUFDRE4sTUFBQUEsQ0FBQyxJQUFJLEdBQUw7QUFDQSxhQUFPQSxDQUFQO0FBQ0Q7QUFiMkcsR0FBeEY7QUFBQSxDQUFmO0FBZ0JQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1PLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsb0NBQ2hCVixLQURnQjtBQUNoQkEsSUFBQUEsS0FEZ0I7QUFBQTs7QUFBQSxTQUVJO0FBQ3ZCQyxJQUFBQSxJQUFJLEVBQUUsY0FBQ1UsQ0FBRDtBQUFBLHdCQUFXQSxDQUFDLENBQUNDLEdBQUYsQ0FBTSxVQUFDVixDQUFELEVBQUlXLENBQUo7QUFBQSxlQUFVYixLQUFLLENBQUNhLENBQUQsQ0FBTCxDQUFTWixJQUFULENBQWNDLENBQWQsQ0FBVjtBQUFBLE9BQU4sRUFBa0NZLElBQWxDLENBQXVDLElBQXZDLENBQVg7QUFBQTtBQURpQixHQUZKO0FBQUEsQ0FBZCxDLENBTVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTUMsWUFFd0QsR0FBR0wsS0FGakU7QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTU0sYUFFRCxHQUFHakIsTUFGUjtBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNa0IsV0FBMEIsR0FBRztBQUN4Q2hCLEVBQUFBLElBQUksRUFBRSxjQUFDQyxDQUFEO0FBQUEsV0FBT2dCLElBQUksQ0FBQ0MsU0FBTCxDQUFlakIsQ0FBZixDQUFQO0FBQUE7QUFEa0MsQ0FBbkM7QUFJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWtCLFVBQXdCLEdBQUc7QUFDdENuQixFQUFBQSxJQUFJLEVBQUUsY0FBQ0MsQ0FBRDtBQUFBLFdBQU9nQixJQUFJLENBQUNDLFNBQUwsQ0FBZWpCLENBQWYsQ0FBUDtBQUFBO0FBRGdDLENBQWpDO0FBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1tQixVQUF3QixHQUFHO0FBQ3RDcEIsRUFBQUEsSUFBSSxFQUFFLGNBQUNDLENBQUQ7QUFBQSxXQUFPZ0IsSUFBSSxDQUFDQyxTQUFMLENBQWVqQixDQUFmLENBQVA7QUFBQTtBQURnQyxDQUFqQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhlIGBTaG93YCB0eXBlIGNsYXNzIHJlcHJlc2VudHMgdGhvc2UgdHlwZXMgd2hpY2ggY2FuIGJlIGNvbnZlcnRlZCBpbnRvXG4gKiBhIGh1bWFuLXJlYWRhYmxlIGBzdHJpbmdgIHJlcHJlc2VudGF0aW9uLlxuICpcbiAqIFdoaWxlIG5vdCByZXF1aXJlZCwgaXQgaXMgcmVjb21tZW5kZWQgdGhhdCBmb3IgYW55IGV4cHJlc3Npb24gYHhgLCB0aGVcbiAqIHN0cmluZyBgc2hvdyh4KWAgYmUgZXhlY3V0YWJsZSBUeXBlU2NyaXB0IGNvZGUgd2hpY2ggZXZhbHVhdGVzIHRvIHRoZSBzYW1lXG4gKiB2YWx1ZSBhcyB0aGUgZXhwcmVzc2lvbiBgeGAuXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCAqIGFzIF8gZnJvbSAnLi9pbnRlcm5hbCdcbmltcG9ydCB7IFJlYWRvbmx5UmVjb3JkIH0gZnJvbSAnLi9SZWFkb25seVJlY29yZCdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgdHlwZSBjbGFzc2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTaG93PEE+IHtcbiAgcmVhZG9ubHkgc2hvdzogKGE6IEEpID0+IHN0cmluZ1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBjb21iaW5hdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3Qgc3RydWN0ID0gPEE+KHNob3dzOiB7IFtLIGluIGtleW9mIEFdOiBTaG93PEFbS10+IH0pOiBTaG93PHsgcmVhZG9ubHkgW0sgaW4ga2V5b2YgQV06IEFbS10gfT4gPT4gKHtcbiAgc2hvdzogKGEpID0+IHtcbiAgICBsZXQgcyA9ICd7J1xuICAgIGZvciAoY29uc3QgayBpbiBzaG93cykge1xuICAgICAgaWYgKF8uaGFzLmNhbGwoc2hvd3MsIGspKSB7XG4gICAgICAgIHMgKz0gYCAke2t9OiAke3Nob3dzW2tdLnNob3coYVtrXSl9LGBcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHMubGVuZ3RoID4gMSkge1xuICAgICAgcyA9IHMuc2xpY2UoMCwgLTEpICsgJyAnXG4gICAgfVxuICAgIHMgKz0gJ30nXG4gICAgcmV0dXJuIHNcbiAgfVxufSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHR1cGxlID0gPEEgZXh0ZW5kcyBSZWFkb25seUFycmF5PHVua25vd24+PihcbiAgLi4uc2hvd3M6IHsgW0sgaW4ga2V5b2YgQV06IFNob3c8QVtLXT4gfVxuKTogU2hvdzxSZWFkb25seTxBPj4gPT4gKHtcbiAgc2hvdzogKHQpID0+IGBbJHt0Lm1hcCgoYSwgaSkgPT4gc2hvd3NbaV0uc2hvdyhhKSkuam9pbignLCAnKX1dYFxufSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIFVzZSBbYHR1cGxlYF0oI3R1cGxlKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0VHVwbGVTaG93OiA8VCBleHRlbmRzIFJlYWRvbmx5QXJyYXk8U2hvdzxhbnk+Pj4oXG4gIC4uLnNob3dzOiBUXG4pID0+IFNob3c8eyBbSyBpbiBrZXlvZiBUXTogVFtLXSBleHRlbmRzIFNob3c8aW5mZXIgQT4gPyBBIDogbmV2ZXIgfT4gPSB0dXBsZVxuXG4vKipcbiAqIFVzZSBbYHN0cnVjdGBdKCNzdHJ1Y3QpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTdHJ1Y3RTaG93OiA8TyBleHRlbmRzIFJlYWRvbmx5UmVjb3JkPHN0cmluZywgYW55Pj4oXG4gIHNob3dzOiB7IFtLIGluIGtleW9mIE9dOiBTaG93PE9bS10+IH1cbikgPT4gU2hvdzxPPiA9IHN0cnVjdFxuXG4vKipcbiAqIFVzZSBbYFNob3dgXSguL2Jvb2xlYW4udHMuaHRtbCNzaG93KSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dCb29sZWFuOiBTaG93PGJvb2xlYW4+ID0ge1xuICBzaG93OiAoYSkgPT4gSlNPTi5zdHJpbmdpZnkoYSlcbn1cblxuLyoqXG4gKiBVc2UgW2BTaG93YF0oLi9zdHJpbmcudHMuaHRtbCNzaG93KSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dTdHJpbmc6IFNob3c8c3RyaW5nPiA9IHtcbiAgc2hvdzogKGEpID0+IEpTT04uc3RyaW5naWZ5KGEpXG59XG5cbi8qKlxuICogVXNlIFtgU2hvd2BdKC4vbnVtYmVyLnRzLmh0bWwjc2hvdykgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBzaG93TnVtYmVyOiBTaG93PG51bWJlcj4gPSB7XG4gIHNob3c6IChhKSA9PiBKU09OLnN0cmluZ2lmeShhKVxufVxuIl19
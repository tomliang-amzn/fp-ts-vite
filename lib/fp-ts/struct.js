"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAssignSemigroup = exports.evolve = void 0;

var _ = _interopRequireWildcard(require("./internal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @since 2.10.0
 */
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * Return a semigroup which works like `Object.assign`.
 *
 * @example
 * import { getAssignSemigroup } from 'fp-ts/struct'
 *
 * interface Person {
 *   readonly name: string
 *   readonly age: number
 * }
 *
 * const S = getAssignSemigroup<Person>()
 * assert.deepStrictEqual(S.concat({ name: 'name', age: 23 }, { name: 'name', age: 24 }), { name: 'name', age: 24 })
 *
 * @category instances
 * @since 2.10.0
 */
var getAssignSemigroup = function getAssignSemigroup() {
  return {
    concat: function concat(first, second) {
      return Object.assign({}, first, second);
    }
  };
}; // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * Creates a new object by recursively evolving a shallow copy of `a`, according to the `transformation` functions.
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 * import { evolve } from 'fp-ts/struct'
 *
 * assert.deepStrictEqual(
 *   pipe(
 *     { a: 'a', b: 1 },
 *     evolve({
 *       a: (a) => a.length,
 *       b: (b) => b * 2
 *     })
 *   ),
 *   { a: 1, b: 2 }
 * )
 *
 * @since 2.11.0
 */


exports.getAssignSemigroup = getAssignSemigroup;

var evolve = function evolve(transformations) {
  return function (a) {
    var out = {};

    for (var k in a) {
      if (_.has.call(a, k)) {
        out[k] = transformations[k](a[k]);
      }
    }

    return out;
  };
};

exports.evolve = evolve;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9zdHJ1Y3QudHMiXSwibmFtZXMiOlsiZ2V0QXNzaWduU2VtaWdyb3VwIiwiY29uY2F0IiwiZmlyc3QiLCJzZWNvbmQiLCJPYmplY3QiLCJhc3NpZ24iLCJldm9sdmUiLCJ0cmFuc2Zvcm1hdGlvbnMiLCJhIiwib3V0IiwiayIsIl8iLCJoYXMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQTs7Ozs7O0FBSEE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsU0FBK0M7QUFDL0VDLElBQUFBLE1BQU0sRUFBRSxnQkFBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsYUFBbUJDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JILEtBQWxCLEVBQXlCQyxNQUF6QixDQUFuQjtBQUFBO0FBRHVFLEdBQS9DO0FBQUEsQ0FBM0IsQyxDQUlQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQXdEQyxlQUF4RDtBQUFBLFNBQStFLFVBQ25HQyxDQURtRyxFQUUxRDtBQUN6QyxRQUFNQyxHQUE0QixHQUFHLEVBQXJDOztBQUNBLFNBQUssSUFBTUMsQ0FBWCxJQUFnQkYsQ0FBaEIsRUFBbUI7QUFDakIsVUFBSUcsQ0FBQyxDQUFDQyxHQUFGLENBQU1DLElBQU4sQ0FBV0wsQ0FBWCxFQUFjRSxDQUFkLENBQUosRUFBc0I7QUFDcEJELFFBQUFBLEdBQUcsQ0FBQ0MsQ0FBRCxDQUFILEdBQVNILGVBQWUsQ0FBQ0csQ0FBRCxDQUFmLENBQW1CRixDQUFDLENBQUNFLENBQUQsQ0FBcEIsQ0FBVDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBT0QsR0FBUDtBQUNELEdBVnFCO0FBQUEsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4vaW50ZXJuYWwnXG5pbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogUmV0dXJuIGEgc2VtaWdyb3VwIHdoaWNoIHdvcmtzIGxpa2UgYE9iamVjdC5hc3NpZ25gLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBnZXRBc3NpZ25TZW1pZ3JvdXAgfSBmcm9tICdmcC10cy9zdHJ1Y3QnXG4gKlxuICogaW50ZXJmYWNlIFBlcnNvbiB7XG4gKiAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICogICByZWFkb25seSBhZ2U6IG51bWJlclxuICogfVxuICpcbiAqIGNvbnN0IFMgPSBnZXRBc3NpZ25TZW1pZ3JvdXA8UGVyc29uPigpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFMuY29uY2F0KHsgbmFtZTogJ25hbWUnLCBhZ2U6IDIzIH0sIHsgbmFtZTogJ25hbWUnLCBhZ2U6IDI0IH0pLCB7IG5hbWU6ICduYW1lJywgYWdlOiAyNCB9KVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEFzc2lnblNlbWlncm91cCA9IDxBIGV4dGVuZHMgb2JqZWN0ID0gbmV2ZXI+KCk6IFNlbWlncm91cDxBPiA9PiAoe1xuICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiBPYmplY3QuYXNzaWduKHt9LCBmaXJzdCwgc2Vjb25kKVxufSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdXRpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG9iamVjdCBieSByZWN1cnNpdmVseSBldm9sdmluZyBhIHNoYWxsb3cgY29weSBvZiBgYWAsIGFjY29yZGluZyB0byB0aGUgYHRyYW5zZm9ybWF0aW9uYCBmdW5jdGlvbnMuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqIGltcG9ydCB7IGV2b2x2ZSB9IGZyb20gJ2ZwLXRzL3N0cnVjdCdcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICogICBwaXBlKFxuICogICAgIHsgYTogJ2EnLCBiOiAxIH0sXG4gKiAgICAgZXZvbHZlKHtcbiAqICAgICAgIGE6IChhKSA9PiBhLmxlbmd0aCxcbiAqICAgICAgIGI6IChiKSA9PiBiICogMlxuICogICAgIH0pXG4gKiAgICksXG4gKiAgIHsgYTogMSwgYjogMiB9XG4gKiApXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZXZvbHZlID0gPEEsIEYgZXh0ZW5kcyB7IFtLIGluIGtleW9mIEFdOiAoYTogQVtLXSkgPT4gdW5rbm93biB9Pih0cmFuc2Zvcm1hdGlvbnM6IEYpID0+IChcbiAgYTogQVxuKTogeyBbSyBpbiBrZXlvZiBGXTogUmV0dXJuVHlwZTxGW0tdPiB9ID0+IHtcbiAgY29uc3Qgb3V0OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9XG4gIGZvciAoY29uc3QgayBpbiBhKSB7XG4gICAgaWYgKF8uaGFzLmNhbGwoYSwgaykpIHtcbiAgICAgIG91dFtrXSA9IHRyYW5zZm9ybWF0aW9uc1trXShhW2tdKVxuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0IGFzIGFueVxufVxuIl19
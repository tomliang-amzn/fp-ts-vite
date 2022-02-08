"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchW = exports.match = exports.isBoolean = exports.foldW = exports.fold = exports.Show = exports.SemigroupAny = exports.SemigroupAll = exports.Ord = exports.MonoidAny = exports.MonoidAll = exports.Eq = exports.BooleanAlgebra = void 0;

/**
 * @since 2.2.0
 */
// -------------------------------------------------------------------------------------
// refinements
// -------------------------------------------------------------------------------------

/**
 * @category refinements
 * @since 2.11.0
 */
var isBoolean = function isBoolean(u) {
  return typeof u === 'boolean';
}; // -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */


exports.isBoolean = isBoolean;

var matchW = function matchW(onFalse, onTrue) {
  return function (value) {
    return value ? onTrue() : onFalse();
  };
};
/**
 * Alias of [`matchW`](#matchw).
 *
 * @category destructors
 * @since 2.10.0
 */


exports.matchW = matchW;
var foldW = matchW;
/**
 * Defines the fold over a boolean value.
 * Takes two thunks `onTrue`, `onFalse` and a `boolean` value.
 * If `value` is false, `onFalse()` is returned, otherwise `onTrue()`.
 *
 * @example
 * import { some, map } from 'fp-ts/Option'
 * import { pipe } from 'fp-ts/function'
 * import { match } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(
 *  pipe(
 *    some(true),
 *    map(match(() => 'false', () => 'true'))
 *  ),
 *  some('true')
 * )
 *
 * @category destructors
 * @since 2.10.0
 */

exports.foldW = foldW;
var match = foldW;
/**
 * Alias of [`match`](#match).
 *
 * @category destructors
 * @since 2.2.0
 */

exports.match = match;
var fold = match; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.10.0
 */

exports.fold = fold;
var Eq = {
  equals: function equals(first, second) {
    return first === second;
  }
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Eq = Eq;
var BooleanAlgebra = {
  meet: function meet(first, second) {
    return first && second;
  },
  join: function join(first, second) {
    return first || second;
  },
  zero: false,
  one: true,
  implies: function implies(first, second) {
    return !first || second;
  },
  not: function not(b) {
    return !b;
  }
};
/**
 * `boolean` semigroup under conjunction.
 *
 * @example
 * import { SemigroupAll } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(SemigroupAll.concat(true, true), true)
 * assert.deepStrictEqual(SemigroupAll.concat(true, false), false)
 *
 * @category instances
 * @since 2.10.0
 */

exports.BooleanAlgebra = BooleanAlgebra;
var SemigroupAll = {
  concat: function concat(first, second) {
    return first && second;
  }
};
/**
 * `boolean` semigroup under disjunction.
 *
 * @example
 * import { SemigroupAny } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(SemigroupAny.concat(true, true), true)
 * assert.deepStrictEqual(SemigroupAny.concat(true, false), true)
 * assert.deepStrictEqual(SemigroupAny.concat(false, false), false)
 *
 * @category instances
 * @since 2.10.0
 */

exports.SemigroupAll = SemigroupAll;
var SemigroupAny = {
  concat: function concat(first, second) {
    return first || second;
  }
};
/**
 * `boolean` monoid under conjunction.
 *
 * The `empty` value is `true`.
 *
 * @example
 * import { MonoidAll } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(MonoidAll.concat(true, true), true)
 * assert.deepStrictEqual(MonoidAll.concat(true, false), false)
 *
 * @category instances
 * @since 2.10.0
 */

exports.SemigroupAny = SemigroupAny;
var MonoidAll = {
  concat: SemigroupAll.concat,
  empty: true
};
/**
 * `boolean` monoid under disjunction.
 *
 * The `empty` value is `false`.
 *
 * @example
 * import { MonoidAny } from 'fp-ts/boolean'
 *
 * assert.deepStrictEqual(MonoidAny.concat(true, true), true)
 * assert.deepStrictEqual(MonoidAny.concat(true, false), true)
 * assert.deepStrictEqual(MonoidAny.concat(false, false), false)
 *
 * @category instances
 * @since 2.10.0
 */

exports.MonoidAll = MonoidAll;
var MonoidAny = {
  concat: SemigroupAny.concat,
  empty: false
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.MonoidAny = MonoidAny;
var Ord = {
  equals: Eq.equals,
  compare: function compare(first, second) {
    return first < second ? -1 : first > second ? 1 : 0;
  }
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Ord = Ord;
var Show = {
  show: function show(b) {
    return JSON.stringify(b);
  }
};
exports.Show = Show;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9ib29sZWFuLnRzIl0sIm5hbWVzIjpbImlzQm9vbGVhbiIsInUiLCJtYXRjaFciLCJvbkZhbHNlIiwib25UcnVlIiwidmFsdWUiLCJmb2xkVyIsIm1hdGNoIiwiZm9sZCIsIkVxIiwiZXF1YWxzIiwiZmlyc3QiLCJzZWNvbmQiLCJCb29sZWFuQWxnZWJyYSIsIm1lZXQiLCJqb2luIiwiemVybyIsIm9uZSIsImltcGxpZXMiLCJub3QiLCJiIiwiU2VtaWdyb3VwQWxsIiwiY29uY2F0IiwiU2VtaWdyb3VwQW55IiwiTW9ub2lkQWxsIiwiZW1wdHkiLCJNb25vaWRBbnkiLCJPcmQiLCJjb21wYXJlIiwiU2hvdyIsInNob3ciLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsU0FBdUMsR0FBRyxTQUExQ0EsU0FBMEMsQ0FBQ0MsQ0FBRDtBQUFBLFNBQThCLE9BQU9BLENBQVAsS0FBYSxTQUEzQztBQUFBLENBQWhELEMsQ0FFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQU9DLE9BQVAsRUFBeUJDLE1BQXpCO0FBQUEsU0FBNkMsVUFBQ0MsS0FBRDtBQUFBLFdBQ2pFQSxLQUFLLEdBQUdELE1BQU0sRUFBVCxHQUFjRCxPQUFPLEVBRHVDO0FBQUEsR0FBN0M7QUFBQSxDQUFmO0FBR1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTUcsS0FBSyxHQUFHSixNQUFkO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNSyxLQUFzRSxH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cyBCQSBmcm9tICcuL0Jvb2xlYW5BbGdlYnJhJ1xuaW1wb3J0ICogYXMgRSBmcm9tICcuL0VxJ1xuaW1wb3J0IHsgTGF6eSB9IGZyb20gJy4vZnVuY3Rpb24nXG5pbXBvcnQgeyBNb25vaWQgfSBmcm9tICcuL01vbm9pZCdcbmltcG9ydCAqIGFzIE8gZnJvbSAnLi9PcmQnXG5pbXBvcnQgeyBSZWZpbmVtZW50IH0gZnJvbSAnLi9SZWZpbmVtZW50J1xuaW1wb3J0IHsgU2VtaWdyb3VwIH0gZnJvbSAnLi9TZW1pZ3JvdXAnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vU2hvdydcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcmVmaW5lbWVudHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgcmVmaW5lbWVudHNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGlzQm9vbGVhbjogUmVmaW5lbWVudDx1bmtub3duLCBib29sZWFuPiA9ICh1OiB1bmtub3duKTogdSBpcyBib29sZWFuID0+IHR5cGVvZiB1ID09PSAnYm9vbGVhbidcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVzdHJ1Y3RvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgbWF0Y2hgXSgjbWF0Y2gpLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hXID0gPEEsIEI+KG9uRmFsc2U6IExhenk8QT4sIG9uVHJ1ZTogTGF6eTxCPikgPT4gKHZhbHVlOiBib29sZWFuKTogQSB8IEIgPT5cbiAgdmFsdWUgPyBvblRydWUoKSA6IG9uRmFsc2UoKVxuXG4vKipcbiAqIEFsaWFzIG9mIFtgbWF0Y2hXYF0oI21hdGNodykuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xkVyA9IG1hdGNoV1xuXG4vKipcbiAqIERlZmluZXMgdGhlIGZvbGQgb3ZlciBhIGJvb2xlYW4gdmFsdWUuXG4gKiBUYWtlcyB0d28gdGh1bmtzIGBvblRydWVgLCBgb25GYWxzZWAgYW5kIGEgYGJvb2xlYW5gIHZhbHVlLlxuICogSWYgYHZhbHVlYCBpcyBmYWxzZSwgYG9uRmFsc2UoKWAgaXMgcmV0dXJuZWQsIG90aGVyd2lzZSBgb25UcnVlKClgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBzb21lLCBtYXAgfSBmcm9tICdmcC10cy9PcHRpb24nXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKiBpbXBvcnQgeyBtYXRjaCB9IGZyb20gJ2ZwLXRzL2Jvb2xlYW4nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAqICBwaXBlKFxuICogICAgc29tZSh0cnVlKSxcbiAqICAgIG1hcChtYXRjaCgoKSA9PiAnZmFsc2UnLCAoKSA9PiAndHJ1ZScpKVxuICogICksXG4gKiAgc29tZSgndHJ1ZScpXG4gKiApXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaDogPEE+KG9uRmFsc2U6IExhenk8QT4sIG9uVHJ1ZTogTGF6eTxBPikgPT4gKHZhbHVlOiBib29sZWFuKSA9PiBBID0gZm9sZFdcblxuLyoqXG4gKiBBbGlhcyBvZiBbYG1hdGNoYF0oI21hdGNoKS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjIuMFxuICovXG5leHBvcnQgY29uc3QgZm9sZCA9IG1hdGNoXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluc3RhbmNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEVxOiBFLkVxPGJvb2xlYW4+ID0ge1xuICBlcXVhbHM6IChmaXJzdCwgc2Vjb25kKSA9PiBmaXJzdCA9PT0gc2Vjb25kXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQm9vbGVhbkFsZ2VicmE6IEJBLkJvb2xlYW5BbGdlYnJhPGJvb2xlYW4+ID0ge1xuICBtZWV0OiAoZmlyc3QsIHNlY29uZCkgPT4gZmlyc3QgJiYgc2Vjb25kLFxuICBqb2luOiAoZmlyc3QsIHNlY29uZCkgPT4gZmlyc3QgfHwgc2Vjb25kLFxuICB6ZXJvOiBmYWxzZSxcbiAgb25lOiB0cnVlLFxuICBpbXBsaWVzOiAoZmlyc3QsIHNlY29uZCkgPT4gIWZpcnN0IHx8IHNlY29uZCxcbiAgbm90OiAoYikgPT4gIWJcbn1cblxuLyoqXG4gKiBgYm9vbGVhbmAgc2VtaWdyb3VwIHVuZGVyIGNvbmp1bmN0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBTZW1pZ3JvdXBBbGwgfSBmcm9tICdmcC10cy9ib29sZWFuJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoU2VtaWdyb3VwQWxsLmNvbmNhdCh0cnVlLCB0cnVlKSwgdHJ1ZSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoU2VtaWdyb3VwQWxsLmNvbmNhdCh0cnVlLCBmYWxzZSksIGZhbHNlKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFNlbWlncm91cEFsbDogU2VtaWdyb3VwPGJvb2xlYW4+ID0ge1xuICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiBmaXJzdCAmJiBzZWNvbmRcbn1cblxuLyoqXG4gKiBgYm9vbGVhbmAgc2VtaWdyb3VwIHVuZGVyIGRpc2p1bmN0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBTZW1pZ3JvdXBBbnkgfSBmcm9tICdmcC10cy9ib29sZWFuJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoU2VtaWdyb3VwQW55LmNvbmNhdCh0cnVlLCB0cnVlKSwgdHJ1ZSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoU2VtaWdyb3VwQW55LmNvbmNhdCh0cnVlLCBmYWxzZSksIHRydWUpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFNlbWlncm91cEFueS5jb25jYXQoZmFsc2UsIGZhbHNlKSwgZmFsc2UpXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgU2VtaWdyb3VwQW55OiBTZW1pZ3JvdXA8Ym9vbGVhbj4gPSB7XG4gIGNvbmNhdDogKGZpcnN0LCBzZWNvbmQpID0+IGZpcnN0IHx8IHNlY29uZFxufVxuXG4vKipcbiAqIGBib29sZWFuYCBtb25vaWQgdW5kZXIgY29uanVuY3Rpb24uXG4gKlxuICogVGhlIGBlbXB0eWAgdmFsdWUgaXMgYHRydWVgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBNb25vaWRBbGwgfSBmcm9tICdmcC10cy9ib29sZWFuJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoTW9ub2lkQWxsLmNvbmNhdCh0cnVlLCB0cnVlKSwgdHJ1ZSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoTW9ub2lkQWxsLmNvbmNhdCh0cnVlLCBmYWxzZSksIGZhbHNlKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IE1vbm9pZEFsbDogTW9ub2lkPGJvb2xlYW4+ID0ge1xuICBjb25jYXQ6IFNlbWlncm91cEFsbC5jb25jYXQsXG4gIGVtcHR5OiB0cnVlXG59XG5cbi8qKlxuICogYGJvb2xlYW5gIG1vbm9pZCB1bmRlciBkaXNqdW5jdGlvbi5cbiAqXG4gKiBUaGUgYGVtcHR5YCB2YWx1ZSBpcyBgZmFsc2VgLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBNb25vaWRBbnkgfSBmcm9tICdmcC10cy9ib29sZWFuJ1xuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoTW9ub2lkQW55LmNvbmNhdCh0cnVlLCB0cnVlKSwgdHJ1ZSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoTW9ub2lkQW55LmNvbmNhdCh0cnVlLCBmYWxzZSksIHRydWUpXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKE1vbm9pZEFueS5jb25jYXQoZmFsc2UsIGZhbHNlKSwgZmFsc2UpXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgTW9ub2lkQW55OiBNb25vaWQ8Ym9vbGVhbj4gPSB7XG4gIGNvbmNhdDogU2VtaWdyb3VwQW55LmNvbmNhdCxcbiAgZW1wdHk6IGZhbHNlXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgT3JkOiBPLk9yZDxib29sZWFuPiA9IHtcbiAgZXF1YWxzOiBFcS5lcXVhbHMsXG4gIGNvbXBhcmU6IChmaXJzdCwgc2Vjb25kKSA9PiAoZmlyc3QgPCBzZWNvbmQgPyAtMSA6IGZpcnN0ID4gc2Vjb25kID8gMSA6IDApXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgU2hvdzogUy5TaG93PGJvb2xlYW4+ID0ge1xuICBzaG93OiAoYikgPT4gSlNPTi5zdHJpbmdpZnkoYilcbn1cbiJdfQ==
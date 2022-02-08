"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tuple = exports.struct = exports.strictEqual = exports.getTupleEq = exports.getStructEq = exports.getSemigroup = exports.getMonoid = exports.fromEquals = exports.eqString = exports.eqStrict = exports.eqNumber = exports.eqDate = exports.eqBoolean = exports.eq = exports.contramap = exports.URI = exports.Contravariant = void 0;

var _function = require("./function");

/**
 * The `Eq` type class represents types which support decidable equality.
 *
 * Instances must satisfy the following laws:
 *
 * 1. Reflexivity: `E.equals(a, a) === true`
 * 2. Symmetry: `E.equals(a, b) === E.equals(b, a)`
 * 3. Transitivity: if `E.equals(a, b) === true` and `E.equals(b, c) === true`, then `E.equals(a, c) === true`
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 2.0.0
 */
var fromEquals = function fromEquals(_equals) {
  return {
    equals: function equals(x, y) {
      return x === y || _equals(x, y);
    }
  };
}; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 * @since 2.10.0
 */


exports.fromEquals = fromEquals;

var struct = function struct(eqs) {
  return fromEquals(function (first, second) {
    for (var key in eqs) {
      if (!eqs[key].equals(first[key], second[key])) {
        return false;
      }
    }

    return true;
  });
};
/**
 * Given a tuple of `Eq`s returns a `Eq` for the tuple
 *
 * @example
 * import { tuple } from 'fp-ts/Eq'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 * import * as B from 'fp-ts/boolean'
 *
 * const E = tuple(S.Eq, N.Eq, B.Eq)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 1, true]), true)
 * assert.strictEqual(E.equals(['a', 1, true], ['b', 1, true]), false)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 2, true]), false)
 * assert.strictEqual(E.equals(['a', 1, true], ['a', 1, false]), false)
 *
 * @category combinators
 * @since 2.10.0
 */


exports.struct = struct;

var tuple = function tuple() {
  for (var _len = arguments.length, eqs = new Array(_len), _key = 0; _key < _len; _key++) {
    eqs[_key] = arguments[_key];
  }

  return fromEquals(function (first, second) {
    return eqs.every(function (E, i) {
      return E.equals(first[i], second[i]);
    });
  });
}; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

/* istanbul ignore next */


exports.tuple = tuple;

var contramap_ = function contramap_(fa, f) {
  return (0, _function.pipe)(fa, contramap(f));
}; // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * @category Contravariant
 * @since 2.0.0
 */


var contramap = function contramap(f) {
  return function (fa) {
    return fromEquals(function (x, y) {
      return fa.equals(f(x), f(y));
    });
  };
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */


exports.contramap = contramap;
var URI = 'Eq';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.5.0
 */
var eqStrict = {
  equals: function equals(a, b) {
    return a === b;
  }
};
exports.eqStrict = eqStrict;
var empty = {
  equals: function equals() {
    return true;
  }
};
/**
 * @category instances
 * @since 2.10.0
 */

var getSemigroup = function getSemigroup() {
  return {
    concat: function concat(x, y) {
      return fromEquals(function (a, b) {
        return x.equals(a, b) && y.equals(a, b);
      });
    }
  };
};
/**
 * @category instances
 * @since 2.6.0
 */


exports.getSemigroup = getSemigroup;

var getMonoid = function getMonoid() {
  return {
    concat: getSemigroup().concat,
    empty: empty
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.getMonoid = getMonoid;
var Contravariant = {
  URI: URI,
  contramap: contramap_
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

exports.Contravariant = Contravariant;
var getTupleEq = tuple;
/**
 * Use [`struct`](#struct) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */

exports.getTupleEq = getTupleEq;
var getStructEq = struct;
/**
 * Use [`eqStrict`](#eqstrict) instead
 *
 * @since 2.0.0
 * @deprecated
 */

exports.getStructEq = getStructEq;
var strictEqual = eqStrict.equals;
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.strictEqual = strictEqual;
var eq = Contravariant;
/**
 * Use [`Eq`](./boolean.ts.html#eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.eq = eq;
var eqBoolean = eqStrict;
/**
 * Use [`Eq`](./string.ts.html#eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.eqBoolean = eqBoolean;
var eqString = eqStrict;
/**
 * Use [`Eq`](./number.ts.html#eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.eqString = eqString;
var eqNumber = eqStrict;
/**
 * Use [`Eq`](./Date.ts.html#eq) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.eqNumber = eqNumber;
var eqDate = {
  equals: function equals(first, second) {
    return first.valueOf() === second.valueOf();
  }
};
exports.eqDate = eqDate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9FcS50cyJdLCJuYW1lcyI6WyJmcm9tRXF1YWxzIiwiZXF1YWxzIiwieCIsInkiLCJzdHJ1Y3QiLCJlcXMiLCJmaXJzdCIsInNlY29uZCIsImtleSIsInR1cGxlIiwiZXZlcnkiLCJFIiwiaSIsImNvbnRyYW1hcF8iLCJmYSIsImYiLCJjb250cmFtYXAiLCJVUkkiLCJlcVN0cmljdCIsImEiLCJiIiwiZW1wdHkiLCJnZXRTZW1pZ3JvdXAiLCJjb25jYXQiLCJnZXRNb25vaWQiLCJDb250cmF2YXJpYW50IiwiZ2V0VHVwbGVFcSIsImdldFN0cnVjdEVxIiwic3RyaWN0RXF1YWwiLCJlcSIsImVxQm9vbGVhbiIsImVxU3RyaW5nIiwiZXFOdW1iZXIiLCJlcURhdGUiLCJ2YWx1ZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBWUE7O0FBWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFJQyxPQUFKO0FBQUEsU0FBd0M7QUFDaEVBLElBQUFBLE1BQU0sRUFBRSxnQkFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsYUFBVUQsQ0FBQyxLQUFLQyxDQUFOLElBQVdGLE9BQU0sQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLENBQTNCO0FBQUE7QUFEd0QsR0FBeEM7QUFBQSxDQUFuQixDLENBSVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUlDLEdBQUo7QUFBQSxTQUNwQkwsVUFBVSxDQUFDLFVBQUNNLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUM1QixTQUFLLElBQU1DLEdBQVgsSUFBa0JILEdBQWxCLEVBQXVCO0FBQ3JCLFVBQUksQ0FBQ0EsR0FBRyxDQUFDRyxHQUFELENBQUgsQ0FBU1As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Z0Q7QUFFaERELEVBQUFBLFNBQVMsRUFBRUg7QUFGcUMsQ0FBM0MsQyxDQUtQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWEsVUFFb0QsR0FBR2pCLEtBRjdEO0FBSVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1rQixXQUFnRyxHQUFHdkIsTUFBekc7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU13QixXQUF1QyxHQUFHVixRQUFRLENBQUNqQixNQUF6RDtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNNEIsRUFBdUIsR0FBR0osYUFBaEM7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUssU0FBc0IsR0FBR1osUUFBL0I7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWEsUUFBb0IsR0FBR2IsUUFBN0I7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWMsUUFBb0IsR0FBR2QsUUFBN0I7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWUsTUFBZ0IsR0FBRztBQUM5QmhDLEVBQUFBLE1BQU0sRUFBRSxnQkFBQ0ssS0FBRCxFQUFRQyxNQUFSO0FBQUEsV0FBbUJELEtBQUssQ0FBQzRCLE9BQU4sT0FBb0IzQixNQUFNLENBQUMyQixPQUFQLEVBQXZDO0FBQUE7QUFEc0IsQ0FBekIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBgRXFgIHR5cGUgY2xhc3MgcmVwcmVzZW50cyB0eXBlcyB3aGljaCBzdXBwb3J0IGRlY2lkYWJsZSBlcXVhbGl0eS5cbiAqXG4gKiBJbnN0YW5jZXMgbXVzdCBzYXRpc2Z5IHRoZSBmb2xsb3dpbmcgbGF3czpcbiAqXG4gKiAxLiBSZWZsZXhpdml0eTogYEUuZXF1YWxzKGEsIGEpID09PSB0cnVlYFxuICogMi4gU3ltbWV0cnk6IGBFLmVxdWFscyhhLCBiKSA9PT0gRS5lcXVhbHMoYiwgYSlgXG4gKiAzLiBUcmFuc2l0aXZpdHk6IGlmIGBFLmVxdWFscyhhLCBiKSA9PT0gdHJ1ZWAgYW5kIGBFLmVxdWFscyhiLCBjKSA9PT0gdHJ1ZWAsIHRoZW4gYEUuZXF1YWxzKGEsIGMpID09PSB0cnVlYFxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5pbXBvcnQgeyBDb250cmF2YXJpYW50MSB9IGZyb20gJy4vQ29udHJhdmFyaWFudCdcbmltcG9ydCB7IHBpcGUgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgTW9ub2lkIH0gZnJvbSAnLi9Nb25vaWQnXG5pbXBvcnQgeyBSZWFkb25seVJlY29yZCB9IGZyb20gJy4vUmVhZG9ubHlSZWNvcmQnXG5pbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgdHlwZSBjbGFzc2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFcTxBPiB7XG4gIHJlYWRvbmx5IGVxdWFsczogKHg6IEEsIHk6IEEpID0+IGJvb2xlYW5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29uc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tRXF1YWxzID0gPEE+KGVxdWFsczogRXE8QT5bJ2VxdWFscyddKTogRXE8QT4gPT4gKHtcbiAgZXF1YWxzOiAoeCwgeSkgPT4geCA9PT0geSB8fCBlcXVhbHMoeCwgeSlcbn0pXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbWJpbmF0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJ1Y3QgPSA8QT4oZXFzOiB7IFtLIGluIGtleW9mIEFdOiBFcTxBW0tdPiB9KTogRXE8eyByZWFkb25seSBbSyBpbiBrZXlvZiBBXTogQVtLXSB9PiA9PlxuICBmcm9tRXF1YWxzKChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZXFzKSB7XG4gICAgICBpZiAoIWVxc1trZXldLmVxdWFscyhmaXJzdFtrZXldLCBzZWNvbmRba2V5XSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlXG4gIH0pXG5cbi8qKlxuICogR2l2ZW4gYSB0dXBsZSBvZiBgRXFgcyByZXR1cm5zIGEgYEVxYCBmb3IgdGhlIHR1cGxlXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHR1cGxlIH0gZnJvbSAnZnAtdHMvRXEnXG4gKiBpbXBvcnQgKiBhcyBTIGZyb20gJ2ZwLXRzL3N0cmluZydcbiAqIGltcG9ydCAqIGFzIE4gZnJvbSAnZnAtdHMvbnVtYmVyJ1xuICogaW1wb3J0ICogYXMgQiBmcm9tICdmcC10cy9ib29sZWFuJ1xuICpcbiAqIGNvbnN0IEUgPSB0dXBsZShTLkVxLCBOLkVxLCBCLkVxKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKEUuZXF1YWxzKFsnYScsIDEsIHRydWVdLCBbJ2EnLCAxLCB0cnVlXSksIHRydWUpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoRS5lcXVhbHMoWydhJywgMSwgdHJ1ZV0sIFsnYicsIDEsIHRydWVdKSwgZmFsc2UpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoRS5lcXVhbHMoWydhJywgMSwgdHJ1ZV0sIFsnYScsIDIsIHRydWVdKSwgZmFsc2UpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoRS5lcXVhbHMoWydhJywgMSwgdHJ1ZV0sIFsnYScsIDEsIGZhbHNlXSksIGZhbHNlKVxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgdHVwbGUgPSA8QSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8dW5rbm93bj4+KC4uLmVxczogeyBbSyBpbiBrZXlvZiBBXTogRXE8QVtLXT4gfSk6IEVxPFJlYWRvbmx5PEE+PiA9PlxuICBmcm9tRXF1YWxzKChmaXJzdCwgc2Vjb25kKSA9PiBlcXMuZXZlcnkoKEUsIGkpID0+IEUuZXF1YWxzKGZpcnN0W2ldLCBzZWNvbmRbaV0pKSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbm9uLXBpcGVhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgY29udHJhbWFwXzogPEEsIEI+KGZhOiBFcTxBPiwgZjogKGI6IEIpID0+IEEpID0+IEVxPEI+ID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBjb250cmFtYXAoZikpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHR5cGUgY2xhc3MgbWVtYmVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb250cmF2YXJpYW50XG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnRyYW1hcDogPEEsIEI+KGY6IChiOiBCKSA9PiBBKSA9PiAoZmE6IEVxPEE+KSA9PiBFcTxCPiA9IChmKSA9PiAoZmEpID0+XG4gIGZyb21FcXVhbHMoKHgsIHkpID0+IGZhLmVxdWFscyhmKHgpLCBmKHkpKSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnRXEnXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCB0eXBlIFVSSSA9IHR5cGVvZiBVUklcblxuZGVjbGFyZSBtb2R1bGUgJy4vSEtUJyB7XG4gIGludGVyZmFjZSBVUkl0b0tpbmQ8QT4ge1xuICAgIHJlYWRvbmx5IFtVUkldOiBFcTxBPlxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNS4wXG4gKi9cbmV4cG9ydCBjb25zdCBlcVN0cmljdDogRXE8dW5rbm93bj4gPSB7XG4gIGVxdWFsczogKGEsIGIpID0+IGEgPT09IGJcbn1cblxuY29uc3QgZW1wdHk6IEVxPHVua25vd24+ID0ge1xuICBlcXVhbHM6ICgpID0+IHRydWVcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZW1pZ3JvdXAgPSA8QT4oKTogU2VtaWdyb3VwPEVxPEE+PiA9PiAoe1xuICBjb25jYXQ6ICh4LCB5KSA9PiBmcm9tRXF1YWxzKChhLCBiKSA9PiB4LmVxdWFscyhhLCBiKSAmJiB5LmVxdWFscyhhLCBiKSlcbn0pXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNi4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRNb25vaWQgPSA8QT4oKTogTW9ub2lkPEVxPEE+PiA9PiAoe1xuICBjb25jYXQ6IGdldFNlbWlncm91cDxBPigpLmNvbmNhdCxcbiAgZW1wdHlcbn0pXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBDb250cmF2YXJpYW50OiBDb250cmF2YXJpYW50MTxVUkk+ID0ge1xuICBVUkksXG4gIGNvbnRyYW1hcDogY29udHJhbWFwX1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXByZWNhdGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVXNlIFtgdHVwbGVgXSgjdHVwbGUpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUdXBsZUVxOiA8VCBleHRlbmRzIFJlYWRvbmx5QXJyYXk8RXE8YW55Pj4+KFxuICAuLi5lcXM6IFRcbikgPT4gRXE8eyBbSyBpbiBrZXlvZiBUXTogVFtLXSBleHRlbmRzIEVxPGluZmVyIEE+ID8gQSA6IG5ldmVyIH0+ID0gdHVwbGVcblxuLyoqXG4gKiBVc2UgW2BzdHJ1Y3RgXSgjc3RydWN0KSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0U3RydWN0RXE6IDxPIGV4dGVuZHMgUmVhZG9ubHlSZWNvcmQ8c3RyaW5nLCBhbnk+PihlcXM6IHsgW0sgaW4ga2V5b2YgT106IEVxPE9bS10+IH0pID0+IEVxPE8+ID0gc3RydWN0XG5cbi8qKlxuICogVXNlIFtgZXFTdHJpY3RgXSgjZXFzdHJpY3QpIGluc3RlYWRcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpY3RFcXVhbDogPEE+KGE6IEEsIGI6IEEpID0+IGJvb2xlYW4gPSBlcVN0cmljdC5lcXVhbHNcblxuLyoqXG4gKiBVc2Ugc21hbGwsIHNwZWNpZmljIGluc3RhbmNlcyBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGVxOiBDb250cmF2YXJpYW50MTxVUkk+ID0gQ29udHJhdmFyaWFudFxuXG4vKipcbiAqIFVzZSBbYEVxYF0oLi9ib29sZWFuLnRzLmh0bWwjZXEpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZXFCb29sZWFuOiBFcTxib29sZWFuPiA9IGVxU3RyaWN0XG5cbi8qKlxuICogVXNlIFtgRXFgXSguL3N0cmluZy50cy5odG1sI2VxKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGVxU3RyaW5nOiBFcTxzdHJpbmc+ID0gZXFTdHJpY3RcblxuLyoqXG4gKiBVc2UgW2BFcWBdKC4vbnVtYmVyLnRzLmh0bWwjZXEpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZXFOdW1iZXI6IEVxPG51bWJlcj4gPSBlcVN0cmljdFxuXG4vKipcbiAqIFVzZSBbYEVxYF0oLi9EYXRlLnRzLmh0bWwjZXEpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZXFEYXRlOiBFcTxEYXRlPiA9IHtcbiAgZXF1YWxzOiAoZmlyc3QsIHNlY29uZCkgPT4gZmlyc3QudmFsdWVPZigpID09PSBzZWNvbmQudmFsdWVPZigpXG59XG4iXX0=
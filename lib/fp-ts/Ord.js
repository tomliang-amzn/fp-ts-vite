"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tuple = exports.trivial = exports.reverse = exports.ordString = exports.ordNumber = exports.ordDate = exports.ordBoolean = exports.ord = exports.min = exports.max = exports.lt = exports.leq = exports.gt = exports.getTupleOrd = exports.getSemigroup = exports.getMonoid = exports.getDualOrd = exports.geq = exports.fromCompare = exports.equalsDefault = exports.equals = exports.contramap = exports.clamp = exports.between = exports.URI = exports.Contravariant = void 0;

var _Eq = require("./Eq");

var _function = require("./function");

/**
 * The `Ord` type class represents types which support comparisons with a _total order_.
 *
 * Instances should satisfy the laws of total orderings:
 *
 * 1. Reflexivity: `S.compare(a, a) <= 0`
 * 2. Antisymmetry: if `S.compare(a, b) <= 0` and `S.compare(b, a) <= 0` then `a <-> b`
 * 3. Transitivity: if `S.compare(a, b) <= 0` and `S.compare(b, c) <= 0` then `S.compare(a, c) <= 0`
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// defaults
// -------------------------------------------------------------------------------------

/**
 * @category defaults
 * @since 2.10.0
 */
var equalsDefault = function equalsDefault(compare) {
  return function (first, second) {
    return first === second || compare(first, second) === 0;
  };
}; // -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 2.0.0
 */


exports.equalsDefault = equalsDefault;

var fromCompare = function fromCompare(_compare) {
  return {
    equals: equalsDefault(_compare),
    compare: function compare(first, second) {
      return first === second ? 0 : _compare(first, second);
    }
  };
}; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Given a tuple of `Ord`s returns an `Ord` for the tuple.
 *
 * @example
 * import { tuple } from 'fp-ts/Ord'
 * import * as B from 'fp-ts/boolean'
 * import * as S from 'fp-ts/string'
 * import * as N from 'fp-ts/number'
 *
 * const O = tuple(S.Ord, N.Ord, B.Ord)
 * assert.strictEqual(O.compare(['a', 1, true], ['b', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 2, true]), -1)
 * assert.strictEqual(O.compare(['a', 1, true], ['a', 1, false]), 1)
 *
 * @category combinators
 * @since 2.10.0
 */


exports.fromCompare = fromCompare;

var tuple = function tuple() {
  for (var _len = arguments.length, ords = new Array(_len), _key = 0; _key < _len; _key++) {
    ords[_key] = arguments[_key];
  }

  return fromCompare(function (first, second) {
    var i = 0;

    for (; i < ords.length - 1; i++) {
      var r = ords[i].compare(first[i], second[i]);

      if (r !== 0) {
        return r;
      }
    }

    return ords[i].compare(first[i], second[i]);
  });
};
/**
 * @category combinators
 * @since 2.10.0
 */


exports.tuple = tuple;

var reverse = function reverse(O) {
  return fromCompare(function (first, second) {
    return O.compare(second, first);
  });
}; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

/* istanbul ignore next */


exports.reverse = reverse;

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
    return fromCompare(function (first, second) {
      return fa.compare(f(first), f(second));
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
var URI = 'Ord';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.0.0
 */
var getSemigroup = function getSemigroup() {
  return {
    concat: function concat(first, second) {
      return fromCompare(function (a, b) {
        var ox = first.compare(a, b);
        return ox !== 0 ? ox : second.compare(a, b);
      });
    }
  };
};
/**
 * Returns a `Monoid` such that:
 *
 * - its `concat(ord1, ord2)` operation will order first by `ord1`, and then by `ord2`
 * - its `empty` value is an `Ord` that always considers compared elements equal
 *
 * @example
 * import { sort } from 'fp-ts/Array'
 * import { contramap, reverse, getMonoid } from 'fp-ts/Ord'
 * import * as S from 'fp-ts/string'
 * import * as B from 'fp-ts/boolean'
 * import { pipe } from 'fp-ts/function'
 * import { concatAll } from 'fp-ts/Monoid'
 * import * as N from 'fp-ts/number'
 *
 * interface User {
 *   readonly id: number
 *   readonly name: string
 *   readonly age: number
 *   readonly rememberMe: boolean
 * }
 *
 * const byName = pipe(
 *   S.Ord,
 *   contramap((p: User) => p.name)
 * )
 *
 * const byAge = pipe(
 *   N.Ord,
 *   contramap((p: User) => p.age)
 * )
 *
 * const byRememberMe = pipe(
 *   B.Ord,
 *   contramap((p: User) => p.rememberMe)
 * )
 *
 * const M = getMonoid<User>()
 *
 * const users: Array<User> = [
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true }
 * ]
 *
 * // sort by name, then by age, then by `rememberMe`
 * const O1 = concatAll(M)([byName, byAge, byRememberMe])
 * assert.deepStrictEqual(sort(O1)(users), [
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false }
 * ])
 *
 * // now `rememberMe = true` first, then by name, then by age
 * const O2 = concatAll(M)([reverse(byRememberMe), byName, byAge])
 * assert.deepStrictEqual(sort(O2)(users), [
 *   { id: 4, name: 'Giulio', age: 44, rememberMe: true },
 *   { id: 2, name: 'Guido', age: 46, rememberMe: true },
 *   { id: 3, name: 'Giulio', age: 44, rememberMe: false },
 *   { id: 1, name: 'Guido', age: 47, rememberMe: false }
 * ])
 *
 * @category instances
 * @since 2.4.0
 */


exports.getSemigroup = getSemigroup;

var getMonoid = function getMonoid() {
  return {
    concat: getSemigroup().concat,
    empty: fromCompare(function () {
      return 0;
    })
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
// utils
// -------------------------------------------------------------------------------------

/**
 * @since 2.11.0
 */

exports.Contravariant = Contravariant;
var trivial = {
  equals: _function.constTrue,
  compare: /*#__PURE__*/(0, _function.constant)(0)
};
/**
 * @since 2.11.0
 */

exports.trivial = trivial;

var equals = function equals(O) {
  return function (second) {
    return function (first) {
      return first === second || O.compare(first, second) === 0;
    };
  };
}; // TODO: curry in v3

/**
 * Test whether one value is _strictly less than_ another
 *
 * @since 2.0.0
 */


exports.equals = equals;

var lt = function lt(O) {
  return function (first, second) {
    return O.compare(first, second) === -1;
  };
}; // TODO: curry in v3

/**
 * Test whether one value is _strictly greater than_ another
 *
 * @since 2.0.0
 */


exports.lt = lt;

var gt = function gt(O) {
  return function (first, second) {
    return O.compare(first, second) === 1;
  };
}; // TODO: curry in v3

/**
 * Test whether one value is _non-strictly less than_ another
 *
 * @since 2.0.0
 */


exports.gt = gt;

var leq = function leq(O) {
  return function (first, second) {
    return O.compare(first, second) !== 1;
  };
}; // TODO: curry in v3

/**
 * Test whether one value is _non-strictly greater than_ another
 *
 * @since 2.0.0
 */


exports.leq = leq;

var geq = function geq(O) {
  return function (first, second) {
    return O.compare(first, second) !== -1;
  };
}; // TODO: curry in v3

/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */


exports.geq = geq;

var min = function min(O) {
  return function (first, second) {
    return first === second || O.compare(first, second) < 1 ? first : second;
  };
}; // TODO: curry in v3

/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */


exports.min = min;

var max = function max(O) {
  return function (first, second) {
    return first === second || O.compare(first, second) > -1 ? first : second;
  };
};
/**
 * Clamp a value between a minimum and a maximum
 *
 * @since 2.0.0
 */


exports.max = max;

var clamp = function clamp(O) {
  var minO = min(O);
  var maxO = max(O);
  return function (low, hi) {
    return function (a) {
      return maxO(minO(a, hi), low);
    };
  };
};
/**
 * Test whether a value is between a minimum and a maximum (inclusive)
 *
 * @since 2.0.0
 */


exports.clamp = clamp;

var between = function between(O) {
  var ltO = lt(O);
  var gtO = gt(O);
  return function (low, hi) {
    return function (a) {
      return ltO(a, low) || gtO(a, hi) ? false : true;
    };
  };
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation

/**
 * Use [`tuple`](#tuple) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */


exports.between = between;
var getTupleOrd = tuple;
/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */

exports.getTupleOrd = getTupleOrd;
var getDualOrd = reverse;
/**
 * Use [`Contravariant`](#contravariant) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getDualOrd = getDualOrd;
var ord = Contravariant; // default compare for primitive types

exports.ord = ord;

function compare(first, second) {
  return first < second ? -1 : first > second ? 1 : 0;
}

var strictOrd = {
  equals: _Eq.eqStrict.equals,
  compare: compare
};
/**
 * Use [`Ord`](./boolean.ts.html#ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

var ordBoolean = strictOrd;
/**
 * Use [`Ord`](./string.ts.html#ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.ordBoolean = ordBoolean;
var ordString = strictOrd;
/**
 * Use [`Ord`](./number.ts.html#ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.ordString = ordString;
var ordNumber = strictOrd;
/**
 * Use [`Ord`](./Date.ts.html#ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.ordNumber = ordNumber;
var ordDate = /*#__PURE__*/(0, _function.pipe)(ordNumber, /*#__PURE__*/contramap(function (date) {
  return date.valueOf();
}));
exports.ordDate = ordDate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9PcmQudHMiXSwibmFtZXMiOlsiZXF1YWxzRGVmYXVsdCIsImNvbXBhcmUiLCJmaXJzdCIsInNlY29uZCIsImZyb21Db21wYXJlIiwiZXF1YWxzIiwidHVwbGUiLCJvcmRzIiwiaSIsImxlbmd0aCIsInIiLCJyZXZlcnNlIiwiTyIsImNvbnRyYW1hcF8iLCJmYSIsImYiLCJjb250cmFtYXAiLCJVUkkiLCJnZXRTZW1pZ3JvdXAiLCJjb25jYXQiLCJhIiwiYiIsIm94IiwiZ2V0TW9ub2lkIiwiZW1wdHkiLCJDb250cmF2YXJpYW50IiwidHJpdmlhbCIsImNvbnN0VHJ1ZSIsImx0IiwiZ3QiLCJsZXEiLCJnZXEiLCJtaW4iLCJtYXgiLCJjbGFtcCIsIm1pbk8iLCJtYXhPIiwibG93IiwiaGkiLCJiZXR3ZWVuIiwibHRPIiwiZ3RPIiwiZ2V0VHVwbGVPcmQiLCJnZXREdWFsT3JkIiwib3JkIiwic3RyaWN0T3JkIiwiZXFTdHJpY3QiLCJvcmRCb29sZWFuIiwib3JkU3RyaW5nIiwib3JkTnVtYmVyIiwib3JkRGF0ZSIsImRhdGUiLCJ2YWx1ZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBWUE7O0FBQ0E7O0FBYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW9CQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUlDLE9BQUo7QUFBQSxTQUFvRCxVQUFDQyxLQUFELEVBQVFDLE1BQVI7QUFBQSxXQUMvRUQsS0FBSyxLQUFLQyxNQUFWLElBQW9CRixPQUFPLENBQUNDLEtBQUQsRUFBUUMsTUFBUixDQUFQLEtBQTJCLENBRGdDO0FBQUEsR0FBcEQ7QUFBQSxDQUF0QixDLENBR1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUlILFFB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bEI7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNOEMsVUFBd0IsR0FBR0YsU0FBakM7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUcsU0FBc0IsR0FBR0gsU0FBL0I7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUksU0FBc0IsR0FBR0osU0FBL0I7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUssT0FBa0IsR0FDN0IsYUFDQSxvQkFDRUQsU0FERixFQUVFLGFBQ0FqQyxTQUFTLENBQUMsVUFBQ21DLElBQUQ7QUFBQSxTQUFVQSxJQUFJLENBQUNDLE9BQUwsRUFBVjtBQUFBLENBQUQsQ0FIWCxDQUZLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGUgYE9yZGAgdHlwZSBjbGFzcyByZXByZXNlbnRzIHR5cGVzIHdoaWNoIHN1cHBvcnQgY29tcGFyaXNvbnMgd2l0aCBhIF90b3RhbCBvcmRlcl8uXG4gKlxuICogSW5zdGFuY2VzIHNob3VsZCBzYXRpc2Z5IHRoZSBsYXdzIG9mIHRvdGFsIG9yZGVyaW5nczpcbiAqXG4gKiAxLiBSZWZsZXhpdml0eTogYFMuY29tcGFyZShhLCBhKSA8PSAwYFxuICogMi4gQW50aXN5bW1ldHJ5OiBpZiBgUy5jb21wYXJlKGEsIGIpIDw9IDBgIGFuZCBgUy5jb21wYXJlKGIsIGEpIDw9IDBgIHRoZW4gYGEgPC0+IGJgXG4gKiAzLiBUcmFuc2l0aXZpdHk6IGlmIGBTLmNvbXBhcmUoYSwgYikgPD0gMGAgYW5kIGBTLmNvbXBhcmUoYiwgYykgPD0gMGAgdGhlbiBgUy5jb21wYXJlKGEsIGMpIDw9IDBgXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IENvbnRyYXZhcmlhbnQxIH0gZnJvbSAnLi9Db250cmF2YXJpYW50J1xuaW1wb3J0IHsgRXEsIGVxU3RyaWN0IH0gZnJvbSAnLi9FcSdcbmltcG9ydCB7IGNvbnN0YW50LCBjb25zdFRydWUsIHBpcGUgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgTW9ub2lkIH0gZnJvbSAnLi9Nb25vaWQnXG5pbXBvcnQgeyBPcmRlcmluZyB9IGZyb20gJy4vT3JkZXJpbmcnXG5pbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgdHlwZSBjbGFzc2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPcmQ8QT4gZXh0ZW5kcyBFcTxBPiB7XG4gIHJlYWRvbmx5IGNvbXBhcmU6IChmaXJzdDogQSwgc2Vjb25kOiBBKSA9PiBPcmRlcmluZ1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZWZhdWx0c1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBkZWZhdWx0c1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZXF1YWxzRGVmYXVsdCA9IDxBPihjb21wYXJlOiBPcmQ8QT5bJ2NvbXBhcmUnXSk6IEVxPEE+WydlcXVhbHMnXSA9PiAoZmlyc3QsIHNlY29uZCkgPT5cbiAgZmlyc3QgPT09IHNlY29uZCB8fCBjb21wYXJlKGZpcnN0LCBzZWNvbmQpID09PSAwXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbnN0cnVjdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUNvbXBhcmUgPSA8QT4oY29tcGFyZTogT3JkPEE+Wydjb21wYXJlJ10pOiBPcmQ8QT4gPT4gKHtcbiAgZXF1YWxzOiBlcXVhbHNEZWZhdWx0KGNvbXBhcmUpLFxuICBjb21wYXJlOiAoZmlyc3QsIHNlY29uZCkgPT4gKGZpcnN0ID09PSBzZWNvbmQgPyAwIDogY29tcGFyZShmaXJzdCwgc2Vjb25kKSlcbn0pXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbWJpbmF0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogR2l2ZW4gYSB0dXBsZSBvZiBgT3JkYHMgcmV0dXJucyBhbiBgT3JkYCBmb3IgdGhlIHR1cGxlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyB0dXBsZSB9IGZyb20gJ2ZwLXRzL09yZCdcbiAqIGltcG9ydCAqIGFzIEIgZnJvbSAnZnAtdHMvYm9vbGVhbidcbiAqIGltcG9ydCAqIGFzIFMgZnJvbSAnZnAtdHMvc3RyaW5nJ1xuICogaW1wb3J0ICogYXMgTiBmcm9tICdmcC10cy9udW1iZXInXG4gKlxuICogY29uc3QgTyA9IHR1cGxlKFMuT3JkLCBOLk9yZCwgQi5PcmQpXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwoTy5jb21wYXJlKFsnYScsIDEsIHRydWVdLCBbJ2InLCAyLCB0cnVlXSksIC0xKVxuICogYXNzZXJ0LnN0cmljdEVxdWFsKE8uY29tcGFyZShbJ2EnLCAxLCB0cnVlXSwgWydhJywgMiwgdHJ1ZV0pLCAtMSlcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChPLmNvbXBhcmUoWydhJywgMSwgdHJ1ZV0sIFsnYScsIDEsIGZhbHNlXSksIDEpXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB0dXBsZSA9IDxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPj4oLi4ub3JkczogeyBbSyBpbiBrZXlvZiBBXTogT3JkPEFbS10+IH0pOiBPcmQ8UmVhZG9ubHk8QT4+ID0+XG4gIGZyb21Db21wYXJlKChmaXJzdCwgc2Vjb25kKSA9PiB7XG4gICAgbGV0IGkgPSAwXG4gICAgZm9yICg7IGkgPCBvcmRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgciA9IG9yZHNbaV0uY29tcGFyZShmaXJzdFtpXSwgc2Vjb25kW2ldKVxuICAgICAgaWYgKHIgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9yZHNbaV0uY29tcGFyZShmaXJzdFtpXSwgc2Vjb25kW2ldKVxuICB9KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgcmV2ZXJzZSA9IDxBPihPOiBPcmQ8QT4pOiBPcmQ8QT4gPT4gZnJvbUNvbXBhcmUoKGZpcnN0LCBzZWNvbmQpID0+IE8uY29tcGFyZShzZWNvbmQsIGZpcnN0KSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbm9uLXBpcGVhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgY29udHJhbWFwXzogPEEsIEI+KGZhOiBPcmQ8QT4sIGY6IChiOiBCKSA9PiBBKSA9PiBPcmQ8Qj4gPSAoZmEsIGYpID0+IHBpcGUoZmEsIGNvbnRyYW1hcChmKSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdHlwZSBjbGFzcyBtZW1iZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IENvbnRyYXZhcmlhbnRcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY29udHJhbWFwOiA8QSwgQj4oZjogKGI6IEIpID0+IEEpID0+IChmYTogT3JkPEE+KSA9PiBPcmQ8Qj4gPSAoZikgPT4gKGZhKSA9PlxuICBmcm9tQ29tcGFyZSgoZmlyc3QsIHNlY29uZCkgPT4gZmEuY29tcGFyZShmKGZpcnN0KSwgZihzZWNvbmQpKSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnT3JkJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBVUkkgPSB0eXBlb2YgVVJJXG5cbmRlY2xhcmUgbW9kdWxlICcuL0hLVCcge1xuICBpbnRlcmZhY2UgVVJJdG9LaW5kPEE+IHtcbiAgICByZWFkb25seSBbVVJJXTogT3JkPEE+XG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNlbWlncm91cCA9IDxBID0gbmV2ZXI+KCk6IFNlbWlncm91cDxPcmQ8QT4+ID0+ICh7XG4gIGNvbmNhdDogKGZpcnN0LCBzZWNvbmQpID0+XG4gICAgZnJvbUNvbXBhcmUoKGEsIGIpID0+IHtcbiAgICAgIGNvbnN0IG94ID0gZmlyc3QuY29tcGFyZShhLCBiKVxuICAgICAgcmV0dXJuIG94ICE9PSAwID8gb3ggOiBzZWNvbmQuY29tcGFyZShhLCBiKVxuICAgIH0pXG59KVxuXG4vKipcbiAqIFJldHVybnMgYSBgTW9ub2lkYCBzdWNoIHRoYXQ6XG4gKlxuICogLSBpdHMgYGNvbmNhdChvcmQxLCBvcmQyKWAgb3BlcmF0aW9uIHdpbGwgb3JkZXIgZmlyc3QgYnkgYG9yZDFgLCBhbmQgdGhlbiBieSBgb3JkMmBcbiAqIC0gaXRzIGBlbXB0eWAgdmFsdWUgaXMgYW4gYE9yZGAgdGhhdCBhbHdheXMgY29uc2lkZXJzIGNvbXBhcmVkIGVsZW1lbnRzIGVxdWFsXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHNvcnQgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqIGltcG9ydCB7IGNvbnRyYW1hcCwgcmV2ZXJzZSwgZ2V0TW9ub2lkIH0gZnJvbSAnZnAtdHMvT3JkJ1xuICogaW1wb3J0ICogYXMgUyBmcm9tICdmcC10cy9zdHJpbmcnXG4gKiBpbXBvcnQgKiBhcyBCIGZyb20gJ2ZwLXRzL2Jvb2xlYW4nXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKiBpbXBvcnQgeyBjb25jYXRBbGwgfSBmcm9tICdmcC10cy9Nb25vaWQnXG4gKiBpbXBvcnQgKiBhcyBOIGZyb20gJ2ZwLXRzL251bWJlcidcbiAqXG4gKiBpbnRlcmZhY2UgVXNlciB7XG4gKiAgIHJlYWRvbmx5IGlkOiBudW1iZXJcbiAqICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gKiAgIHJlYWRvbmx5IGFnZTogbnVtYmVyXG4gKiAgIHJlYWRvbmx5IHJlbWVtYmVyTWU6IGJvb2xlYW5cbiAqIH1cbiAqXG4gKiBjb25zdCBieU5hbWUgPSBwaXBlKFxuICogICBTLk9yZCxcbiAqICAgY29udHJhbWFwKChwOiBVc2VyKSA9PiBwLm5hbWUpXG4gKiApXG4gKlxuICogY29uc3QgYnlBZ2UgPSBwaXBlKFxuICogICBOLk9yZCxcbiAqICAgY29udHJhbWFwKChwOiBVc2VyKSA9PiBwLmFnZSlcbiAqIClcbiAqXG4gKiBjb25zdCBieVJlbWVtYmVyTWUgPSBwaXBlKFxuICogICBCLk9yZCxcbiAqICAgY29udHJhbWFwKChwOiBVc2VyKSA9PiBwLnJlbWVtYmVyTWUpXG4gKiApXG4gKlxuICogY29uc3QgTSA9IGdldE1vbm9pZDxVc2VyPigpXG4gKlxuICogY29uc3QgdXNlcnM6IEFycmF5PFVzZXI+ID0gW1xuICogICB7IGlkOiAxLCBuYW1lOiAnR3VpZG8nLCBhZ2U6IDQ3LCByZW1lbWJlck1lOiBmYWxzZSB9LFxuICogICB7IGlkOiAyLCBuYW1lOiAnR3VpZG8nLCBhZ2U6IDQ2LCByZW1lbWJlck1lOiB0cnVlIH0sXG4gKiAgIHsgaWQ6IDMsIG5hbWU6ICdHaXVsaW8nLCBhZ2U6IDQ0LCByZW1lbWJlck1lOiBmYWxzZSB9LFxuICogICB7IGlkOiA0LCBuYW1lOiAnR2l1bGlvJywgYWdlOiA0NCwgcmVtZW1iZXJNZTogdHJ1ZSB9XG4gKiBdXG4gKlxuICogLy8gc29ydCBieSBuYW1lLCB0aGVuIGJ5IGFnZSwgdGhlbiBieSBgcmVtZW1iZXJNZWBcbiAqIGNvbnN0IE8xID0gY29uY2F0QWxsKE0pKFtieU5hbWUsIGJ5QWdlLCBieVJlbWVtYmVyTWVdKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzb3J0KE8xKSh1c2VycyksIFtcbiAqICAgeyBpZDogMywgbmFtZTogJ0dpdWxpbycsIGFnZTogNDQsIHJlbWVtYmVyTWU6IGZhbHNlIH0sXG4gKiAgIHsgaWQ6IDQsIG5hbWU6ICdHaXVsaW8nLCBhZ2U6IDQ0LCByZW1lbWJlck1lOiB0cnVlIH0sXG4gKiAgIHsgaWQ6IDIsIG5hbWU6ICdHdWlkbycsIGFnZTogNDYsIHJlbWVtYmVyTWU6IHRydWUgfSxcbiAqICAgeyBpZDogMSwgbmFtZTogJ0d1aWRvJywgYWdlOiA0NywgcmVtZW1iZXJNZTogZmFsc2UgfVxuICogXSlcbiAqXG4gKiAvLyBub3cgYHJlbWVtYmVyTWUgPSB0cnVlYCBmaXJzdCwgdGhlbiBieSBuYW1lLCB0aGVuIGJ5IGFnZVxuICogY29uc3QgTzIgPSBjb25jYXRBbGwoTSkoW3JldmVyc2UoYnlSZW1lbWJlck1lKSwgYnlOYW1lLCBieUFnZV0pXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHNvcnQoTzIpKHVzZXJzKSwgW1xuICogICB7IGlkOiA0LCBuYW1lOiAnR2l1bGlvJywgYWdlOiA0NCwgcmVtZW1iZXJNZTogdHJ1ZSB9LFxuICogICB7IGlkOiAyLCBuYW1lOiAnR3VpZG8nLCBhZ2U6IDQ2LCByZW1lbWJlck1lOiB0cnVlIH0sXG4gKiAgIHsgaWQ6IDMsIG5hbWU6ICdHaXVsaW8nLCBhZ2U6IDQ0LCByZW1lbWJlck1lOiBmYWxzZSB9LFxuICogICB7IGlkOiAxLCBuYW1lOiAnR3VpZG8nLCBhZ2U6IDQ3LCByZW1lbWJlck1lOiBmYWxzZSB9XG4gKiBdKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0TW9ub2lkID0gPEEgPSBuZXZlcj4oKTogTW9ub2lkPE9yZDxBPj4gPT4gKHtcbiAgY29uY2F0OiBnZXRTZW1pZ3JvdXA8QT4oKS5jb25jYXQsXG4gIGVtcHR5OiBmcm9tQ29tcGFyZSgoKSA9PiAwKVxufSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IENvbnRyYXZhcmlhbnQ6IENvbnRyYXZhcmlhbnQxPFVSST4gPSB7XG4gIFVSSSxcbiAgY29udHJhbWFwOiBjb250cmFtYXBfXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJpdmlhbDogT3JkPHVua25vd24+ID0ge1xuICBlcXVhbHM6IGNvbnN0VHJ1ZSxcbiAgY29tcGFyZTpcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgY29uc3RhbnQoMClcbn1cblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBlcXVhbHMgPSA8QT4oTzogT3JkPEE+KSA9PiAoc2Vjb25kOiBBKSA9PiAoZmlyc3Q6IEEpOiBib29sZWFuID0+XG4gIGZpcnN0ID09PSBzZWNvbmQgfHwgTy5jb21wYXJlKGZpcnN0LCBzZWNvbmQpID09PSAwXG5cbi8vIFRPRE86IGN1cnJ5IGluIHYzXG4vKipcbiAqIFRlc3Qgd2hldGhlciBvbmUgdmFsdWUgaXMgX3N0cmljdGx5IGxlc3MgdGhhbl8gYW5vdGhlclxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbHQgPSA8QT4oTzogT3JkPEE+KSA9PiAoZmlyc3Q6IEEsIHNlY29uZDogQSk6IGJvb2xlYW4gPT4gTy5jb21wYXJlKGZpcnN0LCBzZWNvbmQpID09PSAtMVxuXG4vLyBUT0RPOiBjdXJyeSBpbiB2M1xuLyoqXG4gKiBUZXN0IHdoZXRoZXIgb25lIHZhbHVlIGlzIF9zdHJpY3RseSBncmVhdGVyIHRoYW5fIGFub3RoZXJcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGd0ID0gPEE+KE86IE9yZDxBPikgPT4gKGZpcnN0OiBBLCBzZWNvbmQ6IEEpOiBib29sZWFuID0+IE8uY29tcGFyZShmaXJzdCwgc2Vjb25kKSA9PT0gMVxuXG4vLyBUT0RPOiBjdXJyeSBpbiB2M1xuLyoqXG4gKiBUZXN0IHdoZXRoZXIgb25lIHZhbHVlIGlzIF9ub24tc3RyaWN0bHkgbGVzcyB0aGFuXyBhbm90aGVyXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsZXEgPSA8QT4oTzogT3JkPEE+KSA9PiAoZmlyc3Q6IEEsIHNlY29uZDogQSk6IGJvb2xlYW4gPT4gTy5jb21wYXJlKGZpcnN0LCBzZWNvbmQpICE9PSAxXG5cbi8vIFRPRE86IGN1cnJ5IGluIHYzXG4vKipcbiAqIFRlc3Qgd2hldGhlciBvbmUgdmFsdWUgaXMgX25vbi1zdHJpY3RseSBncmVhdGVyIHRoYW5fIGFub3RoZXJcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdlcSA9IDxBPihPOiBPcmQ8QT4pID0+IChmaXJzdDogQSwgc2Vjb25kOiBBKTogYm9vbGVhbiA9PiBPLmNvbXBhcmUoZmlyc3QsIHNlY29uZCkgIT09IC0xXG5cbi8vIFRPRE86IGN1cnJ5IGluIHYzXG4vKipcbiAqIFRha2UgdGhlIG1pbmltdW0gb2YgdHdvIHZhbHVlcy4gSWYgdGhleSBhcmUgY29uc2lkZXJlZCBlcXVhbCwgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGNob3NlblxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWluID0gPEE+KE86IE9yZDxBPikgPT4gKGZpcnN0OiBBLCBzZWNvbmQ6IEEpOiBBID0+XG4gIGZpcnN0ID09PSBzZWNvbmQgfHwgTy5jb21wYXJlKGZpcnN0LCBzZWNvbmQpIDwgMSA/IGZpcnN0IDogc2Vjb25kXG5cbi8vIFRPRE86IGN1cnJ5IGluIHYzXG4vKipcbiAqIFRha2UgdGhlIG1heGltdW0gb2YgdHdvIHZhbHVlcy4gSWYgdGhleSBhcmUgY29uc2lkZXJlZCBlcXVhbCwgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIGNob3NlblxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWF4ID0gPEE+KE86IE9yZDxBPikgPT4gKGZpcnN0OiBBLCBzZWNvbmQ6IEEpOiBBID0+XG4gIGZpcnN0ID09PSBzZWNvbmQgfHwgTy5jb21wYXJlKGZpcnN0LCBzZWNvbmQpID4gLTEgPyBmaXJzdCA6IHNlY29uZFxuXG4vKipcbiAqIENsYW1wIGEgdmFsdWUgYmV0d2VlbiBhIG1pbmltdW0gYW5kIGEgbWF4aW11bVxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY2xhbXAgPSA8QT4oTzogT3JkPEE+KTogKChsb3c6IEEsIGhpOiBBKSA9PiAoYTogQSkgPT4gQSkgPT4ge1xuICBjb25zdCBtaW5PID0gbWluKE8pXG4gIGNvbnN0IG1heE8gPSBtYXgoTylcbiAgcmV0dXJuIChsb3csIGhpKSA9PiAoYSkgPT4gbWF4TyhtaW5PKGEsIGhpKSwgbG93KVxufVxuXG4vKipcbiAqIFRlc3Qgd2hldGhlciBhIHZhbHVlIGlzIGJldHdlZW4gYSBtaW5pbXVtIGFuZCBhIG1heGltdW0gKGluY2x1c2l2ZSlcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJldHdlZW4gPSA8QT4oTzogT3JkPEE+KTogKChsb3c6IEEsIGhpOiBBKSA9PiAoYTogQSkgPT4gYm9vbGVhbikgPT4ge1xuICBjb25zdCBsdE8gPSBsdChPKVxuICBjb25zdCBndE8gPSBndChPKVxuICByZXR1cm4gKGxvdywgaGkpID0+IChhKSA9PiAobHRPKGEsIGxvdykgfHwgZ3RPKGEsIGhpKSA/IGZhbHNlIDogdHJ1ZSlcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb25cblxuLyoqXG4gKiBVc2UgW2B0dXBsZWBdKCN0dXBsZSkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFR1cGxlT3JkOiA8VCBleHRlbmRzIFJlYWRvbmx5QXJyYXk8T3JkPGFueT4+PihcbiAgLi4ub3JkczogVFxuKSA9PiBPcmQ8eyBbSyBpbiBrZXlvZiBUXTogVFtLXSBleHRlbmRzIE9yZDxpbmZlciBBPiA/IEEgOiBuZXZlciB9PiA9IHR1cGxlXG5cbi8qKlxuICogVXNlIFtgcmV2ZXJzZWBdKCNyZXZlcnNlKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0RHVhbE9yZCA9IHJldmVyc2VcblxuLyoqXG4gKiBVc2UgW2BDb250cmF2YXJpYW50YF0oI2NvbnRyYXZhcmlhbnQpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgb3JkOiBDb250cmF2YXJpYW50MTxVUkk+ID0gQ29udHJhdmFyaWFudFxuXG4vLyBkZWZhdWx0IGNvbXBhcmUgZm9yIHByaW1pdGl2ZSB0eXBlc1xuZnVuY3Rpb24gY29tcGFyZShmaXJzdDogYW55LCBzZWNvbmQ6IGFueSk6IE9yZGVyaW5nIHtcbiAgcmV0dXJuIGZpcnN0IDwgc2Vjb25kID8gLTEgOiBmaXJzdCA+IHNlY29uZCA/IDEgOiAwXG59XG5cbmNvbnN0IHN0cmljdE9yZCA9IHtcbiAgZXF1YWxzOiBlcVN0cmljdC5lcXVhbHMsXG4gIGNvbXBhcmVcbn1cblxuLyoqXG4gKiBVc2UgW2BPcmRgXSguL2Jvb2xlYW4udHMuaHRtbCNvcmQpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgb3JkQm9vbGVhbjogT3JkPGJvb2xlYW4+ID0gc3RyaWN0T3JkXG5cbi8qKlxuICogVXNlIFtgT3JkYF0oLi9zdHJpbmcudHMuaHRtbCNvcmQpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgb3JkU3RyaW5nOiBPcmQ8c3RyaW5nPiA9IHN0cmljdE9yZFxuXG4vKipcbiAqIFVzZSBbYE9yZGBdKC4vbnVtYmVyLnRzLmh0bWwjb3JkKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IG9yZE51bWJlcjogT3JkPG51bWJlcj4gPSBzdHJpY3RPcmRcblxuLyoqXG4gKiBVc2UgW2BPcmRgXSguL0RhdGUudHMuaHRtbCNvcmQpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgb3JkRGF0ZTogT3JkPERhdGU+ID1cbiAgLyojX19QVVJFX18qL1xuICBwaXBlKFxuICAgIG9yZE51bWJlcixcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgY29udHJhbWFwKChkYXRlKSA9PiBkYXRlLnZhbHVlT2YoKSlcbiAgKVxuIl19
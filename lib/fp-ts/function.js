"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SK = void 0;
exports.absurd = absurd;
exports.constVoid = exports.constUndefined = exports.constTrue = exports.constNull = exports.constFalse = exports.apply = void 0;
exports.constant = constant;
exports.decrement = decrement;
exports.flip = flip;
exports.flow = flow;
exports.hole = exports.getSemiring = exports.getSemigroup = exports.getRing = exports.getMonoid = exports.getEndomorphismMonoid = exports.getBooleanAlgebra = void 0;
exports.identity = identity;
exports.increment = increment;
exports.not = not;
exports.pipe = pipe;
exports.tuple = tuple;
exports.tupled = tupled;
exports.unsafeCoerce = void 0;
exports.untupled = untupled;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.10.0
 */
var getBooleanAlgebra = function getBooleanAlgebra(B) {
  return function () {
    return {
      meet: function meet(x, y) {
        return function (a) {
          return B.meet(x(a), y(a));
        };
      },
      join: function join(x, y) {
        return function (a) {
          return B.join(x(a), y(a));
        };
      },
      zero: function zero() {
        return B.zero;
      },
      one: function one() {
        return B.one;
      },
      implies: function implies(x, y) {
        return function (a) {
          return B.implies(x(a), y(a));
        };
      },
      not: function not(x) {
        return function (a) {
          return B.not(x(a));
        };
      }
    };
  };
};
/**
 * Unary functions form a semigroup as long as you can provide a semigroup for the codomain.
 *
 * @example
 * import { Predicate, getSemigroup } from 'fp-ts/function'
 * import * as B from 'fp-ts/boolean'
 *
 * const f: Predicate<number> = (n) => n <= 2
 * const g: Predicate<number> = (n) => n >= 0
 *
 * const S1 = getSemigroup(B.SemigroupAll)<number>()
 *
 * assert.deepStrictEqual(S1.concat(f, g)(1), true)
 * assert.deepStrictEqual(S1.concat(f, g)(3), false)
 *
 * const S2 = getSemigroup(B.SemigroupAny)<number>()
 *
 * assert.deepStrictEqual(S2.concat(f, g)(1), true)
 * assert.deepStrictEqual(S2.concat(f, g)(3), true)
 *
 * @category instances
 * @since 2.10.0
 */


exports.getBooleanAlgebra = getBooleanAlgebra;

var getSemigroup = function getSemigroup(S) {
  return function () {
    return {
      concat: function concat(f, g) {
        return function (a) {
          return S.concat(f(a), g(a));
        };
      }
    };
  };
};
/**
 * Unary functions form a monoid as long as you can provide a monoid for the codomain.
 *
 * @example
 * import { Predicate } from 'fp-ts/Predicate'
 * import { getMonoid } from 'fp-ts/function'
 * import * as B from 'fp-ts/boolean'
 *
 * const f: Predicate<number> = (n) => n <= 2
 * const g: Predicate<number> = (n) => n >= 0
 *
 * const M1 = getMonoid(B.MonoidAll)<number>()
 *
 * assert.deepStrictEqual(M1.concat(f, g)(1), true)
 * assert.deepStrictEqual(M1.concat(f, g)(3), false)
 *
 * const M2 = getMonoid(B.MonoidAny)<number>()
 *
 * assert.deepStrictEqual(M2.concat(f, g)(1), true)
 * assert.deepStrictEqual(M2.concat(f, g)(3), true)
 *
 * @category instances
 * @since 2.10.0
 */


exports.getSemigroup = getSemigroup;

var getMonoid = function getMonoid(M) {
  var getSemigroupM = getSemigroup(M);
  return function () {
    return {
      concat: getSemigroupM().concat,
      empty: function empty() {
        return M.empty;
      }
    };
  };
};
/**
 * @category instances
 * @since 2.10.0
 */


exports.getMonoid = getMonoid;

var getSemiring = function getSemiring(S) {
  return {
    add: function add(f, g) {
      return function (x) {
        return S.add(f(x), g(x));
      };
    },
    zero: function zero() {
      return S.zero;
    },
    mul: function mul(f, g) {
      return function (x) {
        return S.mul(f(x), g(x));
      };
    },
    one: function one() {
      return S.one;
    }
  };
};
/**
 * @category instances
 * @since 2.10.0
 */


exports.getSemiring = getSemiring;

var getRing = function getRing(R) {
  var S = getSemiring(R);
  return {
    add: S.add,
    mul: S.mul,
    one: S.one,
    zero: S.zero,
    sub: function sub(f, g) {
      return function (x) {
        return R.sub(f(x), g(x));
      };
    }
  };
}; // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @since 2.11.0
 */


exports.getRing = getRing;

var apply = function apply(a) {
  return function (f) {
    return f(a);
  };
};
/**
 * A *thunk*
 *
 * @since 2.0.0
 */


exports.apply = apply;

/**
 * @since 2.0.0
 */
function identity(a) {
  return a;
}
/**
 * @since 2.0.0
 */


var unsafeCoerce = identity;
/**
 * @since 2.0.0
 */

exports.unsafeCoerce = unsafeCoerce;

function constant(a) {
  return function () {
    return a;
  };
}
/**
 * A thunk that returns always `true`.
 *
 * @since 2.0.0
 */


var constTrue = /*#__PURE__*/constant(true);
/**
 * A thunk that returns always `false`.
 *
 * @since 2.0.0
 */

exports.constTrue = constTrue;
var constFalse = /*#__PURE__*/constant(false);
/**
 * A thunk that returns always `null`.
 *
 * @since 2.0.0
 */

exports.constFalse = constFalse;
var constNull = /*#__PURE__*/constant(null);
/**
 * A thunk that returns always `undefined`.
 *
 * @since 2.0.0
 */

exports.constNull = constNull;
var constUndefined = /*#__PURE__*/constant(undefined);
/**
 * A thunk that returns always `void`.
 *
 * @since 2.0.0
 */

exports.constUndefined = constUndefined;
var constVoid = constUndefined;
/**
 * Flips the order of the arguments of a function of two arguments.
 *
 * @since 2.0.0
 */

exports.constVoid = constVoid;

function flip(f) {
  return function (b, a) {
    return f(a, b);
  };
}
/**
 * Performs left-to-right function composition. The first argument may have any arity, the remaining arguments must be unary.
 *
 * See also [`pipe`](#pipe).
 *
 * @example
 * import { flow } from 'fp-ts/function'
 *
 * const len = (s: string): number => s.length
 * const double = (n: number): number => n * 2
 *
 * const f = flow(len, double)
 *
 * assert.strictEqual(f('aaa'), 6)
 *
 * @since 2.0.0
 */


function flow(ab, bc, cd, de, ef, fg, gh, hi, ij) {
  switch (arguments.length) {
    case 1:
      return ab;

    case 2:
      return function () {
        return bc(ab.apply(this, arguments));
      };

    case 3:
      return function () {
        return cd(bc(ab.apply(this, arguments)));
      };

    case 4:
      return function () {
        return de(cd(bc(ab.apply(this, arguments))));
      };

    case 5:
      return function () {
        return ef(de(cd(bc(ab.apply(this, arguments)))));
      };

    case 6:
      return function () {
        return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
      };

    case 7:
      return function () {
        return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
      };

    case 8:
      return function () {
        return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
      };

    case 9:
      return function () {
        return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
      };
  }

  return;
}
/**
 * @since 2.0.0
 */


function tuple() {
  for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
    t[_key] = arguments[_key];
  }

  return t;
}
/**
 * @since 2.0.0
 */


function increment(n) {
  return n + 1;
}
/**
 * @since 2.0.0
 */


function decrement(n) {
  return n - 1;
}
/**
 * @since 2.0.0
 */


function absurd(_) {
  throw new Error('Called `absurd` function which should be uncallable');
}
/**
 * Creates a tupled version of this function: instead of `n` arguments, it accepts a single tuple argument.
 *
 * @example
 * import { tupled } from 'fp-ts/function'
 *
 * const add = tupled((x: number, y: number): number => x + y)
 *
 * assert.strictEqual(add([1, 2]), 3)
 *
 * @since 2.4.0
 */


function tupled(f) {
  return function (a) {
    return f.apply(void 0, _toConsumableArray(a));
  };
}
/**
 * Inverse function of `tupled`
 *
 * @since 2.4.0
 */


function untupled(f) {
  return function () {
    for (var _len2 = arguments.length, a = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      a[_key2] = arguments[_key2];
    }

    return f(a);
  };
}
/**
 * Pipes the value of an expression into a pipeline of functions.
 *
 * See also [`flow`](#flow).
 *
 * @example
 * import { pipe } from 'fp-ts/function'
 *
 * const len = (s: string): number => s.length
 * const double = (n: number): number => n * 2
 *
 * // without pipe
 * assert.strictEqual(double(len('aaa')), 6)
 *
 * // with pipe
 * assert.strictEqual(pipe('aaa', len, double), 6)
 *
 * @since 2.6.3
 */


function pipe(a, ab, bc, cd, de, ef, fg, gh, hi) {
  switch (arguments.length) {
    case 1:
      return a;

    case 2:
      return ab(a);

    case 3:
      return bc(ab(a));

    case 4:
      return cd(bc(ab(a)));

    case 5:
      return de(cd(bc(ab(a))));

    case 6:
      return ef(de(cd(bc(ab(a)))));

    case 7:
      return fg(ef(de(cd(bc(ab(a))))));

    case 8:
      return gh(fg(ef(de(cd(bc(ab(a)))))));

    case 9:
      return hi(gh(fg(ef(de(cd(bc(ab(a))))))));

    default:
      var ret = arguments[0];

      for (var _i = 1; _i < arguments.length; _i++) {
        ret = arguments[_i](ret);
      }

      return ret;
  }
}
/**
 * Type hole simulation
 *
 * @since 2.7.0
 */


var hole = absurd;
/**
 * @since 2.11.0
 */

exports.hole = hole;

var SK = function SK(_, b) {
  return b;
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation

/**
 * Use `Refinement` module instead.
 *
 * @since 2.0.0
 * @deprecated
 */


exports.SK = SK;

/**
 * Use `Predicate` module instead.
 *
 * @since 2.0.0
 * @deprecated
 */
function not(predicate) {
  return function (a) {
    return !predicate(a);
  };
}
/**
 * Use `Endomorphism` module instead.
 *
 * @since 2.0.0
 * @deprecated
 */


/**
 * Use `Endomorphism` module instead.
 *
 * @category instances
 * @since 2.10.0
 * @deprecated
 */
var getEndomorphismMonoid = function getEndomorphismMonoid() {
  return {
    concat: function concat(first, second) {
      return flow(first, second);
    },
    empty: identity
  };
};

exports.getEndomorphismMonoid = getEndomorphismMonoid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9mdW5jdGlvbi50cyJdLCJuYW1lcyI6WyJnZXRCb29sZWFuQWxnZWJyYSIsIkIiLCJtZWV0IiwieCIsInkiLCJhIiwiam9pbiIsInplcm8iLCJvbmUiLCJpbXBsaWVzIiwibm90IiwiZ2V0U2VtaWdyb3VwIiwiUyIsImNvbmNhdCIsImYiLCJnIiwiZ2V0TW9ub2lkIiwiTSIsImdldFNlbWlncm91cE0iLCJlbXB0eSIsImdldFNlbWlyaW5nIiwiYWRkIiwibXVsIiwiZ2V0UmluZyIsIlIiLCJzdWIiLCJhcHBseSIsImlkZW50aXR5IiwidW5zYWZlQ29lcmNlIiwiY29uc3RhbnQiLCJjb25zdFRydWUiLCJjb25zdEZhbHNlIiwiY29uc3ROdWxsIiwiY29uc3RVbmRlZmluZWQiLCJ1bmRlZmluZWQiLCJjb25zdFZvaWQiLCJmbGlwIiwiYiIsImZsb3ciLCJhYiIsImJjIiwiY2QiLCJkZSIsImVmIiwiZmciLCJnaCIsImhpIiwiaWoiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ0dXBsZSIsInQiLCJpbmNyZW1lbnQiLCJuIiwiZGVjcmVtZW50IiwiYWJzdXJkIiwiXyIsIkVycm9yIiwidHVwbGVkIiwidW50dXBsZWQiLCJwaXBlIiwicmV0IiwiaSIsImhvbGUiLCJTSyIsInByZWRpY2F0ZSIsImdldEVuZG9tb3JwaGlzbU1vbm9pZCIsImZpcnN0Iiwic2Vjb25kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFJQyxDQUFKO0FBQUEsU0FBNkI7QUFBQSxXQUErQztBQUMzR0MsTUFBQUEsSUFBSSxFQUFFLGNBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGVBQVUsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPSixDQUFDLENBQUNDLElBQUYsQ0FB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TyxJQUFNUyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxDQUFPUixDQUFQLEVBQWFuQixDQUFiO0FBQUEsU0FBeUJBLENBQXpCO0FBQUEsQ0FBWCxDLENBRVA7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVMzQixHQUFULENBQWdCdUQsU0FBaEIsRUFBdUQ7QUFDNUQsU0FBTyxVQUFDNUQsQ0FBRDtBQUFBLFdBQU8sQ0FBQzRELFNBQVMsQ0FBQzVELENBQUQsQ0FBakI7QUFBQSxHQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTTZELHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0I7QUFBQSxTQUEyQztBQUM5RXJELElBQUFBLE1BQU0sRUFBRSxnQkFBQ3NELEtBQUQsRUFBUUMsTUFBUjtBQUFBLGFBQW1COUIsSUFBSSxDQUFDNkIsS0FBRCxFQUFRQyxNQUFSLENBQXZCO0FBQUEsS0FEc0U7QUFFOUVqRCxJQUFBQSxLQUFLLEVBQUVRO0FBRnVFLEdBQTNDO0FBQUEsQ0FBOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5pbXBvcnQgeyBCb29sZWFuQWxnZWJyYSB9IGZyb20gJy4vQm9vbGVhbkFsZ2VicmEnXG5pbXBvcnQgeyBNb25vaWQgfSBmcm9tICcuL01vbm9pZCdcbmltcG9ydCB7IFJpbmcgfSBmcm9tICcuL1JpbmcnXG5pbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcbmltcG9ydCB7IFNlbWlyaW5nIH0gZnJvbSAnLi9TZW1pcmluZydcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0Qm9vbGVhbkFsZ2VicmEgPSA8Qj4oQjogQm9vbGVhbkFsZ2VicmE8Qj4pID0+IDxBID0gbmV2ZXI+KCk6IEJvb2xlYW5BbGdlYnJhPChhOiBBKSA9PiBCPiA9PiAoe1xuICBtZWV0OiAoeCwgeSkgPT4gKGEpID0+IEIubWVldCh4KGEpLCB5KGEpKSxcbiAgam9pbjogKHgsIHkpID0+IChhKSA9PiBCLmpvaW4oeChhKSwgeShhKSksXG4gIHplcm86ICgpID0+IEIuemVybyxcbiAgb25lOiAoKSA9PiBCLm9uZSxcbiAgaW1wbGllczogKHgsIHkpID0+IChhKSA9PiBCLmltcGxpZXMoeChhKSwgeShhKSksXG4gIG5vdDogKHgpID0+IChhKSA9PiBCLm5vdCh4KGEpKVxufSlcblxuLyoqXG4gKiBVbmFyeSBmdW5jdGlvbnMgZm9ybSBhIHNlbWlncm91cCBhcyBsb25nIGFzIHlvdSBjYW4gcHJvdmlkZSBhIHNlbWlncm91cCBmb3IgdGhlIGNvZG9tYWluLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBQcmVkaWNhdGUsIGdldFNlbWlncm91cCB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICogaW1wb3J0ICogYXMgQiBmcm9tICdmcC10cy9ib29sZWFuJ1xuICpcbiAqIGNvbnN0IGY6IFByZWRpY2F0ZTxudW1iZXI+ID0gKG4pID0+IG4gPD0gMlxuICogY29uc3QgZzogUHJlZGljYXRlPG51bWJlcj4gPSAobikgPT4gbiA+PSAwXG4gKlxuICogY29uc3QgUzEgPSBnZXRTZW1pZ3JvdXAoQi5TZW1pZ3JvdXBBbGwpPG51bWJlcj4oKVxuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoUzEuY29uY2F0KGYsIGcpKDEpLCB0cnVlKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChTMS5jb25jYXQoZiwgZykoMyksIGZhbHNlKVxuICpcbiAqIGNvbnN0IFMyID0gZ2V0U2VtaWdyb3VwKEIuU2VtaWdyb3VwQW55KTxudW1iZXI+KClcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFMyLmNvbmNhdChmLCBnKSgxKSwgdHJ1ZSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoUzIuY29uY2F0KGYsIGcpKDMpLCB0cnVlKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNlbWlncm91cCA9IDxTPihTOiBTZW1pZ3JvdXA8Uz4pID0+IDxBID0gbmV2ZXI+KCk6IFNlbWlncm91cDwoYTogQSkgPT4gUz4gPT4gKHtcbiAgY29uY2F0OiAoZiwgZykgPT4gKGEpID0+IFMuY29uY2F0KGYoYSksIGcoYSkpXG59KVxuXG4vKipcbiAqIFVuYXJ5IGZ1bmN0aW9ucyBmb3JtIGEgbW9ub2lkIGFzIGxvbmcgYXMgeW91IGNhbiBwcm92aWRlIGEgbW9ub2lkIGZvciB0aGUgY29kb21haW4uXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IFByZWRpY2F0ZSB9IGZyb20gJ2ZwLXRzL1ByZWRpY2F0ZSdcbiAqIGltcG9ydCB7IGdldE1vbm9pZCB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICogaW1wb3J0ICogYXMgQiBmcm9tICdmcC10cy9ib29sZWFuJ1xuICpcbiAqIGNvbnN0IGY6IFByZWRpY2F0ZTxudW1iZXI+ID0gKG4pID0+IG4gPD0gMlxuICogY29uc3QgZzogUHJlZGljYXRlPG51bWJlcj4gPSAobikgPT4gbiA+PSAwXG4gKlxuICogY29uc3QgTTEgPSBnZXRNb25vaWQoQi5Nb25vaWRBbGwpPG51bWJlcj4oKVxuICpcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoTTEuY29uY2F0KGYsIGcpKDEpLCB0cnVlKVxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChNMS5jb25jYXQoZiwgZykoMyksIGZhbHNlKVxuICpcbiAqIGNvbnN0IE0yID0gZ2V0TW9ub2lkKEIuTW9ub2lkQW55KTxudW1iZXI+KClcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKE0yLmNvbmNhdChmLCBnKSgxKSwgdHJ1ZSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoTTIuY29uY2F0KGYsIGcpKDMpLCB0cnVlKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE1vbm9pZCA9IDxNPihNOiBNb25vaWQ8TT4pOiAoPEEgPSBuZXZlcj4oKSA9PiBNb25vaWQ8KGE6IEEpID0+IE0+KSA9PiB7XG4gIGNvbnN0IGdldFNlbWlncm91cE0gPSBnZXRTZW1pZ3JvdXAoTSlcbiAgcmV0dXJuIDxBPigpID0+ICh7XG4gICAgY29uY2F0OiBnZXRTZW1pZ3JvdXBNPEE+KCkuY29uY2F0LFxuICAgIGVtcHR5OiAoKSA9PiBNLmVtcHR5XG4gIH0pXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0U2VtaXJpbmcgPSA8QSwgQj4oUzogU2VtaXJpbmc8Qj4pOiBTZW1pcmluZzwoYTogQSkgPT4gQj4gPT4gKHtcbiAgYWRkOiAoZiwgZykgPT4gKHgpID0+IFMuYWRkKGYoeCksIGcoeCkpLFxuICB6ZXJvOiAoKSA9PiBTLnplcm8sXG4gIG11bDogKGYsIGcpID0+ICh4KSA9PiBTLm11bChmKHgpLCBnKHgpKSxcbiAgb25lOiAoKSA9PiBTLm9uZVxufSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRSaW5nID0gPEEsIEI+KFI6IFJpbmc8Qj4pOiBSaW5nPChhOiBBKSA9PiBCPiA9PiB7XG4gIGNvbnN0IFMgPSBnZXRTZW1pcmluZzxBLCBCPihSKVxuICByZXR1cm4ge1xuICAgIGFkZDogUy5hZGQsXG4gICAgbXVsOiBTLm11bCxcbiAgICBvbmU6IFMub25lLFxuICAgIHplcm86IFMuemVybyxcbiAgICBzdWI6IChmLCBnKSA9PiAoeCkgPT4gUi5zdWIoZih4KSwgZyh4KSlcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGx5ID0gPEE+KGE6IEEpID0+IDxCPihmOiAoYTogQSkgPT4gQik6IEIgPT4gZihhKVxuXG4vKipcbiAqIEEgKnRodW5rKlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIExhenk8QT4ge1xuICAoKTogQVxufVxuXG4vKipcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBGdW5jdGlvbk4gfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBleHBvcnQgY29uc3Qgc3VtOiBGdW5jdGlvbk48W251bWJlciwgbnVtYmVyXSwgbnVtYmVyPiA9IChhLCBiKSA9PiBhICsgYlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmN0aW9uTjxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQj4ge1xuICAoLi4uYXJnczogQSk6IEJcbn1cblxuLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5PEE+KGE6IEEpOiBBIHtcbiAgcmV0dXJuIGFcbn1cblxuLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHVuc2FmZUNvZXJjZTogPEEsIEI+KGE6IEEpID0+IEIgPSBpZGVudGl0eSBhcyBhbnlcblxuLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0YW50PEE+KGE6IEEpOiBMYXp5PEE+IHtcbiAgcmV0dXJuICgpID0+IGFcbn1cblxuLyoqXG4gKiBBIHRodW5rIHRoYXQgcmV0dXJucyBhbHdheXMgYHRydWVgLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY29uc3RUcnVlOiBMYXp5PGJvb2xlYW4+ID1cbiAgLyojX19QVVJFX18qL1xuICBjb25zdGFudCh0cnVlKVxuXG4vKipcbiAqIEEgdGh1bmsgdGhhdCByZXR1cm5zIGFsd2F5cyBgZmFsc2VgLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY29uc3RGYWxzZTogTGF6eTxib29sZWFuPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY29uc3RhbnQoZmFsc2UpXG5cbi8qKlxuICogQSB0aHVuayB0aGF0IHJldHVybnMgYWx3YXlzIGBudWxsYC5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnN0TnVsbDogTGF6eTxudWxsPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY29uc3RhbnQobnVsbClcblxuLyoqXG4gKiBBIHRodW5rIHRoYXQgcmV0dXJucyBhbHdheXMgYHVuZGVmaW5lZGAuXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjb25zdFVuZGVmaW5lZDogTGF6eTx1bmRlZmluZWQ+ID1cbiAgLyojX19QVVJFX18qL1xuICBjb25zdGFudCh1bmRlZmluZWQpXG5cbi8qKlxuICogQSB0aHVuayB0aGF0IHJldHVybnMgYWx3YXlzIGB2b2lkYC5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnN0Vm9pZDogTGF6eTx2b2lkPiA9IGNvbnN0VW5kZWZpbmVkXG5cbi8qKlxuICogRmxpcHMgdGhlIG9yZGVyIG9mIHRoZSBhcmd1bWVudHMgb2YgYSBmdW5jdGlvbiBvZiB0d28gYXJndW1lbnRzLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxpcDxBLCBCLCBDPihmOiAoYTogQSwgYjogQikgPT4gQyk6IChiOiBCLCBhOiBBKSA9PiBDIHtcbiAgcmV0dXJuIChiLCBhKSA9PiBmKGEsIGIpXG59XG5cbi8qKlxuICogUGVyZm9ybXMgbGVmdC10by1yaWdodCBmdW5jdGlvbiBjb21wb3NpdGlvbi4gVGhlIGZpcnN0IGFyZ3VtZW50IG1heSBoYXZlIGFueSBhcml0eSwgdGhlIHJlbWFpbmluZyBhcmd1bWVudHMgbXVzdCBiZSB1bmFyeS5cbiAqXG4gKiBTZWUgYWxzbyBbYHBpcGVgXSgjcGlwZSkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IGZsb3cgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBjb25zdCBsZW4gPSAoczogc3RyaW5nKTogbnVtYmVyID0+IHMubGVuZ3RoXG4gKiBjb25zdCBkb3VibGUgPSAobjogbnVtYmVyKTogbnVtYmVyID0+IG4gKiAyXG4gKlxuICogY29uc3QgZiA9IGZsb3cobGVuLCBkb3VibGUpXG4gKlxuICogYXNzZXJ0LnN0cmljdEVxdWFsKGYoJ2FhYScpLCA2KVxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmxvdzxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQj4oYWI6ICguLi5hOiBBKSA9PiBCKTogKC4uLmE6IEEpID0+IEJcbmV4cG9ydCBmdW5jdGlvbiBmbG93PEEgZXh0ZW5kcyBSZWFkb25seUFycmF5PHVua25vd24+LCBCLCBDPihhYjogKC4uLmE6IEEpID0+IEIsIGJjOiAoYjogQikgPT4gQyk6ICguLi5hOiBBKSA9PiBDXG5leHBvcnQgZnVuY3Rpb24gZmxvdzxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQiwgQywgRD4oXG4gIGFiOiAoLi4uYTogQSkgPT4gQixcbiAgYmM6IChiOiBCKSA9PiBDLFxuICBjZDogKGM6IEMpID0+IERcbik6ICguLi5hOiBBKSA9PiBEXG5leHBvcnQgZnVuY3Rpb24gZmxvdzxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQiwgQywgRCwgRT4oXG4gIGFiOiAoLi4uYTogQSkgPT4gQixcbiAgYmM6IChiOiBCKSA9PiBDLFxuICBjZDogKGM6IEMpID0+IEQsXG4gIGRlOiAoZDogRCkgPT4gRVxuKTogKC4uLmE6IEEpID0+IEVcbmV4cG9ydCBmdW5jdGlvbiBmbG93PEEgZXh0ZW5kcyBSZWFkb25seUFycmF5PHVua25vd24+LCBCLCBDLCBELCBFLCBGPihcbiAgYWI6ICguLi5hOiBBKSA9PiBCLFxuICBiYzogKGI6IEIpID0+IEMsXG4gIGNkOiAoYzogQykgPT4gRCxcbiAgZGU6IChkOiBEKSA9PiBFLFxuICBlZjogKGU6IEUpID0+IEZcbik6ICguLi5hOiBBKSA9PiBGXG5leHBvcnQgZnVuY3Rpb24gZmxvdzxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQiwgQywgRCwgRSwgRiwgRz4oXG4gIGFiOiAoLi4uYTogQSkgPT4gQixcbiAgYmM6IChiOiBCKSA9PiBDLFxuICBjZDogKGM6IEMpID0+IEQsXG4gIGRlOiAoZDogRCkgPT4gRSxcbiAgZWY6IChlOiBFKSA9PiBGLFxuICBmZzogKGY6IEYpID0+IEdcbik6ICguLi5hOiBBKSA9PiBHXG5leHBvcnQgZnVuY3Rpb24gZmxvdzxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQiwgQywgRCwgRSwgRiwgRywgSD4oXG4gIGFiOiAoLi4uYTogQSkgPT4gQixcbiAgYmM6IChiOiBCKSA9PiBDLFxuICBjZDogKGM6IEMpID0+IEQsXG4gIGRlOiAoZDogRCkgPT4gRSxcbiAgZWY6IChlOiBFKSA9PiBGLFxuICBmZzogKGY6IEYpID0+IEcsXG4gIGdoOiAoZzogRykgPT4gSFxuKTogKC4uLmE6IEEpID0+IEhcbmV4cG9ydCBmdW5jdGlvbiBmbG93PEEgZXh0ZW5kcyBSZWFkb25seUFycmF5PHVua25vd24+LCBCLCBDLCBELCBFLCBGLCBHLCBILCBJPihcbiAgYWI6ICguLi5hOiBBKSA9PiBCLFxuICBiYzogKGI6IEIpID0+IEMsXG4gIGNkOiAoYzogQykgPT4gRCxcbiAgZGU6IChkOiBEKSA9PiBFLFxuICBlZjogKGU6IEUpID0+IEYsXG4gIGZnOiAoZjogRikgPT4gRyxcbiAgZ2g6IChnOiBHKSA9PiBILFxuICBoaTogKGg6IEgpID0+IElcbik6ICguLi5hOiBBKSA9PiBJXG5leHBvcnQgZnVuY3Rpb24gZmxvdzxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgSj4oXG4gIGFiOiAoLi4uYTogQSkgPT4gQixcbiAgYmM6IChiOiBCKSA9PiBDLFxuICBjZDogKGM6IEMpID0+IEQsXG4gIGRlOiAoZDogRCkgPT4gRSxcbiAgZWY6IChlOiBFKSA9PiBGLFxuICBmZzogKGY6IEYpID0+IEcsXG4gIGdoOiAoZzogRykgPT4gSCxcbiAgaGk6IChoOiBIKSA9PiBJLFxuICBpajogKGk6IEkpID0+IEpcbik6ICguLi5hOiBBKSA9PiBKXG5leHBvcnQgZnVuY3Rpb24gZmxvdyhcbiAgYWI6IEZ1bmN0aW9uLFxuICBiYz86IEZ1bmN0aW9uLFxuICBjZD86IEZ1bmN0aW9uLFxuICBkZT86IEZ1bmN0aW9uLFxuICBlZj86IEZ1bmN0aW9uLFxuICBmZz86IEZ1bmN0aW9uLFxuICBnaD86IEZ1bmN0aW9uLFxuICBoaT86IEZ1bmN0aW9uLFxuICBpaj86IEZ1bmN0aW9uXG4pOiB1bmtub3duIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIGFiXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzOiB1bmtub3duKSB7XG4gICAgICAgIHJldHVybiBiYyEoYWIuYXBwbHkodGhpcywgYXJndW1lbnRzKSlcbiAgICAgIH1cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXM6IHVua25vd24pIHtcbiAgICAgICAgcmV0dXJuIGNkIShiYyEoYWIuYXBwbHkodGhpcywgYXJndW1lbnRzKSkpXG4gICAgICB9XG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzOiB1bmtub3duKSB7XG4gICAgICAgIHJldHVybiBkZSEoY2QhKGJjIShhYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSkpXG4gICAgICB9XG4gICAgY2FzZSA1OlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzOiB1bmtub3duKSB7XG4gICAgICAgIHJldHVybiBlZiEoZGUhKGNkIShiYyEoYWIuYXBwbHkodGhpcywgYXJndW1lbnRzKSkpKSlcbiAgICAgIH1cbiAgICBjYXNlIDY6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXM6IHVua25vd24pIHtcbiAgICAgICAgcmV0dXJuIGZnIShlZiEoZGUhKGNkIShiYyEoYWIuYXBwbHkodGhpcywgYXJndW1lbnRzKSkpKSkpXG4gICAgICB9XG4gICAgY2FzZSA3OlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzOiB1bmtub3duKSB7XG4gICAgICAgIHJldHVybiBnaCEoZmchKGVmIShkZSEoY2QhKGJjIShhYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSkpKSkpXG4gICAgICB9XG4gICAgY2FzZSA4OlxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzOiB1bmtub3duKSB7XG4gICAgICAgIHJldHVybiBoaSEoZ2ghKGZnIShlZiEoZGUhKGNkIShiYyEoYWIuYXBwbHkodGhpcywgYXJndW1lbnRzKSkpKSkpKSlcbiAgICAgIH1cbiAgICBjYXNlIDk6XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHRoaXM6IHVua25vd24pIHtcbiAgICAgICAgcmV0dXJuIGlqIShoaSEoZ2ghKGZnIShlZiEoZGUhKGNkIShiYyEoYWIuYXBwbHkodGhpcywgYXJndW1lbnRzKSkpKSkpKSkpXG4gICAgICB9XG4gIH1cbiAgcmV0dXJuXG59XG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0dXBsZTxUIGV4dGVuZHMgUmVhZG9ubHlBcnJheTxhbnk+PiguLi50OiBUKTogVCB7XG4gIHJldHVybiB0XG59XG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmNyZW1lbnQobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIG4gKyAxXG59XG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNyZW1lbnQobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIG4gLSAxXG59XG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhYnN1cmQ8QT4oXzogbmV2ZXIpOiBBIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgYGFic3VyZGAgZnVuY3Rpb24gd2hpY2ggc2hvdWxkIGJlIHVuY2FsbGFibGUnKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0dXBsZWQgdmVyc2lvbiBvZiB0aGlzIGZ1bmN0aW9uOiBpbnN0ZWFkIG9mIGBuYCBhcmd1bWVudHMsIGl0IGFjY2VwdHMgYSBzaW5nbGUgdHVwbGUgYXJndW1lbnQuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IHR1cGxlZCB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGNvbnN0IGFkZCA9IHR1cGxlZCgoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIgPT4geCArIHkpXG4gKlxuICogYXNzZXJ0LnN0cmljdEVxdWFsKGFkZChbMSwgMl0pLCAzKVxuICpcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdHVwbGVkPEEgZXh0ZW5kcyBSZWFkb25seUFycmF5PHVua25vd24+LCBCPihmOiAoLi4uYTogQSkgPT4gQik6IChhOiBBKSA9PiBCIHtcbiAgcmV0dXJuIChhKSA9PiBmKC4uLmEpXG59XG5cbi8qKlxuICogSW52ZXJzZSBmdW5jdGlvbiBvZiBgdHVwbGVkYFxuICpcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdW50dXBsZWQ8QSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8dW5rbm93bj4sIEI+KGY6IChhOiBBKSA9PiBCKTogKC4uLmE6IEEpID0+IEIge1xuICByZXR1cm4gKC4uLmEpID0+IGYoYSlcbn1cblxuLyoqXG4gKiBQaXBlcyB0aGUgdmFsdWUgb2YgYW4gZXhwcmVzc2lvbiBpbnRvIGEgcGlwZWxpbmUgb2YgZnVuY3Rpb25zLlxuICpcbiAqIFNlZSBhbHNvIFtgZmxvd2BdKCNmbG93KS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgcGlwZSB9IGZyb20gJ2ZwLXRzL2Z1bmN0aW9uJ1xuICpcbiAqIGNvbnN0IGxlbiA9IChzOiBzdHJpbmcpOiBudW1iZXIgPT4gcy5sZW5ndGhcbiAqIGNvbnN0IGRvdWJsZSA9IChuOiBudW1iZXIpOiBudW1iZXIgPT4gbiAqIDJcbiAqXG4gKiAvLyB3aXRob3V0IHBpcGVcbiAqIGFzc2VydC5zdHJpY3RFcXVhbChkb3VibGUobGVuKCdhYWEnKSksIDYpXG4gKlxuICogLy8gd2l0aCBwaXBlXG4gKiBhc3NlcnQuc3RyaWN0RXF1YWwocGlwZSgnYWFhJywgbGVuLCBkb3VibGUpLCA2KVxuICpcbiAqIEBzaW5jZSAyLjYuM1xuICovXG5leHBvcnQgZnVuY3Rpb24gcGlwZTxBPihhOiBBKTogQVxuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8QSwgQj4oYTogQSwgYWI6IChhOiBBKSA9PiBCKTogQlxuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8QSwgQiwgQz4oYTogQSwgYWI6IChhOiBBKSA9PiBCLCBiYzogKGI6IEIpID0+IEMpOiBDXG5leHBvcnQgZnVuY3Rpb24gcGlwZTxBLCBCLCBDLCBEPihhOiBBLCBhYjogKGE6IEEpID0+IEIsIGJjOiAoYjogQikgPT4gQywgY2Q6IChjOiBDKSA9PiBEKTogRFxuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8QSwgQiwgQywgRCwgRT4oYTogQSwgYWI6IChhOiBBKSA9PiBCLCBiYzogKGI6IEIpID0+IEMsIGNkOiAoYzogQykgPT4gRCwgZGU6IChkOiBEKSA9PiBFKTogRVxuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8QSwgQiwgQywgRCwgRSwgRj4oXG4gIGE6IEEsXG4gIGFiOiAoYTogQSkgPT4gQixcbiAgYmM6IChiOiBCKSA9PiBDLFxuICBjZDogKGM6IEMpID0+IEQsXG4gIGRlOiAoZDogRCkgPT4gRSxcbiAgZWY6IChlOiBFKSA9PiBGXG4pOiBGXG5leHBvcnQgZnVuY3Rpb24gcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHPihcbiAgYTogQSxcbiAgYWI6IChhOiBBKSA9PiBCLFxuICBiYzogKGI6IEIpID0+IEMsXG4gIGNkOiAoYzogQykgPT4gRCxcbiAgZGU6IChkOiBEKSA9PiBFLFxuICBlZjogKGU6IEUpID0+IEYsXG4gIGZnOiAoZjogRikgPT4gR1xuKTogR1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRywgSD4oXG4gIGE6IEEsXG4gIGFiOiAoYTogQSkgPT4gQixcbiAgYmM6IChiOiBCKSA9PiBDLFxuICBjZDogKGM6IEMpID0+IEQsXG4gIGRlOiAoZDogRCkgPT4gRSxcbiAgZWY6IChlOiBFKSA9PiBGLFxuICBmZzogKGY6IEYpID0+IEcsXG4gIGdoOiAoZzogRykgPT4gSFxuKTogSFxuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgST4oXG4gIGE6IEEsXG4gIGFiOiAoYTogQSkgPT4gQixcbiAgYmM6IChiOiBCKSA9PiBDLFxuICBjZDogKGM6IEMpID0+IEQsXG4gIGRlOiAoZDogRCkgPT4gRSxcbiAgZWY6IChlOiBFKSA9PiBGLFxuICBmZzogKGY6IEYpID0+IEcsXG4gIGdoOiAoZzogRykgPT4gSCxcbiAgaGk6IChoOiBIKSA9PiBJXG4pOiBJXG5leHBvcnQgZnVuY3Rpb24gcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBKPihcbiAgYTogQSxcbiAgYWI6IChhOiBBKSA9PiBCLFxuICBiYzogKGI6IEIpID0+IEMsXG4gIGNkOiAoYzogQykgPT4gRCxcbiAgZGU6IChkOiBEKSA9PiBFLFxuICBlZjogKGU6IEUpID0+IEYsXG4gIGZnOiAoZjogRikgPT4gRyxcbiAgZ2g6IChnOiBHKSA9PiBILFxuICBoaTogKGg6IEgpID0+IEksXG4gIGlqOiAoaTogSSkgPT4gSlxuKTogSlxuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgSiwgSz4oXG4gIGE6IEEsXG4gIGFiOiAoYTogQSkgPT4gQixcbiAgYmM6IChiOiBCKSA9PiBDLFxuICBjZDogKGM6IEMpID0+IEQsXG4gIGRlOiAoZDogRCkgPT4gRSxcbiAgZWY6IChlOiBFKSA9PiBGLFxuICBmZzogKGY6IEYpID0+IEcsXG4gIGdoOiAoZzogRykgPT4gSCxcbiAgaGk6IChoOiBIKSA9PiBJLFxuICBpajogKGk6IEkpID0+IEosXG4gIGprOiAoajogSikgPT4gS1xuKTogS1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgSiwgSywgTD4oXG4gIGE6IEEsXG4gIGFiOiAoYTogQSkgPT4gQixcbiAgYmM6IChiOiBCKSA9PiBDLFxuICBjZDogKGM6IEMpID0+IEQsXG4gIGRlOiAoZDogRCkgPT4gRSxcbiAgZWY6IChlOiBFKSA9PiBGLFxuICBmZzogKGY6IEYpID0+IEcsXG4gIGdoOiAoZzogRykgPT4gSCxcbiAgaGk6IChoOiBIKSA9PiBJLFxuICBpajogKGk6IEkpID0+IEosXG4gIGprOiAoajogSikgPT4gSyxcbiAga2w6IChrOiBLKSA9PiBMXG4pOiBMXG5leHBvcnQgZnVuY3Rpb24gcGlwZTxBLCBCLCBDLCBELCBFLCBGLCBHLCBILCBJLCBKLCBLLCBMLCBNPihcbiAgYTogQSxcbiAgYWI6IChhOiBBKSA9PiBCLFxuICBiYzogKGI6IEIpID0+IEMsXG4gIGNkOiAoYzogQykgPT4gRCxcbiAgZGU6IChkOiBEKSA9PiBFLFxuICBlZjogKGU6IEUpID0+IEYsXG4gIGZnOiAoZjogRikgPT4gRyxcbiAgZ2g6IChnOiBHKSA9PiBILFxuICBoaTogKGg6IEgpID0+IEksXG4gIGlqOiAoaTogSSkgPT4gSixcbiAgams6IChqOiBKKSA9PiBLLFxuICBrbDogKGs6IEspID0+IEwsXG4gIGxtOiAobDogTCkgPT4gTVxuKTogTVxuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgSiwgSywgTCwgTSwgTj4oXG4gIGE6IEEsXG4gIGFiOiAoYTogQSkgPT4gQixcbiAgYmM6IChiOiBCKSA9PiBDLFxuICBjZDogKGM6IEMpID0+IEQsXG4gIGRlOiAoZDogRCkgPT4gRSxcbiAgZWY6IChlOiBFKSA9PiBGLFxuICBmZzogKGY6IEYpID0+IEcsXG4gIGdoOiAoZzogRykgPT4gSCxcbiAgaGk6IChoOiBIKSA9PiBJLFxuICBpajogKGk6IEkpID0+IEosXG4gIGprOiAoajogSikgPT4gSyxcbiAga2w6IChrOiBLKSA9PiBMLFxuICBsbTogKGw6IEwpID0+IE0sXG4gIG1uOiAobTogTSkgPT4gTlxuKTogTlxuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgSiwgSywgTCwgTSwgTiwgTz4oXG4gIGE6IEEsXG4gIGFiOiAoYTogQSkgPT4gQixcbiAgYmM6IChiOiBCKSA9PiBDLFxuICBjZDogKGM6IEMpID0+IEQsXG4gIGRlOiAoZDogRCkgPT4gRSxcbiAgZWY6IChlOiBFKSA9PiBGLFxuICBmZzogKGY6IEYpID0+IEcsXG4gIGdoOiAoZzogRykgPT4gSCxcbiAgaGk6IChoOiBIKSA9PiBJLFxuICBpajogKGk6IEkpID0+IEosXG4gIGprOiAoajogSikgPT4gSyxcbiAga2w6IChrOiBLKSA9PiBMLFxuICBsbTogKGw6IEwpID0+IE0sXG4gIG1uOiAobTogTSkgPT4gTixcbiAgbm86IChuOiBOKSA9PiBPXG4pOiBPXG5cbmV4cG9ydCBmdW5jdGlvbiBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIEosIEssIEwsIE0sIE4sIE8sIFA+KFxuICBhOiBBLFxuICBhYjogKGE6IEEpID0+IEIsXG4gIGJjOiAoYjogQikgPT4gQyxcbiAgY2Q6IChjOiBDKSA9PiBELFxuICBkZTogKGQ6IEQpID0+IEUsXG4gIGVmOiAoZTogRSkgPT4gRixcbiAgZmc6IChmOiBGKSA9PiBHLFxuICBnaDogKGc6IEcpID0+IEgsXG4gIGhpOiAoaDogSCkgPT4gSSxcbiAgaWo6IChpOiBJKSA9PiBKLFxuICBqazogKGo6IEopID0+IEssXG4gIGtsOiAoazogSykgPT4gTCxcbiAgbG06IChsOiBMKSA9PiBNLFxuICBtbjogKG06IE0pID0+IE4sXG4gIG5vOiAobjogTikgPT4gTyxcbiAgb3A6IChvOiBPKSA9PiBQXG4pOiBQXG5cbmV4cG9ydCBmdW5jdGlvbiBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIEosIEssIEwsIE0sIE4sIE8sIFAsIFE+KFxuICBhOiBBLFxuICBhYjogKGE6IEEpID0+IEIsXG4gIGJjOiAoYjogQikgPT4gQyxcbiAgY2Q6IChjOiBDKSA9PiBELFxuICBkZTogKGQ6IEQpID0+IEUsXG4gIGVmOiAoZTogRSkgPT4gRixcbiAgZmc6IChmOiBGKSA9PiBHLFxuICBnaDogKGc6IEcpID0+IEgsXG4gIGhpOiAoaDogSCkgPT4gSSxcbiAgaWo6IChpOiBJKSA9PiBKLFxuICBqazogKGo6IEopID0+IEssXG4gIGtsOiAoazogSykgPT4gTCxcbiAgbG06IChsOiBMKSA9PiBNLFxuICBtbjogKG06IE0pID0+IE4sXG4gIG5vOiAobjogTikgPT4gTyxcbiAgb3A6IChvOiBPKSA9PiBQLFxuICBwcTogKHA6IFApID0+IFFcbik6IFFcblxuZXhwb3J0IGZ1bmN0aW9uIHBpcGU8QSwgQiwgQywgRCwgRSwgRiwgRywgSCwgSSwgSiwgSywgTCwgTSwgTiwgTywgUCwgUSwgUj4oXG4gIGE6IEEsXG4gIGFiOiAoYTogQSkgPT4gQixcbiAgYmM6IChiOiBCKSA9PiBDLFxuICBjZDogKGM6IEMpID0+IEQsXG4gIGRlOiAoZDogRCkgPT4gRSxcbiAgZWY6IChlOiBFKSA9PiBGLFxuICBmZzogKGY6IEYpID0+IEcsXG4gIGdoOiAoZzogRykgPT4gSCxcbiAgaGk6IChoOiBIKSA9PiBJLFxuICBpajogKGk6IEkpID0+IEosXG4gIGprOiAoajogSikgPT4gSyxcbiAga2w6IChrOiBLKSA9PiBMLFxuICBsbTogKGw6IEwpID0+IE0sXG4gIG1uOiAobTogTSkgPT4gTixcbiAgbm86IChuOiBOKSA9PiBPLFxuICBvcDogKG86IE8pID0+IFAsXG4gIHBxOiAocDogUCkgPT4gUSxcbiAgcXI6IChxOiBRKSA9PiBSXG4pOiBSXG5cbmV4cG9ydCBmdW5jdGlvbiBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIEosIEssIEwsIE0sIE4sIE8sIFAsIFEsIFIsIFM+KFxuICBhOiBBLFxuICBhYjogKGE6IEEpID0+IEIsXG4gIGJjOiAoYjogQikgPT4gQyxcbiAgY2Q6IChjOiBDKSA9PiBELFxuICBkZTogKGQ6IEQpID0+IEUsXG4gIGVmOiAoZTogRSkgPT4gRixcbiAgZmc6IChmOiBGKSA9PiBHLFxuICBnaDogKGc6IEcpID0+IEgsXG4gIGhpOiAoaDogSCkgPT4gSSxcbiAgaWo6IChpOiBJKSA9PiBKLFxuICBqazogKGo6IEopID0+IEssXG4gIGtsOiAoazogSykgPT4gTCxcbiAgbG06IChsOiBMKSA9PiBNLFxuICBtbjogKG06IE0pID0+IE4sXG4gIG5vOiAobjogTikgPT4gTyxcbiAgb3A6IChvOiBPKSA9PiBQLFxuICBwcTogKHA6IFApID0+IFEsXG4gIHFyOiAocTogUSkgPT4gUixcbiAgcnM6IChyOiBSKSA9PiBTXG4pOiBTXG5cbmV4cG9ydCBmdW5jdGlvbiBwaXBlPEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIEosIEssIEwsIE0sIE4sIE8sIFAsIFEsIFIsIFMsIFQ+KFxuICBhOiBBLFxuICBhYjogKGE6IEEpID0+IEIsXG4gIGJjOiAoYjogQikgPT4gQyxcbiAgY2Q6IChjOiBDKSA9PiBELFxuICBkZTogKGQ6IEQpID0+IEUsXG4gIGVmOiAoZTogRSkgPT4gRixcbiAgZmc6IChmOiBGKSA9PiBHLFxuICBnaDogKGc6IEcpID0+IEgsXG4gIGhpOiAoaDogSCkgPT4gSSxcbiAgaWo6IChpOiBJKSA9PiBKLFxuICBqazogKGo6IEopID0+IEssXG4gIGtsOiAoazogSykgPT4gTCxcbiAgbG06IChsOiBMKSA9PiBNLFxuICBtbjogKG06IE0pID0+IE4sXG4gIG5vOiAobjogTikgPT4gTyxcbiAgb3A6IChvOiBPKSA9PiBQLFxuICBwcTogKHA6IFApID0+IFEsXG4gIHFyOiAocTogUSkgPT4gUixcbiAgcnM6IChyOiBSKSA9PiBTLFxuICBzdDogKHM6IFMpID0+IFRcbik6IFRcbmV4cG9ydCBmdW5jdGlvbiBwaXBlKFxuICBhOiB1bmtub3duLFxuICBhYj86IEZ1bmN0aW9uLFxuICBiYz86IEZ1bmN0aW9uLFxuICBjZD86IEZ1bmN0aW9uLFxuICBkZT86IEZ1bmN0aW9uLFxuICBlZj86IEZ1bmN0aW9uLFxuICBmZz86IEZ1bmN0aW9uLFxuICBnaD86IEZ1bmN0aW9uLFxuICBoaT86IEZ1bmN0aW9uXG4pOiB1bmtub3duIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIGFcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gYWIhKGEpXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGJjIShhYiEoYSkpXG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIGNkIShiYyEoYWIhKGEpKSlcbiAgICBjYXNlIDU6XG4gICAgICByZXR1cm4gZGUhKGNkIShiYyEoYWIhKGEpKSkpXG4gICAgY2FzZSA2OlxuICAgICAgcmV0dXJuIGVmIShkZSEoY2QhKGJjIShhYiEoYSkpKSkpXG4gICAgY2FzZSA3OlxuICAgICAgcmV0dXJuIGZnIShlZiEoZGUhKGNkIShiYyEoYWIhKGEpKSkpKSlcbiAgICBjYXNlIDg6XG4gICAgICByZXR1cm4gZ2ghKGZnIShlZiEoZGUhKGNkIShiYyEoYWIhKGEpKSkpKSkpXG4gICAgY2FzZSA5OlxuICAgICAgcmV0dXJuIGhpIShnaCEoZmchKGVmIShkZSEoY2QhKGJjIShhYiEoYSkpKSkpKSkpXG4gICAgZGVmYXVsdDpcbiAgICAgIGxldCByZXQgPSBhcmd1bWVudHNbMF1cbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJldCA9IGFyZ3VtZW50c1tpXShyZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0XG4gIH1cbn1cblxuLyoqXG4gKiBUeXBlIGhvbGUgc2ltdWxhdGlvblxuICpcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgaG9sZTogPFQ+KCkgPT4gVCA9IGFic3VyZCBhcyBhbnlcblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBTSyA9IDxBLCBCPihfOiBBLCBiOiBCKTogQiA9PiBiXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlcHJlY2F0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gdHNsaW50OmRpc2FibGU6IGRlcHJlY2F0aW9uXG5cbi8qKlxuICogVXNlIGBSZWZpbmVtZW50YCBtb2R1bGUgaW5zdGVhZC5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVmaW5lbWVudDxBLCBCIGV4dGVuZHMgQT4ge1xuICAoYTogQSk6IGEgaXMgQlxufVxuXG4vKipcbiAqIFVzZSBgUHJlZGljYXRlYCBtb2R1bGUgaW5zdGVhZC5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJlZGljYXRlPEE+IHtcbiAgKGE6IEEpOiBib29sZWFuXG59XG5cbi8qKlxuICogVXNlIGBQcmVkaWNhdGVgIG1vZHVsZSBpbnN0ZWFkLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vdDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IFByZWRpY2F0ZTxBPiB7XG4gIHJldHVybiAoYSkgPT4gIXByZWRpY2F0ZShhKVxufVxuXG4vKipcbiAqIFVzZSBgRW5kb21vcnBoaXNtYCBtb2R1bGUgaW5zdGVhZC5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW5kb21vcnBoaXNtPEE+IHtcbiAgKGE6IEEpOiBBXG59XG5cbi8qKlxuICogVXNlIGBFbmRvbW9ycGhpc21gIG1vZHVsZSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRFbmRvbW9ycGhpc21Nb25vaWQgPSA8QSA9IG5ldmVyPigpOiBNb25vaWQ8RW5kb21vcnBoaXNtPEE+PiA9PiAoe1xuICBjb25jYXQ6IChmaXJzdCwgc2Vjb25kKSA9PiBmbG93KGZpcnN0LCBzZWNvbmQpLFxuICBlbXB0eTogaWRlbnRpdHlcbn0pXG4iXX0=
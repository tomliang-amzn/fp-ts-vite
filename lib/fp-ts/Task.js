"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chainIOK = exports.chainFirstIOK = exports.chainFirst = exports.chain = exports.bindTo = exports.bind = exports.apSecond = exports.apS = exports.apFirst = exports.ap = exports.URI = exports.Pointed = exports.MonadTask = exports.MonadIO = exports.Monad = exports.Functor = exports.FromTask = exports.FromIO = exports.Do = exports.Chain = exports.ApplySeq = exports.ApplyPar = exports.ApplicativeSeq = exports.ApplicativePar = exports.ApT = void 0;
exports.delay = delay;
exports.getMonoid = exports.fromTask = exports.fromIOK = exports.fromIO = exports.flatten = exports.flap = void 0;
exports.getRaceMonoid = getRaceMonoid;
exports.traverseSeqArrayWithIndex = exports.traverseSeqArray = exports.traverseReadonlyNonEmptyArrayWithIndexSeq = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndexSeq = exports.traverseReadonlyArrayWithIndex = exports.traverseArrayWithIndex = exports.traverseArray = exports.taskSeq = exports.task = exports.sequenceSeqArray = exports.sequenceArray = exports.of = exports.never = exports.map = exports.getSemigroup = void 0;

var _Applicative = require("./Applicative");

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _FromIO = require("./FromIO");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// -------------------------------------------------------------------------------------
// natural transformations
// -------------------------------------------------------------------------------------

/**
 * @category natural transformations
 * @since 2.0.0
 */
var fromIO = function fromIO(ma) {
  return function () {
    return Promise.resolve().then(ma);
  };
}; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Creates a task that will complete after a time delay
 *
 * @example
 * import { sequenceT } from 'fp-ts/Apply'
 * import * as T from 'fp-ts/Task'
 * import { takeRight } from 'fp-ts/Array'
 *
 * async function test() {
 *   const log: Array<string> = []
 *   const append = (message: string): T.Task<void> =>
 *     T.fromIO(() => {
 *       log.push(message)
 *     })
 *   const fa = append('a')
 *   const fb = T.delay(20)(append('b'))
 *   const fc = T.delay(10)(append('c'))
 *   const fd = append('d')
 *   await sequenceT(T.ApplyPar)(fa, fb, fc, fd)()
 *   assert.deepStrictEqual(takeRight(2)(log), ['c', 'b'])
 * }
 *
 * test()
 *
 * @category combinators
 * @since 2.0.0
 */


exports.fromIO = fromIO;

function delay(millis) {
  return function (ma) {
    return function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          // tslint:disable-next-line: no-floating-promises
          Promise.resolve().then(ma).then(resolve);
        }, millis);
      });
    };
  };
} // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------


var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
};

var _apPar = function _apPar(fab, fa) {
  return (0, _function.pipe)(fab, ap(fa));
};

var _apSeq = function _apSeq(fab, fa) {
  return (0, _function.pipe)(fab, chain(function (f) {
    return (0, _function.pipe)(fa, map(f));
  }));
};

var _chain = function _chain(ma, f) {
  return (0, _function.pipe)(ma, chain(f));
}; // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */


var map = function map(f) {
  return function (fa) {
    return function () {
      return Promise.resolve().then(fa).then(f);
    };
  };
};
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.0.0
 */


exports.map = map;

var ap = function ap(fa) {
  return function (fab) {
    return function () {
      return Promise.all([Promise.resolve().then(fab), Promise.resolve().then(fa)]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            f = _ref2[0],
            a = _ref2[1];

        return f(a);
      });
    };
  };
};
/**
 * @category Pointed
 * @since 2.0.0
 */


exports.ap = ap;

var of = function of(a) {
  return function () {
    return Promise.resolve(a);
  };
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.0.0
 */


exports.of = of;

var chain = function chain(f) {
  return function (ma) {
    return function () {
      return Promise.resolve().then(ma).then(function (a) {
        return f(a)();
      });
    };
  };
};
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */


exports.chain = chain;
var flatten = /*#__PURE__*/chain(_function.identity); // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */

exports.flatten = flatten;
var URI = 'Task';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

/**
 * Monoid returning the first completed task.
 *
 * Note: uses `Promise.race` internally.
 *
 * @example
 * import * as T from 'fp-ts/Task'
 *
 * async function test() {
 *   const S = T.getRaceMonoid<string>()
 *   const fa = T.delay(20)(T.of('a'))
 *   const fb = T.delay(10)(T.of('b'))
 *   assert.deepStrictEqual(await S.concat(fa, fb)(), 'b')
 * }
 *
 * test()
 *
 * @category instances
 * @since 2.0.0
 */
function getRaceMonoid() {
  return {
    concat: function concat(x, y) {
      return function () {
        return Promise.race([Promise.resolve().then(x), Promise.resolve().then(y)]);
      };
    },
    empty: never
  };
}
/**
 * @category instances
 * @since 2.7.0
 */


var Functor = {
  URI: URI,
  map: _map
};
/**
 * Derivable from `Functor`.
 *
 * @category combinators
 * @since 2.10.0
 */

exports.Functor = Functor;
var flap = /*#__PURE__*/(0, _Functor.flap)(Functor);
/**
 * @category instances
 * @since 2.10.0
 */

exports.flap = flap;
var Pointed = {
  URI: URI,
  of: of
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Pointed = Pointed;
var ApplyPar = {
  URI: URI,
  map: _map,
  ap: _apPar
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.ApplyPar = ApplyPar;
var apFirst = /*#__PURE__*/(0, _Apply.apFirst)(ApplyPar);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.apFirst = apFirst;
var apSecond = /*#__PURE__*/(0, _Apply.apSecond)(ApplyPar);
/**
 * @category instances
 * @since 2.7.0
 */

exports.apSecond = apSecond;
var ApplicativePar = {
  URI: URI,
  map: _map,
  ap: _apPar,
  of: of
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.ApplicativePar = ApplicativePar;
var ApplySeq = {
  URI: URI,
  map: _map,
  ap: _apSeq
};
/**
 * @category instances
 * @since 2.7.0
 */

exports.ApplySeq = ApplySeq;
var ApplicativeSeq = {
  URI: URI,
  map: _map,
  ap: _apSeq,
  of: of
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.ApplicativeSeq = ApplicativeSeq;
var Chain = {
  URI: URI,
  map: _map,
  ap: _apPar,
  chain: _chain
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Chain = Chain;
var Monad = {
  URI: URI,
  map: _map,
  of: of,
  ap: _apPar,
  chain: _chain
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Monad = Monad;
var MonadIO = {
  URI: URI,
  map: _map,
  of: of,
  ap: _apPar,
  chain: _chain,
  fromIO: fromIO
};
/**
 * @category FromTask
 * @since 2.7.0
 * @deprecated
 */

exports.MonadIO = MonadIO;
var fromTask = _function.identity;
/**
 * @category instances
 * @since 2.10.0
 */

exports.fromTask = fromTask;
var MonadTask = {
  URI: URI,
  map: _map,
  of: of,
  ap: _apPar,
  chain: _chain,
  fromIO: fromIO,
  fromTask: fromTask
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.0.0
 */

exports.MonadTask = MonadTask;
var chainFirst = /*#__PURE__*/(0, _Chain.chainFirst)(Chain);
/**
 * @category instances
 * @since 2.10.0
 */

exports.chainFirst = chainFirst;
var FromIO = {
  URI: URI,
  fromIO: fromIO
};
/**
 * @category combinators
 * @since 2.4.0
 */

exports.FromIO = FromIO;
var fromIOK = /*#__PURE__*/(0, _FromIO.fromIOK)(FromIO);
/**
 * @category combinators
 * @since 2.4.0
 */

exports.fromIOK = fromIOK;
var chainIOK = /*#__PURE__*/(0, _FromIO.chainIOK)(FromIO, Chain);
/**
 * @category combinators
 * @since 2.10.0
 */

exports.chainIOK = chainIOK;
var chainFirstIOK = /*#__PURE__*/(0, _FromIO.chainFirstIOK)(FromIO, Chain);
/**
 * @category instances
 * @since 2.10.0
 */

exports.chainFirstIOK = chainFirstIOK;
var FromTask = {
  URI: URI,
  fromIO: fromIO,
  fromTask: fromTask
}; // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * A `Task` that never completes.
 *
 * @since 2.0.0
 */

exports.FromTask = FromTask;

var never = function never() {
  return new Promise(function (_) {
    return undefined;
  });
}; // -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.9.0
 */


exports.never = never;
var Do = /*#__PURE__*/of(_.emptyRecord);
/**
 * @since 2.8.0
 */

exports.Do = Do;
var bindTo = /*#__PURE__*/(0, _Functor.bindTo)(Functor);
/**
 * @since 2.8.0
 */

exports.bindTo = bindTo;
var bind = /*#__PURE__*/(0, _Chain.bind)(Chain); // -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------

/**
 * @since 2.8.0
 */

exports.bind = bind;
var apS = /*#__PURE__*/(0, _Apply.apS)(ApplyPar); // -------------------------------------------------------------------------------------
// sequence T
// -------------------------------------------------------------------------------------

/**
 * @since 2.11.0
 */

exports.apS = apS;
var ApT = /*#__PURE__*/of(_.emptyReadonlyArray); // -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @since 2.11.0
 */

exports.ApT = ApT;

var traverseReadonlyNonEmptyArrayWithIndex = function traverseReadonlyNonEmptyArrayWithIndex(f) {
  return function (as) {
    return function () {
      return Promise.all(as.map(function (a, i) {
        return Promise.resolve().then(function () {
          return f(i, a)();
        });
      }));
    };
  };
};
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativePar)`.
 *
 * @since 2.11.0
 */


exports.traverseReadonlyNonEmptyArrayWithIndex = traverseReadonlyNonEmptyArrayWithIndex;

var traverseReadonlyArrayWithIndex = function traverseReadonlyArrayWithIndex(f) {
  var g = traverseReadonlyNonEmptyArrayWithIndex(f);
  return function (as) {
    return _.isNonEmpty(as) ? g(as) : ApT;
  };
};
/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.11.0
 */


exports.traverseReadonlyArrayWithIndex = traverseReadonlyArrayWithIndex;

var traverseReadonlyNonEmptyArrayWithIndexSeq = function traverseReadonlyNonEmptyArrayWithIndexSeq(f) {
  return function (as) {
    return function () {
      return _.tail(as).reduce(function (acc, a, i) {
        return acc.then(function (bs) {
          return Promise.resolve().then(f(i + 1, a)).then(function (b) {
            bs.push(b);
            return bs;
          });
        });
      }, Promise.resolve().then(f(0, _.head(as))).then(_.singleton));
    };
  };
};
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(ApplicativeSeq)`.
 *
 * @since 2.11.0
 */


exports.traverseReadonlyNonEmptyArrayWithIndexSeq = traverseReadonlyNonEmptyArrayWithIndexSeq;

var traverseReadonlyArrayWithIndexSeq = function traverseReadonlyArrayWithIndexSeq(f) {
  var g = traverseReadonlyNonEmptyArrayWithIndexSeq(f);
  return function (as) {
    return _.isNonEmpty(as) ? g(as) : ApT;
  };
};
/**
 * @since 2.9.0
 */


exports.traverseReadonlyArrayWithIndexSeq = traverseReadonlyArrayWithIndexSeq;
var traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
/**
 * @since 2.9.0
 */

exports.traverseArrayWithIndex = traverseArrayWithIndex;

var traverseArray = function traverseArray(f) {
  return traverseReadonlyArrayWithIndex(function (_, a) {
    return f(a);
  });
};
/**
 * @since 2.9.0
 */


exports.traverseArray = traverseArray;
var sequenceArray = /*#__PURE__*/traverseArray(_function.identity);
/**
 * @since 2.9.0
 */

exports.sequenceArray = sequenceArray;
var traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
/**
 * @since 2.9.0
 */

exports.traverseSeqArrayWithIndex = traverseSeqArrayWithIndex;

var traverseSeqArray = function traverseSeqArray(f) {
  return traverseReadonlyArrayWithIndexSeq(function (_, a) {
    return f(a);
  });
};
/**
 * @since 2.9.0
 */


exports.traverseSeqArray = traverseSeqArray;
var sequenceSeqArray = /*#__PURE__*/traverseSeqArray(_function.identity); // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation

/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.sequenceSeqArray = sequenceSeqArray;
var task = {
  URI: URI,
  map: _map,
  of: of,
  ap: _apPar,
  chain: _chain,
  fromIO: fromIO,
  fromTask: fromTask
};
/**
 * Use small, specific instances instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.task = task;
var taskSeq = {
  URI: URI,
  map: _map,
  of: of,
  ap: _apSeq,
  chain: _chain,
  fromIO: fromIO,
  fromTask: fromTask
};
/**
 * Use [`getApplySemigroup`](./Apply.ts.html#getapplysemigroup) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.taskSeq = taskSeq;
var getSemigroup = /*#__PURE__*/(0, _Apply.getApplySemigroup)(ApplySeq);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * Lift a monoid into 'Task', the inner values are concatenated using the provided `Monoid`.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getSemigroup = getSemigroup;
var getMonoid = /*#__PURE__*/(0, _Applicative.getApplicativeMonoid)(ApplicativeSeq);
exports.getMonoid = getMonoid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9UYXNrLnRzIl0sIm5hbWVzIjpbImZyb21JTyIsIm1hIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiZGVsYXkiLCJtaWxsaXMiLCJzZXRUaW1lb3V0IiwiX21hcCIsImZhIiwiZiIsIm1hcCIsIl9hcFBhciIsImZhYiIsImFwIiwiX2FwU2VxIiwiY2hhaW4iLCJfY2hhaW4iLCJhbGwiLCJhIiwib2YiLCJmbGF0dGVuIiwiaWRlbnRpdHkiLCJVUkkiLCJnZXRSYWNlTW9ub2lkIiwiY29uY2F0IiwieCIsInkiLCJyYWNlIiwiZW1wdHkiLCJuZXZlciIsIkZ1bmN0b3IiLCJmbGFwIiwiUG9pbnRlZCIsIkFwcGx5UGFyIiwiYXBGaXJzdCIsImFwU2Vjb25kIiwiQXBwbGljYXRpdmVQYXIiLCJBcHBseVNlcSIsIkFwcGxpY2F0aXZlU2VxIiwiQ2hhaW4iLCJNb25hZCIsIk1vbmFkSU8iLCJmcm9tVGFzayIsIk1vbmFkVGFzayIsImNoYWluRmlyc3QiLCJGcm9tSU8iLCJmcm9tSU9LIiwiY2hhaW5JT0siLCJjaGFpbkZpcnN0SU9LIiwiRnJvbVRhc2siLCJfIiwidW5kZWZpbmVkIiwiRG8iLCJlbXB0eVJlY29yZCIsImJpbmRUbyIsImJpbmQiLCJhcFMiLCJBcFQiLCJlbXB0eVJlYWRvbmx5QXJyYXkiLCJ0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleCIsImFzIiwiaSIsInRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCIsImciLCJpc05vbkVtcHR5IiwidHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXhTZXEiLCJ0YWlsIiwicmVkdWNlIiwiYWNjIiwiYnMiLCJiIiwicHVzaCIsImhlYWQiLCJzaW5nbGV0b24iLCJ0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXhTZXEiLCJ0cmF2ZXJzZUFycmF5V2l0aEluZGV4IiwidHJhdmVyc2VBcnJheSIsInNlcXVlbmNlQXJyYXkiLCJ0cmF2ZXJzZVNlcUFycmF5V2l0aEluZGV4IiwidHJhdmVyc2VTZXFBcnJheSIsInNlcXVlbmNlU2VxQXJyYXkiLCJ0YXNrIiwidGFza1NlcSIsImdldFNlbWlncm91cCIsImdldE1vbm9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVlBOztBQUNBOztBQU9BOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsTUFBOEIsR0FBRyxTQUFqQ0EsTUFBaUMsQ0FBQ0MsRUFBRDtBQUFBLFNBQVE7QUFBQSxXQUFNQyxPQUFPLENBQUNDLE9BQVIsR0FBa0JDLElBQWxCLENBQXVCSCxFQUF2QixDQUFOO0FBQUEsR0FBUjtBQUFBLENBQXZDLEMsQ0FFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLFNBQVNJLEtBQVQsQ0FBZUMsTUFBZixFQUE0RDtBQUNqRSxTQUFPLFVBQUNMLEVBQUQ7QUFBQSxXQUFRO0FBQUEsYUFDYixJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ3ZCSSxRQUFBQSxVQUFVLENBQUMsWUFBTTtBQUNmO0FBQ0FMLFVBQUFBLE9BQU8sQ0FBQ0MsT0FBUixHQUFrQkMsSUFBbEIsQ0FBdUJILEVBQXZCLEVBQTJCRyxJQUEzQixDQUFnQ0QsT0FBaEM7QUFDRCxTQUhTLEVBR1BHLE1BSE8sQ0FBVjtBQUlELE9BTEQsQ0FEYTtBQUFBLEtBQVI7QUFBQSxHQUFQO0FBT0QsQyxDQUVEO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUUsSUFBMEIsR0FBRyxTQUE3QkEsSUFBNkIsQ0FBQ0MsRUFBRCxFQUFLQyxDQUFMO0FBQUEsU0FBVyxvQkFBS0Qs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNK0MsU0FBK0MsR0FDMUQsYUFDQSx1Q0FBcUI5QyxjQUFyQixDQUZLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBgYGB0c1xuICogaW50ZXJmYWNlIFRhc2s8QT4ge1xuICogICAoKTogUHJvbWlzZTxBPlxuICogfVxuICogYGBgXG4gKlxuICogYFRhc2s8QT5gIHJlcHJlc2VudHMgYW4gYXN5bmNocm9ub3VzIGNvbXB1dGF0aW9uIHRoYXQgeWllbGRzIGEgdmFsdWUgb2YgdHlwZSBgQWAgYW5kICoqbmV2ZXIgZmFpbHMqKi5cbiAqIElmIHlvdSB3YW50IHRvIHJlcHJlc2VudCBhbiBhc3luY2hyb25vdXMgY29tcHV0YXRpb24gdGhhdCBtYXkgZmFpbCwgcGxlYXNlIHNlZSBgVGFza0VpdGhlcmAuXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IEFwcGxpY2F0aXZlMSwgZ2V0QXBwbGljYXRpdmVNb25vaWQgfSBmcm9tICcuL0FwcGxpY2F0aXZlJ1xuaW1wb3J0IHtcbiAgYXBGaXJzdCBhcyBhcEZpcnN0XyxcbiAgQXBwbHkxLFxuICBhcFMgYXMgYXBTXyxcbiAgYXBTZWNvbmQgYXMgYXBTZWNvbmRfLFxuICBnZXRBcHBseVNlbWlncm91cCBhcyBnZXRBcHBseVNlbWlncm91cF9cbn0gZnJvbSAnLi9BcHBseSdcbmltcG9ydCB7IGJpbmQgYXMgYmluZF8sIENoYWluMSwgY2hhaW5GaXJzdCBhcyBjaGFpbkZpcnN0XyB9IGZyb20gJy4vQ2hhaW4nXG5pbXBvcnQgeyBjaGFpbkZpcnN0SU9LIGFzIGNoYWluRmlyc3RJT0tfLCBjaGFpbklPSyBhcyBjaGFpbklPS18sIEZyb21JTzEsIGZyb21JT0sgYXMgZnJvbUlPS18gfSBmcm9tICcuL0Zyb21JTydcbmltcG9ydCB7IEZyb21UYXNrMSB9IGZyb20gJy4vRnJvbVRhc2snXG5pbXBvcnQgeyBpZGVudGl0eSwgcGlwZSB9IGZyb20gJy4vZnVuY3Rpb24nXG5pbXBvcnQgeyBiaW5kVG8gYXMgYmluZFRvXywgZmxhcCBhcyBmbGFwXywgRnVuY3RvcjEgfSBmcm9tICcuL0Z1bmN0b3InXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4vaW50ZXJuYWwnXG5pbXBvcnQgeyBNb25hZDEgfSBmcm9tICcuL01vbmFkJ1xuaW1wb3J0IHsgTW9uYWRJTzEgfSBmcm9tICcuL01vbmFkSU8nXG5pbXBvcnQgeyBNb25hZFRhc2sxIH0gZnJvbSAnLi9Nb25hZFRhc2snXG5pbXBvcnQgeyBNb25vaWQgfSBmcm9tICcuL01vbm9pZCdcbmltcG9ydCB7IE5vbkVtcHR5QXJyYXkgfSBmcm9tICcuL05vbkVtcHR5QXJyYXknXG5pbXBvcnQgeyBQb2ludGVkMSB9IGZyb20gJy4vUG9pbnRlZCdcbmltcG9ydCB7IFJlYWRvbmx5Tm9uRW1wdHlBcnJheSB9IGZyb20gJy4vUmVhZG9ubHlOb25FbXB0eUFycmF5J1xuaW1wb3J0IHsgU2VtaWdyb3VwIH0gZnJvbSAnLi9TZW1pZ3JvdXAnXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG1vZGVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IG1vZGVsXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUYXNrPEE+IHtcbiAgKCk6IFByb21pc2U8QT5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUlPOiBGcm9tSU8xPFVSST5bJ2Zyb21JTyddID0gKG1hKSA9PiAoKSA9PiBQcm9taXNlLnJlc29sdmUoKS50aGVuKG1hKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBjb21iaW5hdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIENyZWF0ZXMgYSB0YXNrIHRoYXQgd2lsbCBjb21wbGV0ZSBhZnRlciBhIHRpbWUgZGVsYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgc2VxdWVuY2VUIH0gZnJvbSAnZnAtdHMvQXBwbHknXG4gKiBpbXBvcnQgKiBhcyBUIGZyb20gJ2ZwLXRzL1Rhc2snXG4gKiBpbXBvcnQgeyB0YWtlUmlnaHQgfSBmcm9tICdmcC10cy9BcnJheSdcbiAqXG4gKiBhc3luYyBmdW5jdGlvbiB0ZXN0KCkge1xuICogICBjb25zdCBsb2c6IEFycmF5PHN0cmluZz4gPSBbXVxuICogICBjb25zdCBhcHBlbmQgPSAobWVzc2FnZTogc3RyaW5nKTogVC5UYXNrPHZvaWQ+ID0+XG4gKiAgICAgVC5mcm9tSU8oKCkgPT4ge1xuICogICAgICAgbG9nLnB1c2gobWVzc2FnZSlcbiAqICAgICB9KVxuICogICBjb25zdCBmYSA9IGFwcGVuZCgnYScpXG4gKiAgIGNvbnN0IGZiID0gVC5kZWxheSgyMCkoYXBwZW5kKCdiJykpXG4gKiAgIGNvbnN0IGZjID0gVC5kZWxheSgxMCkoYXBwZW5kKCdjJykpXG4gKiAgIGNvbnN0IGZkID0gYXBwZW5kKCdkJylcbiAqICAgYXdhaXQgc2VxdWVuY2VUKFQuQXBwbHlQYXIpKGZhLCBmYiwgZmMsIGZkKSgpXG4gKiAgIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwodGFrZVJpZ2h0KDIpKGxvZyksIFsnYycsICdiJ10pXG4gKiB9XG4gKlxuICogdGVzdCgpXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5KG1pbGxpczogbnVtYmVyKTogPEE+KG1hOiBUYXNrPEE+KSA9PiBUYXNrPEE+IHtcbiAgcmV0dXJuIChtYSkgPT4gKCkgPT5cbiAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihtYSkudGhlbihyZXNvbHZlKVxuICAgICAgfSwgbWlsbGlzKVxuICAgIH0pXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5vbi1waXBlYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY29uc3QgX21hcDogRnVuY3RvcjE8VVJJPlsnbWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIG1hcChmKSlcbmNvbnN0IF9hcFBhcjogQXBwbHkxPFVSST5bJ2FwJ10gPSAoZmFiLCBmYSkgPT4gcGlwZShmYWIsIGFwKGZhKSlcbmNvbnN0IF9hcFNlcTogQXBwbHkxPFVSST5bJ2FwJ10gPSAoZmFiLCBmYSkgPT5cbiAgcGlwZShcbiAgICBmYWIsXG4gICAgY2hhaW4oKGYpID0+IHBpcGUoZmEsIG1hcChmKSkpXG4gIClcbmNvbnN0IF9jaGFpbjogQ2hhaW4xPFVSST5bJ2NoYWluJ10gPSAobWEsIGYpID0+IHBpcGUobWEsIGNoYWluKGYpKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB0eXBlIGNsYXNzIG1lbWJlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBgbWFwYCBjYW4gYmUgdXNlZCB0byB0dXJuIGZ1bmN0aW9ucyBgKGE6IEEpID0+IEJgIGludG8gZnVuY3Rpb25zIGAoZmE6IEY8QT4pID0+IEY8Qj5gIHdob3NlIGFyZ3VtZW50IGFuZCByZXR1cm4gdHlwZXNcbiAqIHVzZSB0aGUgdHlwZSBjb25zdHJ1Y3RvciBgRmAgdG8gcmVwcmVzZW50IHNvbWUgY29tcHV0YXRpb25hbCBjb250ZXh0LlxuICpcbiAqIEBjYXRlZ29yeSBGdW5jdG9yXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcDogPEEsIEI+KGY6IChhOiBBKSA9PiBCKSA9PiAoZmE6IFRhc2s8QT4pID0+IFRhc2s8Qj4gPSAoZikgPT4gKGZhKSA9PiAoKSA9PlxuICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZhKS50aGVuKGYpXG5cbi8qKlxuICogQXBwbHkgYSBmdW5jdGlvbiB0byBhbiBhcmd1bWVudCB1bmRlciBhIHR5cGUgY29uc3RydWN0b3IuXG4gKlxuICogQGNhdGVnb3J5IEFwcGx5XG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwOiA8QT4oZmE6IFRhc2s8QT4pID0+IDxCPihmYWI6IFRhc2s8KGE6IEEpID0+IEI+KSA9PiBUYXNrPEI+ID0gKGZhKSA9PiAoZmFiKSA9PiAoKSA9PlxuICBQcm9taXNlLmFsbChbUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmYWIpLCBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZhKV0pLnRoZW4oKFtmLCBhXSkgPT4gZihhKSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgUG9pbnRlZFxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBvZjogUG9pbnRlZDE8VVJJPlsnb2YnXSA9IChhKSA9PiAoKSA9PiBQcm9taXNlLnJlc29sdmUoYSlcblxuLyoqXG4gKiBDb21wb3NlcyBjb21wdXRhdGlvbnMgaW4gc2VxdWVuY2UsIHVzaW5nIHRoZSByZXR1cm4gdmFsdWUgb2Ygb25lIGNvbXB1dGF0aW9uIHRvIGRldGVybWluZSB0aGUgbmV4dCBjb21wdXRhdGlvbi5cbiAqXG4gKiBAY2F0ZWdvcnkgTW9uYWRcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW46IDxBLCBCPihmOiAoYTogQSkgPT4gVGFzazxCPikgPT4gKG1hOiBUYXNrPEE+KSA9PiBUYXNrPEI+ID0gKGYpID0+IChtYSkgPT4gKCkgPT5cbiAgUHJvbWlzZS5yZXNvbHZlKClcbiAgICAudGhlbihtYSlcbiAgICAudGhlbigoYSkgPT4gZihhKSgpKVxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXR0ZW46IDxBPihtbWE6IFRhc2s8VGFzazxBPj4pID0+IFRhc2s8QT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluKGlkZW50aXR5KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnN0YW5jZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFVSSSA9ICdUYXNrJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBVUkkgPSB0eXBlb2YgVVJJXG5cbmRlY2xhcmUgbW9kdWxlICcuL0hLVCcge1xuICBpbnRlcmZhY2UgVVJJdG9LaW5kPEE+IHtcbiAgICByZWFkb25seSBbVVJJXTogVGFzazxBPlxuICB9XG59XG5cbi8qKlxuICogTW9ub2lkIHJldHVybmluZyB0aGUgZmlyc3QgY29tcGxldGVkIHRhc2suXG4gKlxuICogTm90ZTogdXNlcyBgUHJvbWlzZS5yYWNlYCBpbnRlcm5hbGx5LlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBUIGZyb20gJ2ZwLXRzL1Rhc2snXG4gKlxuICogYXN5bmMgZnVuY3Rpb24gdGVzdCgpIHtcbiAqICAgY29uc3QgUyA9IFQuZ2V0UmFjZU1vbm9pZDxzdHJpbmc+KClcbiAqICAgY29uc3QgZmEgPSBULmRlbGF5KDIwKShULm9mKCdhJykpXG4gKiAgIGNvbnN0IGZiID0gVC5kZWxheSgxMCkoVC5vZignYicpKVxuICogICBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKGF3YWl0IFMuY29uY2F0KGZhLCBmYikoKSwgJ2InKVxuICogfVxuICpcbiAqIHRlc3QoKVxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFjZU1vbm9pZDxBID0gbmV2ZXI+KCk6IE1vbm9pZDxUYXNrPEE+PiB7XG4gIHJldHVybiB7XG4gICAgY29uY2F0OiAoeCwgeSkgPT4gKCkgPT4gUHJvbWlzZS5yYWNlKFtQcm9taXNlLnJlc29sdmUoKS50aGVuKHgpLCBQcm9taXNlLnJlc29sdmUoKS50aGVuKHkpXSksXG4gICAgZW1wdHk6IG5ldmVyXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZ1bmN0b3I6IEZ1bmN0b3IxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwXG59XG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYEZ1bmN0b3JgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhcCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZmxhcF8oRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBQb2ludGVkOiBQb2ludGVkMTxVUkk+ID0ge1xuICBVUkksXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbHlQYXI6IEFwcGx5MTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFBhclxufVxuXG4vKipcbiAqIENvbWJpbmUgdHdvIGVmZmVjdGZ1bCBhY3Rpb25zLCBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYEFwcGx5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXBGaXJzdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBGaXJzdF8oQXBwbHlQYXIpXG5cbi8qKlxuICogQ29tYmluZSB0d28gZWZmZWN0ZnVsIGFjdGlvbnMsIGtlZXBpbmcgb25seSB0aGUgcmVzdWx0IG9mIHRoZSBzZWNvbmQuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYEFwcGx5YC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgYXBTZWNvbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU2Vjb25kXyhBcHBseVBhcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aXZlUGFyOiBBcHBsaWNhdGl2ZTE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBQYXIsXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbHlTZXE6IEFwcGx5MTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFNlcVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjcuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbGljYXRpdmVTZXE6IEFwcGxpY2F0aXZlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFNlcSxcbiAgb2Zcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBDaGFpbjogQ2hhaW4xPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwUGFyLFxuICBjaGFpbjogX2NoYWluXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgTW9uYWQ6IE1vbmFkMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgb2YsXG4gIGFwOiBfYXBQYXIsXG4gIGNoYWluOiBfY2hhaW5cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZElPOiBNb25hZElPMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgb2YsXG4gIGFwOiBfYXBQYXIsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGZyb21JT1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGcm9tVGFza1xuICogQHNpbmNlIDIuNy4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZnJvbVRhc2s6IEZyb21UYXNrMTxVUkk+Wydmcm9tVGFzayddID0gaWRlbnRpdHlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZFRhc2s6IE1vbmFkVGFzazE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG9mLFxuICBhcDogX2FwUGFyLFxuICBjaGFpbjogX2NoYWluLFxuICBmcm9tSU8sXG4gIGZyb21UYXNrXG59XG5cbi8qKlxuICogQ29tcG9zZXMgY29tcHV0YXRpb25zIGluIHNlcXVlbmNlLCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIG9mIG9uZSBjb21wdXRhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5leHQgY29tcHV0YXRpb24gYW5kXG4gKiBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdF8oQ2hhaW4pXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgRnJvbUlPOiBGcm9tSU8xPFVSST4gPSB7XG4gIFVSSSxcbiAgZnJvbUlPXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21JT0sgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21JT0tfKEZyb21JTylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjQuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5JT0sgPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluSU9LXyhGcm9tSU8sIENoYWluKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdElPSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdElPS18oRnJvbUlPLCBDaGFpbilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tVGFzazogRnJvbVRhc2sxPFVSST4gPSB7XG4gIFVSSSxcbiAgZnJvbUlPLFxuICBmcm9tVGFza1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEEgYFRhc2tgIHRoYXQgbmV2ZXIgY29tcGxldGVzLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbmV2ZXI6IFRhc2s8bmV2ZXI+ID0gKCkgPT4gbmV3IFByb21pc2UoKF8pID0+IHVuZGVmaW5lZClcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZG8gbm90YXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IERvOiBUYXNrPHt9PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgb2YoXy5lbXB0eVJlY29yZClcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmRUbyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZFRvXyhGdW5jdG9yKVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYmluZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZF8oQ2hhaW4pXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHBpcGVhYmxlIHNlcXVlbmNlIFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwUyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBTXyhBcHBseVBhcilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gc2VxdWVuY2UgVFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwVDogVGFzazxyZWFkb25seSBbXT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWFkb25seUFycmF5KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBhcnJheSB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5Tm9uRW1wdHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZVBhcilgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4ID0gPEEsIEI+KGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBUYXNrPEI+KSA9PiAoXG4gIGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT5cbik6IFRhc2s8UmVhZG9ubHlOb25FbXB0eUFycmF5PEI+PiA9PiAoKSA9PiBQcm9taXNlLmFsbChhcy5tYXAoKGEsIGkpID0+IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gZihpLCBhKSgpKSkpIGFzIGFueVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5QXJyYXkjdHJhdmVyc2VXaXRoSW5kZXgoQXBwbGljYXRpdmVQYXIpYC5cbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXggPSA8QSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBUYXNrPEI+XG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBUYXNrPFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IGcgPSB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChmKVxuICByZXR1cm4gKGFzKSA9PiAoXy5pc05vbkVtcHR5KGFzKSA/IGcoYXMpIDogQXBUKVxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5Tm9uRW1wdHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZVNlcSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4U2VxID0gPEEsIEI+KGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBUYXNrPEI+KSA9PiAoXG4gIGFzOiBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT5cbik6IFRhc2s8UmVhZG9ubHlOb25FbXB0eUFycmF5PEI+PiA9PiAoKSA9PlxuICBfLnRhaWwoYXMpLnJlZHVjZTxQcm9taXNlPE5vbkVtcHR5QXJyYXk8Qj4+PihcbiAgICAoYWNjLCBhLCBpKSA9PlxuICAgICAgYWNjLnRoZW4oKGJzKSA9PlxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgIC50aGVuKGYoaSArIDEsIGEpKVxuICAgICAgICAgIC50aGVuKChiKSA9PiB7XG4gICAgICAgICAgICBicy5wdXNoKGIpXG4gICAgICAgICAgICByZXR1cm4gYnNcbiAgICAgICAgICB9KVxuICAgICAgKSxcbiAgICBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgLnRoZW4oZigwLCBfLmhlYWQoYXMpKSlcbiAgICAgIC50aGVuKF8uc2luZ2xldG9uKVxuICApXG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBgUmVhZG9ubHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZVNlcSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleFNlcSA9IDxBLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFRhc2s8Qj5cbik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFRhc2s8UmVhZG9ubHlBcnJheTxCPj4pID0+IHtcbiAgY29uc3QgZyA9IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4U2VxKGYpXG4gIHJldHVybiAoYXMpID0+IChfLmlzTm9uRW1wdHkoYXMpID8gZyhhcykgOiBBcFQpXG59XG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZUFycmF5V2l0aEluZGV4OiA8QSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBUYXNrPEI+XG4pID0+IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gVGFzazxSZWFkb25seUFycmF5PEI+PiA9IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleFxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VBcnJheSA9IDxBLCBCPihmOiAoYTogQSkgPT4gVGFzazxCPik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFRhc2s8UmVhZG9ubHlBcnJheTxCPj4pID0+XG4gIHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleCgoXywgYSkgPT4gZihhKSlcblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNlcXVlbmNlQXJyYXk6IDxBPihhcnI6IFJlYWRvbmx5QXJyYXk8VGFzazxBPj4pID0+IFRhc2s8UmVhZG9ubHlBcnJheTxBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIHRyYXZlcnNlQXJyYXkoaWRlbnRpdHkpXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVNlcUFycmF5V2l0aEluZGV4OiA8QSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBUYXNrPEI+XG4pID0+IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gVGFzazxSZWFkb25seUFycmF5PEI+PiA9IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleFNlcVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VTZXFBcnJheSA9IDxBLCBCPihmOiAoYTogQSkgPT4gVGFzazxCPik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFRhc2s8UmVhZG9ubHlBcnJheTxCPj4pID0+XG4gIHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleFNlcSgoXywgYSkgPT4gZihhKSlcblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNlcXVlbmNlU2VxQXJyYXk6IDxBPihhcnI6IFJlYWRvbmx5QXJyYXk8VGFzazxBPj4pID0+IFRhc2s8UmVhZG9ubHlBcnJheTxBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIHRyYXZlcnNlU2VxQXJyYXkoaWRlbnRpdHkpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlcHJlY2F0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gdHNsaW50OmRpc2FibGU6IGRlcHJlY2F0aW9uXG5cbi8qKlxuICogVXNlIHNtYWxsLCBzcGVjaWZpYyBpbnN0YW5jZXMgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCB0YXNrOiBNb25hZDE8VVJJPiAmIE1vbmFkVGFzazE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG9mLFxuICBhcDogX2FwUGFyLFxuICBjaGFpbjogX2NoYWluLFxuICBmcm9tSU8sXG4gIGZyb21UYXNrXG59XG5cbi8qKlxuICogVXNlIHNtYWxsLCBzcGVjaWZpYyBpbnN0YW5jZXMgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCB0YXNrU2VxOiB0eXBlb2YgdGFzayA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG9mLFxuICBhcDogX2FwU2VxLFxuICBjaGFpbjogX2NoYWluLFxuICBmcm9tSU8sXG4gIGZyb21UYXNrXG59XG5cbi8qKlxuICogVXNlIFtgZ2V0QXBwbHlTZW1pZ3JvdXBgXSguL0FwcGx5LnRzLmh0bWwjZ2V0YXBwbHlzZW1pZ3JvdXApIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0U2VtaWdyb3VwOiA8QT4oUzogU2VtaWdyb3VwPEE+KSA9PiBTZW1pZ3JvdXA8VGFzazxBPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIGdldEFwcGx5U2VtaWdyb3VwXyhBcHBseVNlcSlcblxuLyoqXG4gKiBVc2UgW2BnZXRBcHBsaWNhdGl2ZU1vbm9pZGBdKC4vQXBwbGljYXRpdmUudHMuaHRtbCNnZXRhcHBsaWNhdGl2ZW1vbm9pZCkgaW5zdGVhZC5cbiAqXG4gKiBMaWZ0IGEgbW9ub2lkIGludG8gJ1Rhc2snLCB0aGUgaW5uZXIgdmFsdWVzIGFyZSBjb25jYXRlbmF0ZWQgdXNpbmcgdGhlIHByb3ZpZGVkIGBNb25vaWRgLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE1vbm9pZDogPEE+KE06IE1vbm9pZDxBPikgPT4gTW9ub2lkPFRhc2s8QT4+ID1cbiAgLyojX19QVVJFX18qL1xuICBnZXRBcHBsaWNhdGl2ZU1vbm9pZChBcHBsaWNhdGl2ZVNlcSlcbiJdfQ==
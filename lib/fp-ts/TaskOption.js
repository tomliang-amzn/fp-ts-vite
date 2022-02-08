"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zero = exports.tryCatchK = exports.tryCatch = exports.traverseSeqArrayWithIndex = exports.traverseSeqArray = exports.traverseReadonlyNonEmptyArrayWithIndexSeq = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndexSeq = exports.traverseReadonlyArrayWithIndex = exports.traverseArrayWithIndex = exports.traverseArray = exports.some = exports.sequenceSeqArray = exports.sequenceArray = exports.separate = exports.partitionMap = exports.partition = exports.of = exports.none = exports.matchW = exports.matchEW = exports.matchE = exports.match = exports.map = exports.guard = exports.getOrElseW = exports.getOrElse = exports.fromTaskK = exports.fromTaskEither = exports.fromTask = exports.fromPredicate = exports.fromOptionK = exports.fromOption = exports.fromNullableK = exports.fromNullable = exports.fromIOK = exports.fromIO = exports.fromEither = exports.foldW = exports.fold = exports.flatten = exports.flap = exports.filterMap = exports.filter = exports.compact = exports.chainTaskK = exports.chainOptionK = exports.chainNullableK = exports.chainIOK = exports.chainFirstTaskK = exports.chainFirstIOK = exports.chainFirst = exports.chain = exports.bindTo = exports.bind = exports.apSecond = exports.apS = exports.apFirst = exports.ap = exports.altW = exports.alt = exports.Zero = exports.Pointed = exports.MonadTask = exports.MonadIO = exports.Monad = exports.Functor = exports.FromTask = exports.FromIO = exports.FromEither = exports.Filterable = exports.Do = exports.Compactable = exports.Chain = exports.ApplySeq = exports.ApplyPar = exports.ApplicativeSeq = exports.ApplicativePar = exports.ApT = exports.Alternative = exports.Alt = void 0;

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _Compactable = require("./Compactable");

var _Filterable = require("./Filterable");

var _FromIO = require("./FromIO");

var _FromTask = require("./FromTask");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var O = _interopRequireWildcard(require("./Option"));

var OT = _interopRequireWildcard(require("./OptionT"));

var T = _interopRequireWildcard(require("./Task"));

var _Zero = require("./Zero");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @since 2.10.0
 */
var Task = T.Task;
var Option = O.Option; // -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 2.10.0
 */

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 2.10.0
 */
var some = /*#__PURE__*/OT.some(T.Pointed);
/**
 * @category constructors
 * @since 2.10.0
 */

exports.some = some;
var fromPredicate = /*#__PURE__*/OT.fromPredicate(T.Pointed); // -------------------------------------------------------------------------------------
// natural transformations
// -------------------------------------------------------------------------------------

/**
 * @category natural transformations
 * @since 2.10.0
 */

exports.fromPredicate = fromPredicate;
var fromOption = T.of;
/**
 * @category natural transformations
 * @since 2.10.0
 */

exports.fromOption = fromOption;
var fromEither = /*#__PURE__*/OT.fromEither(T.Pointed);
/**
 * @category natural transformations
 * @since 2.10.0
 */

exports.fromEither = fromEither;

var fromIO = function fromIO(ma) {
  return fromTask(T.fromIO(ma));
};
/**
 * @category natural transformations
 * @since 2.10.0
 */


exports.fromIO = fromIO;
var fromTask = /*#__PURE__*/OT.fromF(T.Functor);
/**
 * @category natural transformations
 * @since 2.11.0
 */

exports.fromTask = fromTask;
var fromTaskEither = /*#__PURE__*/T.map(O.fromEither); // -------------------------------------------------------------------------------------
// destructors
// -------------------------------------------------------------------------------------

/**
 * @category destructors
 * @since 2.10.0
 */

exports.fromTaskEither = fromTaskEither;
var match = /*#__PURE__*/OT.match(T.Functor);
/**
 * Less strict version of [`match`](#match).
 *
 * @category destructors
 * @since 2.10.0
 */

exports.match = match;
var matchW = match;
/**
 * @category destructors
 * @since 2.10.0
 */

exports.matchW = matchW;
var matchE = /*#__PURE__*/OT.matchE(T.Chain);
/**
 * Alias of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.10.0
 */

exports.matchE = matchE;
var fold = matchE;
/**
 * Less strict version of [`matchE`](#matche).
 *
 * @category destructors
 * @since 2.10.0
 */

exports.fold = fold;
var matchEW = matchE;
/**
 * Alias of [`matchEW`](#matchew).
 *
 * @category destructors
 * @since 2.10.0
 */

exports.matchEW = matchEW;
var foldW = matchEW;
/**
 * @category destructors
 * @since 2.10.0
 */

exports.foldW = foldW;
var getOrElse = /*#__PURE__*/OT.getOrElse(T.Monad);
/**
 * Less strict version of [`getOrElse`](#getorelse).
 *
 * @category destructors
 * @since 2.10.0
 */

exports.getOrElse = getOrElse;
var getOrElseW = getOrElse; // -------------------------------------------------------------------------------------
// interop
// -------------------------------------------------------------------------------------

/**
 * @category interop
 * @since 2.10.0
 */

exports.getOrElseW = getOrElseW;
var fromNullable = /*#__PURE__*/OT.fromNullable(T.Pointed);
/**
 * Transforms a `Promise` that may reject to a `Promise` that never rejects and returns an `Option` instead.
 *
 * Note: `f` should never `throw` errors, they are not caught.
 *
 * See also [`tryCatchK`](#trycatchk).
 *
 * @category interop
 * @since 2.10.0
 */

exports.fromNullable = fromNullable;

var tryCatch = function tryCatch(f) {
  return function () {
    return f().then(function (a) {
      return O.some(a);
    }, function () {
      return O.none;
    });
  };
};
/**
 * Converts a function returning a `Promise` to one returning a `TaskOption`.
 *
 * @category interop
 * @since 2.10.0
 */


exports.tryCatch = tryCatch;

var tryCatchK = function tryCatchK(f) {
  return function () {
    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }

    return tryCatch(function () {
      return f.apply(void 0, a);
    });
  };
};
/**
 * @category interop
 * @since 2.10.0
 */


exports.tryCatchK = tryCatchK;
var fromNullableK = /*#__PURE__*/OT.fromNullableK(T.Pointed);
/**
 * @category interop
 * @since 2.10.0
 */

exports.fromNullableK = fromNullableK;
var chainNullableK = /*#__PURE__*/OT.chainNullableK(T.Monad); // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 * @since 2.10.0
 */

exports.chainNullableK = chainNullableK;
var fromOptionK = /*#__PURE__*/OT.fromOptionK(T.Pointed);
/**
 * @category combinators
 * @since 2.10.0
 */

exports.fromOptionK = fromOptionK;
var chainOptionK = /*#__PURE__*/OT.chainOptionK(T.Monad); // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.10.0
 */

exports.chainOptionK = chainOptionK;
var map = /*#__PURE__*/OT.map(T.Functor);
/**
 * @category Apply
 * @since 2.10.0
 */

exports.map = map;
var ap = /*#__PURE__*/OT.ap(T.ApplyPar);
/**
 * @category Pointed
 * @since 2.10.0
 */

exports.ap = ap;
var of = some;
/**
 * @category Monad
 * @since 2.10.0
 */

exports.of = of;
var chain = /*#__PURE__*/OT.chain(T.Monad);
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.10.0
 */

exports.chain = chain;
var flatten = /*#__PURE__*/chain(_function.identity);
/**
 * @category Alt
 * @since 2.10.0
 */

exports.flatten = flatten;
var alt = /*#__PURE__*/OT.alt(T.Monad);
/**
 * Less strict version of [`alt`](#alt).
 *
 * @category Alt
 * @since 2.10.0
 */

exports.alt = alt;
var altW = alt;
/**
 * @category Zero
 * @since 2.10.0
 */

exports.altW = altW;
var zero = /*#__PURE__*/OT.zero(T.Pointed);
/**
 * @category constructors
 * @since 2.10.0
 */

exports.zero = zero;
var none = /*#__PURE__*/zero();
/**
 * @category Compactable
 * @since 2.10.0
 */

exports.none = none;
var compact = /*#__PURE__*/(0, _Compactable.compact)(T.Functor, O.Compactable);
/**
 * @category Compactable
 * @since 2.10.0
 */

exports.compact = compact;
var separate = /*#__PURE__*/(0, _Compactable.separate)(T.Functor, O.Compactable, O.Functor);
/**
 * @category Filterable
 * @since 2.10.0
 */

exports.separate = separate;
var filter = /*#__PURE__*/(0, _Filterable.filter)(T.Functor, O.Filterable);
/**
 * @category Filterable
 * @since 2.10.0
 */

exports.filter = filter;
var filterMap = /*#__PURE__*/(0, _Filterable.filterMap)(T.Functor, O.Filterable);
/**
 * @category Filterable
 * @since 2.10.0
 */

exports.filterMap = filterMap;
var partition = /*#__PURE__*/(0, _Filterable.partition)(T.Functor, O.Filterable);
/**
 * @category Filterable
 * @since 2.10.0
 */

exports.partition = partition;
var partitionMap = /*#__PURE__*/(0, _Filterable.partitionMap)(T.Functor, O.Filterable); // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

exports.partitionMap = partitionMap;

var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
};

var _ap = function _ap(fab, fa) {
  return (0, _function.pipe)(fab, ap(fa));
};
/* istanbul ignore next */


var _chain = function _chain(ma, f) {
  return (0, _function.pipe)(ma, chain(f));
};
/* istanbul ignore next */


var _alt = function _alt(fa, that) {
  return (0, _function.pipe)(fa, alt(that));
};
/* istanbul ignore next */


var _filter = function _filter(fa, predicate) {
  return (0, _function.pipe)(fa, filter(predicate));
};
/* istanbul ignore next */


var _filterMap = function _filterMap(fa, f) {
  return (0, _function.pipe)(fa, filterMap(f));
};
/* istanbul ignore next */


var _partition = function _partition(fa, predicate) {
  return (0, _function.pipe)(fa, partition(predicate));
};
/* istanbul ignore next */


var _partitionMap = function _partitionMap(fa, f) {
  return (0, _function.pipe)(fa, partitionMap(f));
};
/**
 * @category instances
 * @since 2.10.0
 */


var URI = 'TaskOption';
/**
 * @category instances
 * @since 2.10.0
 */

/**
 * @category instances
 * @since 2.10.0
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
  ap: _ap
};
/**
 * Combine two effectful actions, keeping only the result of the first.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.10.0
 */

exports.ApplyPar = ApplyPar;
var apFirst = /*#__PURE__*/(0, _Apply.apFirst)(ApplyPar);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.10.0
 */

exports.apFirst = apFirst;
var apSecond = /*#__PURE__*/(0, _Apply.apSecond)(ApplyPar);
/**
 * @category instances
 * @since 2.10.0
 */

exports.apSecond = apSecond;
var ApplicativePar = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of
};
exports.ApplicativePar = ApplicativePar;

var _apSeq = function _apSeq(fab, fa) {
  return (0, _function.pipe)(fab, chain(function (f) {
    return (0, _function.pipe)(fa, map(f));
  }));
};
/**
 * @category instances
 * @since 2.10.0
 */


var ApplySeq = {
  URI: URI,
  map: _map,
  ap: _apSeq
};
/**
 * @category instances
 * @since 2.10.0
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
  ap: _ap,
  chain: _chain
};
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation and
 * keeping only the result of the first.
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.10.0
 */

exports.Chain = Chain;
var chainFirst = /*#__PURE__*/(0, _Chain.chainFirst)(Chain);
/**
 * @category instances
 * @since 2.10.0
 */

exports.chainFirst = chainFirst;
var Alt = {
  URI: URI,
  map: _map,
  alt: _alt
};
/**
 * @category instances
 * @since 2.11.0
 */

exports.Alt = Alt;
var Zero = {
  URI: URI,
  zero: zero
};
/**
 * @category constructors
 * @since 2.11.0
 */

exports.Zero = Zero;
var guard = /*#__PURE__*/(0, _Zero.guard)(Zero, Pointed);
/**
 * @category instances
 * @since 2.10.0
 */

exports.guard = guard;
var Alternative = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of,
  alt: _alt,
  zero: zero
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Alternative = Alternative;
var Monad = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of,
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
  ap: _ap,
  of: of,
  chain: _chain,
  fromIO: fromIO
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.MonadIO = MonadIO;
var MonadTask = {
  URI: URI,
  map: _map,
  ap: _ap,
  of: of,
  chain: _chain,
  fromIO: fromIO,
  fromTask: fromTask
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.MonadTask = MonadTask;
var Compactable = {
  URI: URI,
  compact: compact,
  separate: separate
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Compactable = Compactable;
var Filterable = {
  URI: URI,
  map: _map,
  compact: compact,
  separate: separate,
  filter: _filter,
  filterMap: _filterMap,
  partition: _partition,
  partitionMap: _partitionMap
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.Filterable = Filterable;
var FromIO = {
  URI: URI,
  fromIO: fromIO
};
/**
 * @category combinators
 * @since 2.10.0
 */

exports.FromIO = FromIO;
var fromIOK = /*#__PURE__*/(0, _FromIO.fromIOK)(FromIO);
/**
 * @category combinators
 * @since 2.10.0
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
 * @since 2.11.0
 */

exports.chainFirstIOK = chainFirstIOK;
var FromEither = {
  URI: URI,
  fromEither: fromEither
};
/**
 * @category instances
 * @since 2.10.0
 */

exports.FromEither = FromEither;
var FromTask = {
  URI: URI,
  fromIO: fromIO,
  fromTask: fromTask
};
/**
 * @category combinators
 * @since 2.10.0
 */

exports.FromTask = FromTask;
var fromTaskK = /*#__PURE__*/(0, _FromTask.fromTaskK)(FromTask);
/**
 * @category combinators
 * @since 2.10.0
 */

exports.fromTaskK = fromTaskK;
var chainTaskK = /*#__PURE__*/(0, _FromTask.chainTaskK)(FromTask, Chain);
/**
 * @category combinators
 * @since 2.10.0
 */

exports.chainTaskK = chainTaskK;
var chainFirstTaskK = /*#__PURE__*/(0, _FromTask.chainFirstTaskK)(FromTask, Chain); // -------------------------------------------------------------------------------------
// do notation
// -------------------------------------------------------------------------------------

/**
 * @since 2.10.0
 */

exports.chainFirstTaskK = chainFirstTaskK;
var Do = /*#__PURE__*/of(_.emptyRecord);
/**
 * @since 2.10.0
 */

exports.Do = Do;
var bindTo = /*#__PURE__*/(0, _Functor.bindTo)(Functor);
/**
 * @since 2.10.0
 */

exports.bindTo = bindTo;
var bind = /*#__PURE__*/(0, _Chain.bind)(Chain); // -------------------------------------------------------------------------------------
// sequence S
// -------------------------------------------------------------------------------------

/**
 * @since 2.10.0
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
  return (0, _function.flow)(T.traverseReadonlyNonEmptyArrayWithIndex(f), T.map(O.traverseReadonlyNonEmptyArrayWithIndex(_function.SK)));
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
        return acc.then(function (obs) {
          return _.isNone(obs) ? acc : f(i + 1, a)().then(function (ob) {
            if (_.isNone(ob)) {
              return ob;
            }

            obs.value.push(ob.value);
            return obs;
          });
        });
      }, f(0, _.head(as))().then(O.map(_.singleton)));
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
 * @since 2.10.0
 */


exports.traverseReadonlyArrayWithIndexSeq = traverseReadonlyArrayWithIndexSeq;
var traverseArrayWithIndex = traverseReadonlyArrayWithIndex;
/**
 * @since 2.10.0
 */

exports.traverseArrayWithIndex = traverseArrayWithIndex;

var traverseArray = function traverseArray(f) {
  return traverseReadonlyArrayWithIndex(function (_, a) {
    return f(a);
  });
};
/**
 * @since 2.10.0
 */


exports.traverseArray = traverseArray;
var sequenceArray = /*#__PURE__*/traverseArray(_function.identity);
/**
 * @since 2.10.0
 */

exports.sequenceArray = sequenceArray;
var traverseSeqArrayWithIndex = traverseReadonlyArrayWithIndexSeq;
/**
 * @since 2.10.0
 */

exports.traverseSeqArrayWithIndex = traverseSeqArrayWithIndex;

var traverseSeqArray = function traverseSeqArray(f) {
  return traverseReadonlyArrayWithIndexSeq(function (_, a) {
    return f(a);
  });
};
/**
 * @since 2.10.0
 */


exports.traverseSeqArray = traverseSeqArray;
var sequenceSeqArray = /*#__PURE__*/traverseSeqArray(_function.identity); // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation

exports.sequenceSeqArray = sequenceSeqArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9UYXNrT3B0aW9uLnRzIl0sIm5hbWVzIjpbIlRhc2siLCJUIiwiT3B0aW9uIiwiTyIsInNvbWUiLCJPVCIsIlBvaW50ZWQiLCJmcm9tUHJlZGljYXRlIiwiZnJvbU9wdGlvbiIsIm9mIiwiZnJvbUVpdGhlciIsImZyb21JTyIsIm1hIiwiZnJvbVRhc2siLCJmcm9tRiIsIkZ1bmN0b3IiLCJmcm9tVGFza0VpdGhlciIsIm1hcCIsIm1hdGNoIiwibWF0Y2hXIiwibWF0Y2hFIiwiQ2hhaW4iLCJmb2xkIiwibWF0Y2hFVyIsImZvbGRXIiwiZ2V0T3JFbHNlIiwiTW9uYWQiLCJnZXRPckVsc2VXIiwiZnJvbU51bGxhYmxlIiwidHJ5Q2F0Y2giLCJmIiwidGhlbiIsImEiLCJub25lIiwidHJ5Q2F0Y2hLIiwiZnJvbU51bGxhYmxlSyIsImNoYWluTnVsbGFibGVLIiwiZnJvbU9wdGlvbksiLCJjaGFpbk9wdGlvbksiLCJhcCIsIkFwcGx5UGFyIiwiY2hhaW4iLCJmbGF0dGVuIiwiaWRlbnRpdHkiLCJhbHQiLCJhbHRXIiwiemVybyIsImNvbXBhY3QiLCJDb21wYWN0YWJsZSIsInNlcGFyYXRlIiwiZmlsdGVyIiwiRmlsdGVyYWJsZSIsImZpbHRlck1hcCIsInBhcnRpdGlvbiIsInBhcnRpdGlvbk1hcCIsIl9tYXAiLCJmYSIsIl9hcCIsImZhYiIsIl9jaGFpbiIsIl9hbHQiLCJ0aGF0IiwiX2ZpbHRlciIsInByZWRpY2F0ZSIsIl9maWx0ZXJNYXAiLCJfcGFydGl0aW9uIiwiX3BhcnRpdGlvbk1hcCIsIlVSSSIsImZsYXAiLCJhcEZpcnN0IiwiYXBTZWNvbmQiLCJBcHBsaWNhdGl2ZVBhciIsIl9hcFNlcSIsIkFwcGx5U2VxIiwiQXBwbGljYXRpdmVTZXEiLCJjaGFpbkZpcnN0IiwiQWx0IiwiWmVybyIsImd1YXJkIiwiQWx0ZXJuYXRpdmUiLCJNb25hZElPIiwiTW9uYWRUYXNrIiwiRnJvbUlPIiwiZnJvbUlPSyIsImNoYWluSU9LIiwiY2hhaW5GaXJzdElPSyIsIkZyb21FaXRoZXIiLCJGcm9tVGFzayIsImZyb21UYXNrSyIsImNoYWluVGFza0siLCJjaGFpbkZpcnN0VGFza0siLCJEbyIsIl8iLCJlbXB0eVJlY29yZCIsImJpbmRUbyIsImJpbmQiLCJhcFMiLCJBcFQiLCJlbXB0eVJlYWRvbmx5QXJyYXkiLCJ0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleCIsIlNLIiwidHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4IiwiZyIsImFzIiwiaXNOb25FbXB0eSIsInRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4U2VxIiwidGFpbCIsInJlZHVjZSIsImFjYyIsImkiLCJvYnMiLCJpc05vbmUiLCJvYiIsInZhbHVlIiwicHVzaCIsImhlYWQiLCJzaW5nbGV0b24iLCJ0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXhTZXEiLCJ0cmF2ZXJzZUFycmF5V2l0aEluZGV4IiwidHJhdmVyc2VBcnJheSIsInNlcXVlbmNlQXJyYXkiLCJ0cmF2ZXJzZVNlcUFycmF5V2l0aEluZGV4IiwidHJhdmVyc2VTZXFBcnJheSIsInNlcXVlbmNlU2VxQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BOztBQUNBOztBQUNBOztBQUVBOztBQVFBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQU1BOztBQUNBOztBQU1BOztBQUVBOzs7Ozs7QUExQ0E7QUFDQTtBQUNBO0lBMENPQSxJLEdBQU9DLEMsQ0FBRUQsSTtJQUNURSxNLEdBQVNDLEMsQ0FBRUQsTSxFQUVsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUUsSUFBZ0MsR0FDM0MsYUFDQUMsRUFBRSxDQUFDRCxJQUFILENBQVFILENBQUMsQ0FBQ0ssT0FBVixDQUZLO0FBSVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLGFBSVosR0FDQyxhQUNB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cEM7QUFBQSxHQUFQO0FBQ0QsQ0FMTTtBQU9QO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1xQixzQkFFOEMsR0FBR2pCLDhCQUZ2RDtBQUlQO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1rQixhQUU4QyxHQUFHLFNBRmpEQSxhQUVpRCxDQUFDekYsQ0FBRDtBQUFBLFNBQU91RSw4QkFBOEIsQ0FBQyxVQUFDVCxDQUFELEVBQUk1RCxDQUFKO0FBQUEsV0FBVUYsQ0FBQyxDQUFDRSxDQUFELENBQVg7QUFBQSxHQUFELENBQXJDO0FBQUEsQ0FGdkQ7QUFJUDtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNd0YsYUFBb0YsR0FDL0YsYUFDQUQsYUFBYSxDQUFDNUUsa0JBQUQsQ0FGUjtBQUlQO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTThFLHlCQUU4QyxHQUFHSixpQ0FGdkQ7QUFJUDtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNSyxnQkFFOEMsR0FBRyxTQUZqREEsZ0JBRWlELENBQUM1RixDQUFEO0FBQUEsU0FBT3VGLGlDQUFpQyxDQUFDLFVBQUN6QixDQUFELEVBQUk1RCxDQUFKO0FBQUEsV0FBVUYsQ0FBQyxDQUFDRSxDQUFELENBQVg7QUFBQSxHQUFELENBQXhDO0FBQUEsQ0FGdkQ7QUFJUDtBQUNBO0FBQ0E7Ozs7QUFDTyxJQUFNMkYsZ0JBQXVGLEdBQ2xHLGFBQ0FELGdCQUFnQixDQUFDL0Usa0JBQUQsQ0FGWCxDLENBSVA7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuaW1wb3J0IHsgQWx0MSB9IGZyb20gJy4vQWx0J1xuaW1wb3J0IHsgQWx0ZXJuYXRpdmUxIH0gZnJvbSAnLi9BbHRlcm5hdGl2ZSdcbmltcG9ydCB7IEFwcGxpY2F0aXZlMSB9IGZyb20gJy4vQXBwbGljYXRpdmUnXG5pbXBvcnQgeyBhcEZpcnN0IGFzIGFwRmlyc3RfLCBBcHBseTEsIGFwUyBhcyBhcFNfLCBhcFNlY29uZCBhcyBhcFNlY29uZF8gfSBmcm9tICcuL0FwcGx5J1xuaW1wb3J0IHsgYmluZCBhcyBiaW5kXywgQ2hhaW4xLCBjaGFpbkZpcnN0IGFzIGNoYWluRmlyc3RfIH0gZnJvbSAnLi9DaGFpbidcbmltcG9ydCB7IGNvbXBhY3QgYXMgY29tcGFjdF8sIENvbXBhY3RhYmxlMSwgc2VwYXJhdGUgYXMgc2VwYXJhdGVfIH0gZnJvbSAnLi9Db21wYWN0YWJsZSdcbmltcG9ydCB7IEVpdGhlciB9IGZyb20gJy4vRWl0aGVyJ1xuaW1wb3J0IHtcbiAgZmlsdGVyIGFzIGZpbHRlcl8sXG4gIEZpbHRlcmFibGUxLFxuICBmaWx0ZXJNYXAgYXMgZmlsdGVyTWFwXyxcbiAgcGFydGl0aW9uIGFzIHBhcnRpdGlvbl8sXG4gIHBhcnRpdGlvbk1hcCBhcyBwYXJ0aXRpb25NYXBfXG59IGZyb20gJy4vRmlsdGVyYWJsZSdcbmltcG9ydCB7IEZyb21FaXRoZXIxIH0gZnJvbSAnLi9Gcm9tRWl0aGVyJ1xuaW1wb3J0IHsgY2hhaW5GaXJzdElPSyBhcyBjaGFpbkZpcnN0SU9LXywgY2hhaW5JT0sgYXMgY2hhaW5JT0tfLCBGcm9tSU8xLCBmcm9tSU9LIGFzIGZyb21JT0tfIH0gZnJvbSAnLi9Gcm9tSU8nXG5pbXBvcnQge1xuICBjaGFpbkZpcnN0VGFza0sgYXMgY2hhaW5GaXJzdFRhc2tLXyxcbiAgY2hhaW5UYXNrSyBhcyBjaGFpblRhc2tLXyxcbiAgRnJvbVRhc2sxLFxuICBmcm9tVGFza0sgYXMgZnJvbVRhc2tLX1xufSBmcm9tICcuL0Zyb21UYXNrJ1xuaW1wb3J0IHsgZmxvdywgaWRlbnRpdHksIExhenksIHBpcGUsIFNLIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IGJpbmRUbyBhcyBiaW5kVG9fLCBmbGFwIGFzIGZsYXBfLCBGdW5jdG9yMSB9IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCAqIGFzIF8gZnJvbSAnLi9pbnRlcm5hbCdcbmltcG9ydCB7IE1vbmFkMSB9IGZyb20gJy4vTW9uYWQnXG5pbXBvcnQgeyBNb25hZElPMSB9IGZyb20gJy4vTW9uYWRJTydcbmltcG9ydCB7IE1vbmFkVGFzazEgfSBmcm9tICcuL01vbmFkVGFzaydcbmltcG9ydCB7IE5hdHVyYWxUcmFuc2Zvcm1hdGlvbjExLCBOYXR1cmFsVHJhbnNmb3JtYXRpb24yMSB9IGZyb20gJy4vTmF0dXJhbFRyYW5zZm9ybWF0aW9uJ1xuaW1wb3J0IHsgTm9uRW1wdHlBcnJheSB9IGZyb20gJy4vTm9uRW1wdHlBcnJheSdcbmltcG9ydCAqIGFzIE8gZnJvbSAnLi9PcHRpb24nXG5pbXBvcnQgKiBhcyBPVCBmcm9tICcuL09wdGlvblQnXG5pbXBvcnQgeyBQb2ludGVkMSB9IGZyb20gJy4vUG9pbnRlZCdcbmltcG9ydCB7IFByZWRpY2F0ZSB9IGZyb20gJy4vUHJlZGljYXRlJ1xuaW1wb3J0IHsgUmVhZG9ubHlOb25FbXB0eUFycmF5IH0gZnJvbSAnLi9SZWFkb25seU5vbkVtcHR5QXJyYXknXG5pbXBvcnQgeyBSZWZpbmVtZW50IH0gZnJvbSAnLi9SZWZpbmVtZW50J1xuaW1wb3J0IHsgU2VwYXJhdGVkIH0gZnJvbSAnLi9TZXBhcmF0ZWQnXG5pbXBvcnQgKiBhcyBUIGZyb20gJy4vVGFzaydcbmltcG9ydCB7IFVSSSBhcyBURVVSSSB9IGZyb20gJy4vVGFza0VpdGhlcidcbmltcG9ydCB7IFplcm8xLCBndWFyZCBhcyBndWFyZF8gfSBmcm9tICcuL1plcm8nXG5cbmltcG9ydCBUYXNrID0gVC5UYXNrXG5pbXBvcnQgT3B0aW9uID0gTy5PcHRpb25cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbW9kZWxcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgbW9kZWxcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUYXNrT3B0aW9uPEE+IGV4dGVuZHMgVGFzazxPcHRpb248QT4+IHt9XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbnN0cnVjdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNvbWU6IDxBPihhOiBBKSA9PiBUYXNrT3B0aW9uPEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBPVC5zb21lKFQuUG9pbnRlZClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tUHJlZGljYXRlOiB7XG4gIDxBLCBCIGV4dGVuZHMgQT4ocmVmaW5lbWVudDogUmVmaW5lbWVudDxBLCBCPik6IChhOiBBKSA9PiBUYXNrT3B0aW9uPEI+XG4gIDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IDxCIGV4dGVuZHMgQT4oYjogQikgPT4gVGFza09wdGlvbjxCPlxuICA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiAoYTogQSkgPT4gVGFza09wdGlvbjxBPlxufSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgT1QuZnJvbVByZWRpY2F0ZShULlBvaW50ZWQpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tT3B0aW9uOiBOYXR1cmFsVHJhbnNmb3JtYXRpb24xMTxPLlVSSSwgVVJJPiA9IFQub2ZcblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21FaXRoZXI6IEZyb21FaXRoZXIxPFVSST5bJ2Zyb21FaXRoZXInXSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgT1QuZnJvbUVpdGhlcihULlBvaW50ZWQpXG5cbi8qKlxuICogQGNhdGVnb3J5IG5hdHVyYWwgdHJhbnNmb3JtYXRpb25zXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tSU86IEZyb21JTzE8VVJJPlsnZnJvbUlPJ10gPSAobWEpID0+IGZyb21UYXNrKFQuZnJvbUlPKG1hKSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21UYXNrOiBGcm9tVGFzazE8VVJJPlsnZnJvbVRhc2snXSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgT1QuZnJvbUYoVC5GdW5jdG9yKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVRhc2tFaXRoZXI6IE5hdHVyYWxUcmFuc2Zvcm1hdGlvbjIxPFRFVVJJLCBVUkk+ID1cbiAgLyojX19QVVJFX18qL1xuICBULm1hcChPLmZyb21FaXRoZXIpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaDogPEIsIEE+KG9uTm9uZTogKCkgPT4gQiwgb25Tb21lOiAoYTogQSkgPT4gQikgPT4gKG1hOiBUYXNrT3B0aW9uPEE+KSA9PiBUYXNrPEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBPVC5tYXRjaChULkZ1bmN0b3IpXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYG1hdGNoYF0oI21hdGNoKS5cbiAqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoVzogPEIsIEEsIEM+KFxuICBvbk5vbmU6ICgpID0+IEIsXG4gIG9uU29tZTogKGE6IEEpID0+IENcbikgPT4gKG1hOiBUYXNrT3B0aW9uPEE+KSA9PiBUYXNrPEIgfCBDPiA9IG1hdGNoIGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hFOiA8QiwgQT4ob25Ob25lOiAoKSA9PiBUYXNrPEI+LCBvblNvbWU6IChhOiBBKSA9PiBUYXNrPEI+KSA9PiAobWE6IFRhc2tPcHRpb248QT4pID0+IFRhc2s8Qj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIE9ULm1hdGNoRShULkNoYWluKVxuXG4vKipcbiAqIEFsaWFzIG9mIFtgbWF0Y2hFYF0oI21hdGNoZSkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xkID0gbWF0Y2hFXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYG1hdGNoRWBdKCNtYXRjaGUpLlxuICpcbiAqIEBjYXRlZ29yeSBkZXN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hFVzogPEIsIEMsIEE+KFxuICBvbk5vbmU6ICgpID0+IFRhc2s8Qj4sXG4gIG9uU29tZTogKGE6IEEpID0+IFRhc2s8Qz5cbikgPT4gKG1hOiBUYXNrT3B0aW9uPEE+KSA9PiBUYXNrPEIgfCBDPiA9IG1hdGNoRSBhcyBhbnlcblxuLyoqXG4gKiBBbGlhcyBvZiBbYG1hdGNoRVdgXSgjbWF0Y2hldykuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xkVyA9IG1hdGNoRVdcblxuLyoqXG4gKiBAY2F0ZWdvcnkgZGVzdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yRWxzZTogPEE+KG9uTm9uZTogTGF6eTxUYXNrPEE+PikgPT4gKGZhOiBUYXNrT3B0aW9uPEE+KSA9PiBUYXNrPEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBPVC5nZXRPckVsc2UoVC5Nb25hZClcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgZ2V0T3JFbHNlYF0oI2dldG9yZWxzZSkuXG4gKlxuICogQGNhdGVnb3J5IGRlc3RydWN0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPckVsc2VXOiA8Qj4ob25Ob25lOiBMYXp5PFRhc2s8Qj4+KSA9PiA8QT4obWE6IFRhc2tPcHRpb248QT4pID0+IFRhc2s8QSB8IEI+ID0gZ2V0T3JFbHNlIGFzIGFueVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBpbnRlcm9wXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGludGVyb3BcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21OdWxsYWJsZTogPEE+KGE6IEEpID0+IFRhc2tPcHRpb248Tm9uTnVsbGFibGU8QT4+ID1cbiAgLyojX19QVVJFX18qL1xuICBPVC5mcm9tTnVsbGFibGUoVC5Qb2ludGVkKVxuXG4vKipcbiAqIFRyYW5zZm9ybXMgYSBgUHJvbWlzZWAgdGhhdCBtYXkgcmVqZWN0IHRvIGEgYFByb21pc2VgIHRoYXQgbmV2ZXIgcmVqZWN0cyBhbmQgcmV0dXJucyBhbiBgT3B0aW9uYCBpbnN0ZWFkLlxuICpcbiAqIE5vdGU6IGBmYCBzaG91bGQgbmV2ZXIgYHRocm93YCBlcnJvcnMsIHRoZXkgYXJlIG5vdCBjYXVnaHQuXG4gKlxuICogU2VlIGFsc28gW2B0cnlDYXRjaEtgXSgjdHJ5Y2F0Y2hrKS5cbiAqXG4gKiBAY2F0ZWdvcnkgaW50ZXJvcFxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgdHJ5Q2F0Y2ggPSA8QT4oZjogTGF6eTxQcm9taXNlPEE+Pik6IFRhc2tPcHRpb248QT4gPT4gKCkgPT5cbiAgZigpLnRoZW4oXG4gICAgKGEpID0+IE8uc29tZShhKSxcbiAgICAoKSA9PiBPLm5vbmVcbiAgKVxuXG4vKipcbiAqIENvbnZlcnRzIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGEgYFByb21pc2VgIHRvIG9uZSByZXR1cm5pbmcgYSBgVGFza09wdGlvbmAuXG4gKlxuICogQGNhdGVnb3J5IGludGVyb3BcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyeUNhdGNoSyA9IDxBIGV4dGVuZHMgUmVhZG9ubHlBcnJheTx1bmtub3duPiwgQj4oXG4gIGY6ICguLi5hOiBBKSA9PiBQcm9taXNlPEI+XG4pOiAoKC4uLmE6IEEpID0+IFRhc2tPcHRpb248Qj4pID0+ICguLi5hKSA9PiB0cnlDYXRjaCgoKSA9PiBmKC4uLmEpKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnRlcm9wXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tTnVsbGFibGVLOiA8QSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8dW5rbm93bj4sIEI+KFxuICBmOiAoLi4uYTogQSkgPT4gQiB8IG51bGwgfCB1bmRlZmluZWRcbikgPT4gKC4uLmE6IEEpID0+IFRhc2tPcHRpb248Tm9uTnVsbGFibGU8Qj4+ID1cbiAgLyojX19QVVJFX18qL1xuICBPVC5mcm9tTnVsbGFibGVLKFQuUG9pbnRlZClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW50ZXJvcFxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5OdWxsYWJsZUs6IDxBLCBCPihcbiAgZjogKGE6IEEpID0+IEIgfCBudWxsIHwgdW5kZWZpbmVkXG4pID0+IChtYTogVGFza09wdGlvbjxBPikgPT4gVGFza09wdGlvbjxOb25OdWxsYWJsZTxCPj4gPVxuICAvKiNfX1BVUkVfXyovXG4gIE9ULmNoYWluTnVsbGFibGVLKFQuTW9uYWQpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbWJpbmF0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tT3B0aW9uSzogPEEgZXh0ZW5kcyBSZWFkb25seUFycmF5PHVua25vd24+LCBCPihcbiAgZjogKC4uLmE6IEEpID0+IE9wdGlvbjxCPlxuKSA9PiAoLi4uYTogQSkgPT4gVGFza09wdGlvbjxCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgT1QuZnJvbU9wdGlvbksoVC5Qb2ludGVkKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5PcHRpb25LOiA8QSwgQj4oZjogKGE6IEEpID0+IE9wdGlvbjxCPikgPT4gKG1hOiBUYXNrT3B0aW9uPEE+KSA9PiBUYXNrT3B0aW9uPEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBPVC5jaGFpbk9wdGlvbksoVC5Nb25hZClcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gdHlwZSBjbGFzcyBtZW1iZXJzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogYG1hcGAgY2FuIGJlIHVzZWQgdG8gdHVybiBmdW5jdGlvbnMgYChhOiBBKSA9PiBCYCBpbnRvIGZ1bmN0aW9ucyBgKGZhOiBGPEE+KSA9PiBGPEI+YCB3aG9zZSBhcmd1bWVudCBhbmQgcmV0dXJuIHR5cGVzXG4gKiB1c2UgdGhlIHR5cGUgY29uc3RydWN0b3IgYEZgIHRvIHJlcHJlc2VudCBzb21lIGNvbXB1dGF0aW9uYWwgY29udGV4dC5cbiAqXG4gKiBAY2F0ZWdvcnkgRnVuY3RvclxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgbWFwOiA8QSwgQj4oZjogKGE6IEEpID0+IEIpID0+IChmYTogVGFza09wdGlvbjxBPikgPT4gVGFza09wdGlvbjxCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgT1QubWFwKFQuRnVuY3RvcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgQXBwbHlcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwOiA8QT4oZmE6IFRhc2tPcHRpb248QT4pID0+IDxCPihmYWI6IFRhc2tPcHRpb248KGE6IEEpID0+IEI+KSA9PiBUYXNrT3B0aW9uPEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBPVC5hcChULkFwcGx5UGFyKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBQb2ludGVkXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBvZjogUG9pbnRlZDE8VVJJPlsnb2YnXSA9IHNvbWVcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTW9uYWRcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluOiA8QSwgQj4oZjogKGE6IEEpID0+IFRhc2tPcHRpb248Qj4pID0+IChtYTogVGFza09wdGlvbjxBPikgPT4gVGFza09wdGlvbjxCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgT1QuY2hhaW4oVC5Nb25hZClcblxuLyoqXG4gKiBEZXJpdmFibGUgZnJvbSBgQ2hhaW5gLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmxhdHRlbjogPEE+KG1tYTogVGFza09wdGlvbjxUYXNrT3B0aW9uPEE+PikgPT4gVGFza09wdGlvbjxBPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW4oaWRlbnRpdHkpXG5cbi8qKlxuICogQGNhdGVnb3J5IEFsdFxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgYWx0OiA8QT4oc2Vjb25kOiBMYXp5PFRhc2tPcHRpb248QT4+KSA9PiAoZmlyc3Q6IFRhc2tPcHRpb248QT4pID0+IFRhc2tPcHRpb248QT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIE9ULmFsdChULk1vbmFkKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BhbHRgXSgjYWx0KS5cbiAqXG4gKiBAY2F0ZWdvcnkgQWx0XG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhbHRXOiA8Qj4oc2Vjb25kOiBMYXp5PFRhc2tPcHRpb248Qj4+KSA9PiA8QT4oZmlyc3Q6IFRhc2tPcHRpb248QT4pID0+IFRhc2tPcHRpb248QSB8IEI+ID0gYWx0IGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBaZXJvXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB6ZXJvOiBaZXJvMTxVUkk+Wyd6ZXJvJ10gPVxuICAvKiNfX1BVUkVfXyovXG4gIE9ULnplcm8oVC5Qb2ludGVkKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG5vbmU6IFRhc2tPcHRpb248bmV2ZXI+ID1cbiAgLyojX19QVVJFX18qL1xuICB6ZXJvKClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ29tcGFjdGFibGVcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbXBhY3Q6IENvbXBhY3RhYmxlMTxVUkk+Wydjb21wYWN0J10gPVxuICAvKiNfX1BVUkVfXyovXG4gIGNvbXBhY3RfKFQuRnVuY3RvciwgTy5Db21wYWN0YWJsZSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ29tcGFjdGFibGVcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNlcGFyYXRlOiBDb21wYWN0YWJsZTE8VVJJPlsnc2VwYXJhdGUnXSA9XG4gIC8qI19fUFVSRV9fKi9cbiAgc2VwYXJhdGVfKFQuRnVuY3RvciwgTy5Db21wYWN0YWJsZSwgTy5GdW5jdG9yKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPEEsIEIgZXh0ZW5kcyBBPihyZWZpbmVtZW50OiBSZWZpbmVtZW50PEEsIEI+KTogKGZiOiBUYXNrT3B0aW9uPEE+KSA9PiBUYXNrT3B0aW9uPEI+XG4gIDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IDxCIGV4dGVuZHMgQT4oZmI6IFRhc2tPcHRpb248Qj4pID0+IFRhc2tPcHRpb248Qj5cbiAgPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogKGZhOiBUYXNrT3B0aW9uPEE+KSA9PiBUYXNrT3B0aW9uPEE+XG59ID1cbiAgLyojX19QVVJFX18qL1xuICBmaWx0ZXJfKFQuRnVuY3RvciwgTy5GaWx0ZXJhYmxlKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXJNYXA6IDxBLCBCPihmOiAoYTogQSkgPT4gT3B0aW9uPEI+KSA9PiAoZmdhOiBUYXNrT3B0aW9uPEE+KSA9PiBUYXNrT3B0aW9uPEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBmaWx0ZXJNYXBfKFQuRnVuY3RvciwgTy5GaWx0ZXJhYmxlKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJ0aXRpb246IHtcbiAgPEEsIEIgZXh0ZW5kcyBBPihyZWZpbmVtZW50OiBSZWZpbmVtZW50PEEsIEI+KTogKGZiOiBUYXNrT3B0aW9uPEE+KSA9PiBTZXBhcmF0ZWQ8VGFza09wdGlvbjxBPiwgVGFza09wdGlvbjxCPj5cbiAgPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogPEIgZXh0ZW5kcyBBPihmYjogVGFza09wdGlvbjxCPikgPT4gU2VwYXJhdGVkPFRhc2tPcHRpb248Qj4sIFRhc2tPcHRpb248Qj4+XG4gIDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IChmYTogVGFza09wdGlvbjxBPikgPT4gU2VwYXJhdGVkPFRhc2tPcHRpb248QT4sIFRhc2tPcHRpb248QT4+XG59ID1cbiAgLyojX19QVVJFX18qL1xuICBwYXJ0aXRpb25fKFQuRnVuY3RvciwgTy5GaWx0ZXJhYmxlKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJ0aXRpb25NYXA6IDxBLCBCLCBDPihcbiAgZjogKGE6IEEpID0+IEVpdGhlcjxCLCBDPlxuKSA9PiAoZmE6IFRhc2tPcHRpb248QT4pID0+IFNlcGFyYXRlZDxUYXNrT3B0aW9uPEI+LCBUYXNrT3B0aW9uPEM+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgcGFydGl0aW9uTWFwXyhULkZ1bmN0b3IsIE8uRmlsdGVyYWJsZSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IF9tYXA6IEZ1bmN0b3IxPFVSST5bJ21hcCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBtYXAoZikpXG5jb25zdCBfYXA6IEFwcGx5MTxVUkk+WydhcCddID0gKGZhYiwgZmEpID0+IHBpcGUoZmFiLCBhcChmYSkpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2NoYWluOiBNb25hZDE8VVJJPlsnY2hhaW4nXSA9IChtYSwgZikgPT4gcGlwZShtYSwgY2hhaW4oZikpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2FsdDogQWx0MTxVUkk+WydhbHQnXSA9IChmYSwgdGhhdCkgPT4gcGlwZShmYSwgYWx0KHRoYXQpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9maWx0ZXI6IEZpbHRlcmFibGUxPFVSST5bJ2ZpbHRlciddID0gPEE+KGZhOiBUYXNrT3B0aW9uPEE+LCBwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPikgPT5cbiAgcGlwZShmYSwgZmlsdGVyKHByZWRpY2F0ZSkpXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgX2ZpbHRlck1hcDogRmlsdGVyYWJsZTE8VVJJPlsnZmlsdGVyTWFwJ10gPSAoZmEsIGYpID0+IHBpcGUoZmEsIGZpbHRlck1hcChmKSlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfcGFydGl0aW9uOiBGaWx0ZXJhYmxlMTxVUkk+WydwYXJ0aXRpb24nXSA9IDxBPihmYTogVGFza09wdGlvbjxBPiwgcHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pID0+XG4gIHBpcGUoZmEsIHBhcnRpdGlvbihwcmVkaWNhdGUpKVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IF9wYXJ0aXRpb25NYXA6IEZpbHRlcmFibGUxPFVSST5bJ3BhcnRpdGlvbk1hcCddID0gKGZhLCBmKSA9PiBwaXBlKGZhLCBwYXJ0aXRpb25NYXAoZikpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5jb25zdCBVUkkgPSAnVGFza09wdGlvbidcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCB0eXBlIFVSSSA9IHR5cGVvZiBVUklcblxuZGVjbGFyZSBtb2R1bGUgJy4vSEtUJyB7XG4gIGludGVyZmFjZSBVUkl0b0tpbmQ8QT4ge1xuICAgIHJlYWRvbmx5IFtVUkldOiBUYXNrT3B0aW9uPEE+XG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGdW5jdG9yOiBGdW5jdG9yMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcFxufVxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBGdW5jdG9yYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXAgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZsYXBfKEZ1bmN0b3IpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgUG9pbnRlZDogUG9pbnRlZDE8VVJJPiA9IHtcbiAgVVJJLFxuICBvZlxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGx5UGFyOiBBcHBseTE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBcbn1cblxuLyoqXG4gKiBDb21iaW5lIHR3byBlZmZlY3RmdWwgYWN0aW9ucywga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBBcHBseWAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcEZpcnN0ID1cbiAgLyojX19QVVJFX18qL1xuICBhcEZpcnN0XyhBcHBseVBhcilcblxuLyoqXG4gKiBDb21iaW5lIHR3byBlZmZlY3RmdWwgYWN0aW9ucywga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIHNlY29uZC5cbiAqXG4gKiBEZXJpdmFibGUgZnJvbSBgQXBwbHlgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgYXBTZWNvbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU2Vjb25kXyhBcHBseVBhcilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBsaWNhdGl2ZVBhcjogQXBwbGljYXRpdmUxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBvZlxufVxuXG5jb25zdCBfYXBTZXE6IEFwcGx5MTxVUkk+WydhcCddID0gKGZhYiwgZmEpID0+XG4gIHBpcGUoXG4gICAgZmFiLFxuICAgIGNoYWluKChmKSA9PiBwaXBlKGZhLCBtYXAoZikpKVxuICApXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQXBwbHlTZXE6IEFwcGx5MTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFNlcVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aXZlU2VxOiBBcHBsaWNhdGl2ZTE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBTZXEsXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQ2hhaW46IENoYWluMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgY2hhaW46IF9jaGFpblxufVxuXG4vKipcbiAqIENvbXBvc2VzIGNvbXB1dGF0aW9ucyBpbiBzZXF1ZW5jZSwgdXNpbmcgdGhlIHJldHVybiB2YWx1ZSBvZiBvbmUgY29tcHV0YXRpb24gdG8gZGV0ZXJtaW5lIHRoZSBuZXh0IGNvbXB1dGF0aW9uIGFuZFxuICoga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBDaGFpbmAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0ID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpbkZpcnN0XyhDaGFpbilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBBbHQ6IEFsdDE8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFsdDogX2FsdFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IFplcm86IFplcm8xPFVSST4gPSB7XG4gIFVSSSxcbiAgemVyb1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGd1YXJkID1cbiAgLyojX19QVVJFX18qL1xuICBndWFyZF8oWmVybywgUG9pbnRlZClcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBBbHRlcm5hdGl2ZTogQWx0ZXJuYXRpdmUxPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwLFxuICBvZixcbiAgYWx0OiBfYWx0LFxuICB6ZXJvXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgTW9uYWQ6IE1vbmFkMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW5cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZElPOiBNb25hZElPMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGZyb21JT1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IE1vbmFkVGFzazogTW9uYWRUYXNrMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcCxcbiAgb2YsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGZyb21JTyxcbiAgZnJvbVRhc2tcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBDb21wYWN0YWJsZTogQ29tcGFjdGFibGUxPFVSST4gPSB7XG4gIFVSSSxcbiAgY29tcGFjdCxcbiAgc2VwYXJhdGVcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGaWx0ZXJhYmxlOiBGaWx0ZXJhYmxlMTxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgY29tcGFjdCxcbiAgc2VwYXJhdGUsXG4gIGZpbHRlcjogX2ZpbHRlcixcbiAgZmlsdGVyTWFwOiBfZmlsdGVyTWFwLFxuICBwYXJ0aXRpb246IF9wYXJ0aXRpb24sXG4gIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcFxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZyb21JTzogRnJvbUlPMTxVUkk+ID0ge1xuICBVUkksXG4gIGZyb21JT1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUlPSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnJvbUlPS18oRnJvbUlPKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5JT0sgPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluSU9LXyhGcm9tSU8sIENoYWluKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdElPSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdElPS18oRnJvbUlPLCBDaGFpbilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tRWl0aGVyOiBGcm9tRWl0aGVyMTxVUkk+ID0ge1xuICBVUkksXG4gIGZyb21FaXRoZXJcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tVGFzazogRnJvbVRhc2sxPFVSST4gPSB7XG4gIFVSSSxcbiAgZnJvbUlPLFxuICBmcm9tVGFza1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVRhc2tLID1cbiAgLyojX19QVVJFX18qL1xuICBmcm9tVGFza0tfKEZyb21UYXNrKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5UYXNrSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5UYXNrS18oRnJvbVRhc2ssIENoYWluKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdFRhc2tLID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpbkZpcnN0VGFza0tfKEZyb21UYXNrLCBDaGFpbilcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZG8gbm90YXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBEbzogVGFza09wdGlvbjx7fT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWNvcmQpXG5cbi8qKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgYmluZFRvID1cbiAgLyojX19QVVJFX18qL1xuICBiaW5kVG9fKEZ1bmN0b3IpXG5cbi8qKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgYmluZCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYmluZF8oQ2hhaW4pXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHNlcXVlbmNlIFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFMgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwU18oQXBwbHlQYXIpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHNlcXVlbmNlIFRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcFQ6IFRhc2tPcHRpb248cmVhZG9ubHkgW10+ID1cbiAgLyojX19QVVJFX18qL1xuICBvZihfLmVtcHR5UmVhZG9ubHlBcnJheSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gYXJyYXkgdXRpbHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIGBSZWFkb25seU5vbkVtcHR5QXJyYXkjdHJhdmVyc2VXaXRoSW5kZXgoQXBwbGljYXRpdmVQYXIpYC5cbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleCA9IDxBLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFRhc2tPcHRpb248Qj5cbik6ICgoYXM6IFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxBPikgPT4gVGFza09wdGlvbjxSZWFkb25seU5vbkVtcHR5QXJyYXk8Qj4+KSA9PlxuICBmbG93KFQudHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgoZiksIFQubWFwKE8udHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgoU0spKSlcblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIGBSZWFkb25seUFycmF5I3RyYXZlcnNlV2l0aEluZGV4KEFwcGxpY2F0aXZlUGFyKWAuXG4gKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4ID0gPEEsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gVGFza09wdGlvbjxCPlxuKTogKChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gVGFza09wdGlvbjxSZWFkb25seUFycmF5PEI+PikgPT4ge1xuICBjb25zdCBnID0gdHJhdmVyc2VSZWFkb25seU5vbkVtcHR5QXJyYXlXaXRoSW5kZXgoZilcbiAgcmV0dXJuIChhcykgPT4gKF8uaXNOb25FbXB0eShhcykgPyBnKGFzKSA6IEFwVClcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIGBSZWFkb25seU5vbkVtcHR5QXJyYXkjdHJhdmVyc2VXaXRoSW5kZXgoQXBwbGljYXRpdmVTZXEpYC5cbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleFNlcSA9IDxBLCBCPihmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gVGFza09wdGlvbjxCPikgPT4gKFxuICBhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+XG4pOiBUYXNrT3B0aW9uPFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPj4gPT4gKCkgPT5cbiAgXy50YWlsKGFzKS5yZWR1Y2U8UHJvbWlzZTxPcHRpb248Tm9uRW1wdHlBcnJheTxCPj4+PihcbiAgICAoYWNjLCBhLCBpKSA9PlxuICAgICAgYWNjLnRoZW4oKG9icykgPT5cbiAgICAgICAgXy5pc05vbmUob2JzKVxuICAgICAgICAgID8gYWNjXG4gICAgICAgICAgOiBmKGkgKyAxLCBhKSgpLnRoZW4oKG9iKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChfLmlzTm9uZShvYikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvYnMudmFsdWUucHVzaChvYi52YWx1ZSlcbiAgICAgICAgICAgICAgcmV0dXJuIG9ic1xuICAgICAgICAgICAgfSlcbiAgICAgICksXG4gICAgZigwLCBfLmhlYWQoYXMpKSgpLnRoZW4oTy5tYXAoXy5zaW5nbGV0b24pKVxuICApXG5cbi8qKlxuICogRXF1aXZhbGVudCB0byBgUmVhZG9ubHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZVNlcSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleFNlcSA9IDxBLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFRhc2tPcHRpb248Qj5cbik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFRhc2tPcHRpb248UmVhZG9ubHlBcnJheTxCPj4pID0+IHtcbiAgY29uc3QgZyA9IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4U2VxKGYpXG4gIHJldHVybiAoYXMpID0+IChfLmlzTm9uRW1wdHkoYXMpID8gZyhhcykgOiBBcFQpXG59XG5cbi8qKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VBcnJheVdpdGhJbmRleDogPEEsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gVGFza09wdGlvbjxCPlxuKSA9PiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFRhc2tPcHRpb248UmVhZG9ubHlBcnJheTxCPj4gPSB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXhcblxuLyoqXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZUFycmF5OiA8QSwgQj4oXG4gIGY6IChhOiBBKSA9PiBUYXNrT3B0aW9uPEI+XG4pID0+IChhczogUmVhZG9ubHlBcnJheTxBPikgPT4gVGFza09wdGlvbjxSZWFkb25seUFycmF5PEI+PiA9IChmKSA9PiB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXgoKF8sIGEpID0+IGYoYSkpXG5cbi8qKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2VBcnJheTogPEE+KGFzOiBSZWFkb25seUFycmF5PFRhc2tPcHRpb248QT4+KSA9PiBUYXNrT3B0aW9uPFJlYWRvbmx5QXJyYXk8QT4+ID1cbiAgLyojX19QVVJFX18qL1xuICB0cmF2ZXJzZUFycmF5KGlkZW50aXR5KVxuXG4vKipcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlU2VxQXJyYXlXaXRoSW5kZXg6IDxBLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFRhc2tPcHRpb248Qj5cbikgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBUYXNrT3B0aW9uPFJlYWRvbmx5QXJyYXk8Qj4+ID0gdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4U2VxXG5cbi8qKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VTZXFBcnJheTogPEEsIEI+KFxuICBmOiAoYTogQSkgPT4gVGFza09wdGlvbjxCPlxuKSA9PiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFRhc2tPcHRpb248UmVhZG9ubHlBcnJheTxCPj4gPSAoZikgPT4gdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4U2VxKChfLCBhKSA9PiBmKGEpKVxuXG4vKipcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNlcXVlbmNlU2VxQXJyYXk6IDxBPihhczogUmVhZG9ubHlBcnJheTxUYXNrT3B0aW9uPEE+PikgPT4gVGFza09wdGlvbjxSZWFkb25seUFycmF5PEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgdHJhdmVyc2VTZXFBcnJheShpZGVudGl0eSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb25cbiJdfQ==
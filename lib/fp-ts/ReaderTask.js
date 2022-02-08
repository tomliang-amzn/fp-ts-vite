"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readerTaskSeq = exports.readerTask = exports.of = exports.map = exports.local = exports.getSemigroup = exports.getMonoid = exports.fromTaskK = exports.fromTask = exports.fromReaderK = exports.fromReader = exports.fromIOK = exports.fromIO = exports.flattenW = exports.flatten = exports.flap = exports.chainW = exports.chainTaskK = exports.chainReaderKW = exports.chainReaderK = exports.chainIOK = exports.chainFirstW = exports.chainFirstTaskK = exports.chainFirstReaderKW = exports.chainFirstReaderK = exports.chainFirstIOK = exports.chainFirst = exports.chain = exports.bindW = exports.bindTo = exports.bind = exports.asksReaderTaskW = exports.asksReaderTask = exports.asks = exports.ask = exports.apW = exports.apSecond = exports.apSW = exports.apS = exports.apFirst = exports.ap = exports.URI = exports.Pointed = exports.MonadTask = exports.MonadIO = exports.Monad = exports.Functor = exports.FromTask = exports.FromReader = exports.FromIO = exports.Do = exports.Chain = exports.ApplySeq = exports.ApplyPar = exports.ApplicativeSeq = exports.ApplicativePar = exports.ApT = void 0;
exports.run = run;
exports.traverseSeqArrayWithIndex = exports.traverseSeqArray = exports.traverseReadonlyNonEmptyArrayWithIndexSeq = exports.traverseReadonlyNonEmptyArrayWithIndex = exports.traverseReadonlyArrayWithIndexSeq = exports.traverseReadonlyArrayWithIndex = exports.traverseArrayWithIndex = exports.traverseArray = exports.sequenceSeqArray = exports.sequenceArray = void 0;

var _Applicative = require("./Applicative");

var _Apply = require("./Apply");

var _Chain = require("./Chain");

var _FromIO = require("./FromIO");

var _FromReader = require("./FromReader");

var _FromTask = require("./FromTask");

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var R = _interopRequireWildcard(require("./Reader"));

var RT = _interopRequireWildcard(require("./ReaderT"));

var T = _interopRequireWildcard(require("./Task"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @since 2.3.0
 */
// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------
var Task = T.Task;
/**
 * @category model
 * @since 2.3.0
 */

// -------------------------------------------------------------------------------------
// natural transformations
// -------------------------------------------------------------------------------------

/**
 * @category natural transformations
 * @since 2.3.0
 */
var fromReader = /*#__PURE__*/RT.fromReader(T.Pointed);
/**
 * @category natural transformations
 * @since 2.3.0
 */

exports.fromReader = fromReader;
var fromTask = /*#__PURE__*/R.of;
/**
 * @category natural transformations
 * @since 2.3.0
 */

exports.fromTask = fromTask;
var fromIO = /*#__PURE__*/(0, _function.flow)(T.fromIO, fromTask); // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Changes the value of the local context during the execution of the action `ma` (similar to `Contravariant`'s
 * `contramap`).
 *
 * @category combinators
 * @since 2.3.0
 */

exports.fromIO = fromIO;
var local = R.local;
/**
 * Less strict version of [`asksReaderTask`](#asksreadertask).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.local = local;
var asksReaderTaskW = R.asksReaderW;
/**
 * Effectfully accesses the environment.
 *
 * @category combinators
 * @since 2.11.0
 */

exports.asksReaderTaskW = asksReaderTaskW;
var asksReaderTask = asksReaderTaskW; // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

exports.asksReaderTask = asksReaderTask;

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
};
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.3.0
 */


var map = /*#__PURE__*/RT.map(T.Functor);
/**
 * Apply a function to an argument under a type constructor.
 *
 * @category Apply
 * @since 2.3.0
 */

exports.map = map;
var ap = /*#__PURE__*/RT.ap(T.ApplyPar);
/**
 * Less strict version of [`ap`](#ap).
 *
 * @category Apply
 * @since 2.8.0
 */

exports.ap = ap;
var apW = ap;
/**
 * @category Pointed
 * @since 2.3.0
 */

exports.apW = apW;
var of = /*#__PURE__*/RT.of(T.Pointed);
/**
 * Composes computations in sequence, using the return value of one computation to determine the next computation.
 *
 * @category Monad
 * @since 2.3.0
 */

exports.of = of;
var chain = /*#__PURE__*/RT.chain(T.Monad);
/**
 * Less strict version of  [`chain`](#chain).
 *
 * @category Monad
 * @since 2.6.7
 */

exports.chain = chain;
var chainW = chain;
/**
 * Less strict version of [`flatten`](#flatten).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chainW = chainW;
var flattenW = /*#__PURE__*/chainW(_function.identity);
/**
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.3.0
 */

exports.flattenW = flattenW;
var flatten = flattenW; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.3.0
 */

exports.flatten = flatten;
var URI = 'ReaderTask';
/**
 * @category instances
 * @since 2.3.0
 */

exports.URI = URI;

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
 * @since 2.3.0
 */

exports.ApplyPar = ApplyPar;
var apFirst = /*#__PURE__*/(0, _Apply.apFirst)(ApplyPar);
/**
 * Combine two effectful actions, keeping only the result of the second.
 *
 * Derivable from `Apply`.
 *
 * @category combinators
 * @since 2.3.0
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
 * @category instances
 * @since 2.10.0
 */

exports.MonadIO = MonadIO;
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
 * @since 2.3.0
 */

exports.MonadTask = MonadTask;
var chainFirst = /*#__PURE__*/(0, _Chain.chainFirst)(Chain);
/**
 * Less strict version of [`chainFirst`](#chainfirst).
 *
 * Derivable from `Chain`.
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chainFirst = chainFirst;
var chainFirstW = chainFirst;
/**
 * @category instances
 * @since 2.10.0
 */

exports.chainFirstW = chainFirstW;
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
 * @since 2.11.0
 */

exports.chainFirstIOK = chainFirstIOK;
var FromReader = {
  URI: URI,
  fromReader: fromReader
};
/**
 * Reads the current context.
 *
 * @category constructors
 * @since 2.3.0
 */

exports.FromReader = FromReader;
var ask = /*#__PURE__*/(0, _FromReader.ask)(FromReader);
/**
 * Projects a value from the global context in a `ReaderTask`.
 *
 * @category constructors
 * @since 2.3.0
 */

exports.ask = ask;
var asks = /*#__PURE__*/(0, _FromReader.asks)(FromReader);
/**
 * @category combinators
 * @since 2.11.0
 */

exports.asks = asks;
var fromReaderK = /*#__PURE__*/(0, _FromReader.fromReaderK)(FromReader);
/**
 * @category combinators
 * @since 2.11.0
 */

exports.fromReaderK = fromReaderK;
var chainReaderK = /*#__PURE__*/(0, _FromReader.chainReaderK)(FromReader, Chain);
/**
 * Less strict version of [`chainReaderK`](#chainreaderk).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chainReaderK = chainReaderK;
var chainReaderKW = chainReaderK;
/**
 * @category combinators
 * @since 2.11.0
 */

exports.chainReaderKW = chainReaderKW;
var chainFirstReaderK = /*#__PURE__*/(0, _FromReader.chainFirstReaderK)(FromReader, Chain);
/**
 * Less strict version of [`chainFirstReaderK`](#chainfirstreaderk).
 *
 * @category combinators
 * @since 2.11.0
 */

exports.chainFirstReaderK = chainFirstReaderK;
var chainFirstReaderKW = chainFirstReaderK;
/**
 * @category instances
 * @since 2.10.0
 */

exports.chainFirstReaderKW = chainFirstReaderKW;
var FromTask = {
  URI: URI,
  fromIO: fromIO,
  fromTask: fromTask
};
/**
 * @category combinators
 * @since 2.4.0
 */

exports.FromTask = FromTask;
var fromTaskK = /*#__PURE__*/(0, _FromTask.fromTaskK)(FromTask);
/**
 * @category combinators
 * @since 2.4.0
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
 * @since 2.9.0
 */

exports.chainFirstTaskK = chainFirstTaskK;
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
var bind = /*#__PURE__*/(0, _Chain.bind)(Chain);
/**
 * @since 2.8.0
 */

exports.bind = bind;
var bindW = bind; // -------------------------------------------------------------------------------------
// pipeable sequence S
// -------------------------------------------------------------------------------------

/**
 * @since 2.8.0
 */

exports.bindW = bindW;
var apS = /*#__PURE__*/(0, _Apply.apS)(ApplyPar);
/**
 * @since 2.8.0
 */

exports.apS = apS;
var apSW = apS; // -------------------------------------------------------------------------------------
// sequence T
// -------------------------------------------------------------------------------------

/**
 * @since 2.11.0
 */

exports.apSW = apSW;
var ApT = /*#__PURE__*/of(_.emptyReadonlyArray); // -------------------------------------------------------------------------------------
// array utils
// -------------------------------------------------------------------------------------

/**
 * Equivalent to `ReadonlyNonEmptyArray#traverseWithIndex(Applicative)`.
 *
 * @since 2.11.0
 */

exports.ApT = ApT;

var traverseReadonlyNonEmptyArrayWithIndex = function traverseReadonlyNonEmptyArrayWithIndex(f) {
  return (0, _function.flow)(R.traverseReadonlyNonEmptyArrayWithIndex(f), R.map(T.traverseReadonlyNonEmptyArrayWithIndex(_function.SK)));
};
/**
 * Equivalent to `ReadonlyArray#traverseWithIndex(Applicative)`.
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
  return (0, _function.flow)(R.traverseReadonlyNonEmptyArrayWithIndex(f), R.map(T.traverseReadonlyNonEmptyArrayWithIndexSeq(_function.SK)));
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
 * Use `traverseReadonlyArrayWithIndexSeq` instead.
 *
 * @since 2.10.0
 * @deprecated
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
 * @since 2.3.0
 * @deprecated
 */

exports.sequenceSeqArray = sequenceSeqArray;
var readerTask = {
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
 * @since 2.3.0
 * @deprecated
 */

exports.readerTask = readerTask;
var readerTaskSeq = {
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
 * @since 2.3.0
 * @deprecated
 */

exports.readerTaskSeq = readerTaskSeq;
var getSemigroup = /*#__PURE__*/(0, _Apply.getApplySemigroup)(ApplySeq);
/**
 * Use [`getApplicativeMonoid`](./Applicative.ts.html#getapplicativemonoid) instead.
 *
 * @category instances
 * @since 2.3.0
 * @deprecated
 */

exports.getSemigroup = getSemigroup;
var getMonoid = /*#__PURE__*/(0, _Applicative.getApplicativeMonoid)(ApplicativeSeq);
/**
 * @since 2.4.0
 * @deprecated
 */

/* istanbul ignore next */

exports.getMonoid = getMonoid;

function run(ma, r) {
  return ma(r)();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9SZWFkZXJUYXNrLnRzIl0sIm5hbWVzIjpbIlRhc2siLCJUIiwiZnJvbVJlYWRlciIsIlJUIiwiUG9pbnRlZCIsImZyb21UYXNrIiwiUiIsIm9mIiwiZnJvbUlPIiwibG9jYWwiLCJhc2tzUmVhZGVyVGFza1ciLCJhc2tzUmVhZGVyVyIsImFza3NSZWFkZXJUYXNrIiwiX21hcCIsImZhIiwiZiIsIm1hcCIsIl9hcFBhciIsImZhYiIsImFwIiwiX2FwU2VxIiwiY2hhaW4iLCJfY2hhaW4iLCJtYSIsIkZ1bmN0b3IiLCJBcHBseVBhciIsImFwVyIsIk1vbmFkIiwiY2hhaW5XIiwiZmxhdHRlblciLCJpZGVudGl0eSIsImZsYXR0ZW4iLCJVUkkiLCJmbGFwIiwiYXBGaXJzdCIsImFwU2Vjb25kIiwiQXBwbGljYXRpdmVQYXIiLCJBcHBseVNlcSIsIkFwcGxpY2F0aXZlU2VxIiwiQ2hhaW4iLCJNb25hZElPIiwiTW9uYWRUYXNrIiwiY2hhaW5GaXJzdCIsImNoYWluRmlyc3RXIiwiRnJvbUlPIiwiZnJvbUlPSyIsImNoYWluSU9LIiwiY2hhaW5GaXJzdElPSyIsIkZyb21SZWFkZXIiLCJhc2siLCJhc2tzIiwiZnJvbVJlYWRlcksiLCJjaGFpblJlYWRlcksiLCJjaGFpblJlYWRlcktXIiwiY2hhaW5GaXJzdFJlYWRlcksiLCJjaGFpbkZpcnN0UmVhZGVyS1ciLCJGcm9tVGFzayIsImZyb21UYXNrSyIsImNoYWluVGFza0siLCJjaGFpbkZpcnN0VGFza0siLCJEbyIsIl8iLCJlbXB0eVJlY29yZCIsImJpbmRUbyIsImJpbmQiLCJiaW5kVyIsImFwUyIsImFwU1ciLCJBcFQiLCJlbXB0eVJlYWRvbmx5QXJyYXkiLCJ0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleCIsIlNLIiwidHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4IiwiZyIsImFzIiwiaXNOb25FbXB0eSIsInRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4U2VxIiwidHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4U2VxIiwidHJhdmVyc2VBcnJheVdpdGhJbmRleCIsInRyYXZlcnNlQXJyYXkiLCJhIiwic2VxdWVuY2VBcnJheSIsInRyYXZlcnNlU2VxQXJyYXlXaXRoSW5kZXgiLCJ0cmF2ZXJzZVNlcUFycmF5Iiwic2VxdWVuY2VTZXFBcnJheSIsInJlYWRlclRhc2siLCJyZWFkZXJUYXNrU2VxIiwiZ2V0U2VtaWdyb3VwIiwiZ2V0TW9ub2lkIiwicnVuIiwiciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQTs7QUFDQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFRQTs7QUFNQTs7QUFDQTs7QUFDQTs7QUFNQTs7QUFDQTs7QUFHQTs7Ozs7O0FBdkNBO0FBQ0E7QUFDQTtBQXVDQTtBQUNBO0FBQ0E7SUFFT0EsSSxHQUFPQyxDLENBQUVELEk7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7O0FBS0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUUsVUFBMEMsR0FDckQsYUFDQUMsRUFBRSxDQUFDRCxVQUFILENBQWNELENBQUMsQ0FBQ0csT0FBaEIsQ0FGSztBQUlQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxRQUFvQyxHQUMvQyxhQUNBQyxDQUFDLENBQUNDLEVBRkc7QUFJUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsTUFBOEIsR0FDekMsYUFDQSxvQkFBS1AsQ0FBQyxDQUFDTyxNQUFQLEVBQWVILFFBQWYsQ0FGSyxDLENBSVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNSSxLQUFxRixHQUFHSCxDQUFDLENBQUNHLEtBQWhHO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxlQUF3RixHQUFHSixDQUFDLENBQUNLLFdBQW5HO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFN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O0FBUHlDLENBQXBDO0FBVVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVPLElBQU1pRixhQUFnQyxHQUFHO0FBQzlDdEQsRUFBQUEsR0FBRyxFQUFIQSxHQUQ4QztBQUU5Q2hCLEVBQUFBLEdBQUcsRUFBRUgsSUFGeUM7QUFHOUNOLEVBQUFBLEVBQUUsRUFBRkEsRUFIOEM7QUFJOUNZLEVBQUFBLEVBQUUsRUFBRUMsTUFKMEM7QUFLOUNDLEVBQUFBLEtBQUssRUFBRUMsTUFMdUM7QUFNOUNkLEVBQUFBLE1BQU0sRUFBTkEsTUFOOEM7QUFPOUNILEVBQUFBLFFBQVEsRUFBUkE7QUFQOEMsQ0FBekM7QUFVUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWtGLFlBQW9FLEdBQy9FLGFBQ0EsOEJBQW1CbEQsUUFBbkIsQ0FGSztBQUlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNbUQsU0FBMkQsR0FDdEUsYUFDQSx1Q0FBcUJsRCxjQUFyQixDQUZLO0FBSVA7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7Ozs7QUFDTyxTQUFTbUQsR0FBVCxDQUFtQmxFLEVBQW5CLEVBQXlDbUUsQ0FBekMsRUFBMkQ7QUFDaEUsU0FBT25FLEVBQUUsQ0FBQ21FLENBQUQsQ0FBRixFQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBzaW5jZSAyLjMuMFxuICovXG5pbXBvcnQgeyBBcHBsaWNhdGl2ZTIsIGdldEFwcGxpY2F0aXZlTW9ub2lkIH0gZnJvbSAnLi9BcHBsaWNhdGl2ZSdcbmltcG9ydCB7XG4gIGFwRmlyc3QgYXMgYXBGaXJzdF8sXG4gIEFwcGx5MixcbiAgYXBTIGFzIGFwU18sXG4gIGFwU2Vjb25kIGFzIGFwU2Vjb25kXyxcbiAgZ2V0QXBwbHlTZW1pZ3JvdXAgYXMgZ2V0QXBwbHlTZW1pZ3JvdXBfXG59IGZyb20gJy4vQXBwbHknXG5pbXBvcnQgeyBiaW5kIGFzIGJpbmRfLCBDaGFpbjIsIGNoYWluRmlyc3QgYXMgY2hhaW5GaXJzdF8gfSBmcm9tICcuL0NoYWluJ1xuaW1wb3J0IHsgY2hhaW5GaXJzdElPSyBhcyBjaGFpbkZpcnN0SU9LXywgY2hhaW5JT0sgYXMgY2hhaW5JT0tfLCBGcm9tSU8yLCBmcm9tSU9LIGFzIGZyb21JT0tfIH0gZnJvbSAnLi9Gcm9tSU8nXG5pbXBvcnQge1xuICBhc2sgYXMgYXNrXyxcbiAgYXNrcyBhcyBhc2tzXyxcbiAgY2hhaW5GaXJzdFJlYWRlcksgYXMgY2hhaW5GaXJzdFJlYWRlcktfLFxuICBjaGFpblJlYWRlcksgYXMgY2hhaW5SZWFkZXJLXyxcbiAgRnJvbVJlYWRlcjIsXG4gIGZyb21SZWFkZXJLIGFzIGZyb21SZWFkZXJLX1xufSBmcm9tICcuL0Zyb21SZWFkZXInXG5pbXBvcnQge1xuICBjaGFpbkZpcnN0VGFza0sgYXMgY2hhaW5GaXJzdFRhc2tLXyxcbiAgY2hhaW5UYXNrSyBhcyBjaGFpblRhc2tLXyxcbiAgRnJvbVRhc2syLFxuICBmcm9tVGFza0sgYXMgZnJvbVRhc2tLX1xufSBmcm9tICcuL0Zyb21UYXNrJ1xuaW1wb3J0IHsgZmxvdywgaWRlbnRpdHksIHBpcGUsIFNLIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IGJpbmRUbyBhcyBiaW5kVG9fLCBmbGFwIGFzIGZsYXBfLCBGdW5jdG9yMiB9IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCAqIGFzIF8gZnJvbSAnLi9pbnRlcm5hbCdcbmltcG9ydCB7IE1vbmFkMiB9IGZyb20gJy4vTW9uYWQnXG5pbXBvcnQgeyBNb25hZElPMiB9IGZyb20gJy4vTW9uYWRJTydcbmltcG9ydCB7IE1vbmFkVGFzazIgfSBmcm9tICcuL01vbmFkVGFzaydcbmltcG9ydCB7IE1vbm9pZCB9IGZyb20gJy4vTW9ub2lkJ1xuaW1wb3J0IHsgUG9pbnRlZDIgfSBmcm9tICcuL1BvaW50ZWQnXG5pbXBvcnQgKiBhcyBSIGZyb20gJy4vUmVhZGVyJ1xuaW1wb3J0ICogYXMgUlQgZnJvbSAnLi9SZWFkZXJUJ1xuaW1wb3J0IHsgUmVhZG9ubHlOb25FbXB0eUFycmF5IH0gZnJvbSAnLi9SZWFkb25seU5vbkVtcHR5QXJyYXknXG5pbXBvcnQgeyBTZW1pZ3JvdXAgfSBmcm9tICcuL1NlbWlncm91cCdcbmltcG9ydCAqIGFzIFQgZnJvbSAnLi9UYXNrJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5pbXBvcnQgVGFzayA9IFQuVGFza1xuXG4vKipcbiAqIEBjYXRlZ29yeSBtb2RlbFxuICogQHNpbmNlIDIuMy4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVhZGVyVGFzazxSLCBBPiB7XG4gIChyOiBSKTogVGFzazxBPlxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMy4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tUmVhZGVyOiBGcm9tUmVhZGVyMjxVUkk+Wydmcm9tUmVhZGVyJ10gPVxuICAvKiNfX1BVUkVfXyovXG4gIFJULmZyb21SZWFkZXIoVC5Qb2ludGVkKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBuYXR1cmFsIHRyYW5zZm9ybWF0aW9uc1xuICogQHNpbmNlIDIuMy4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tVGFzazogRnJvbVRhc2syPFVSST5bJ2Zyb21UYXNrJ10gPVxuICAvKiNfX1BVUkVfXyovXG4gIFIub2ZcblxuLyoqXG4gKiBAY2F0ZWdvcnkgbmF0dXJhbCB0cmFuc2Zvcm1hdGlvbnNcbiAqIEBzaW5jZSAyLjMuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbUlPOiBGcm9tSU8yPFVSST5bJ2Zyb21JTyddID1cbiAgLyojX19QVVJFX18qL1xuICBmbG93KFQuZnJvbUlPLCBmcm9tVGFzaylcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29tYmluYXRvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSB2YWx1ZSBvZiB0aGUgbG9jYWwgY29udGV4dCBkdXJpbmcgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgYWN0aW9uIGBtYWAgKHNpbWlsYXIgdG8gYENvbnRyYXZhcmlhbnRgJ3NcbiAqIGBjb250cmFtYXBgKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjMuMFxuICovXG5leHBvcnQgY29uc3QgbG9jYWw6IDxSMiwgUjE+KGY6IChyMjogUjIpID0+IFIxKSA9PiA8QT4obWE6IFJlYWRlclRhc2s8UjEsIEE+KSA9PiBSZWFkZXJUYXNrPFIyLCBBPiA9IFIubG9jYWxcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgYXNrc1JlYWRlclRhc2tgXSgjYXNrc3JlYWRlcnRhc2spLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgYXNrc1JlYWRlclRhc2tXOiA8UjEsIFIyLCBBPihmOiAocjE6IFIxKSA9PiBSZWFkZXJUYXNrPFIyLCBBPikgPT4gUmVhZGVyVGFzazxSMSAmIFIyLCBBPiA9IFIuYXNrc1JlYWRlcldcblxuLyoqXG4gKiBFZmZlY3RmdWxseSBhY2Nlc3NlcyB0aGUgZW52aXJvbm1lbnQuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBhc2tzUmVhZGVyVGFzazogPFIsIEE+KGY6IChyOiBSKSA9PiBSZWFkZXJUYXNrPFIsIEE+KSA9PiBSZWFkZXJUYXNrPFIsIEE+ID0gYXNrc1JlYWRlclRhc2tXXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHR5cGUgY2xhc3MgbWVtYmVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBfbWFwOiBGdW5jdG9yMjxVUkk+WydtYXAnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgbWFwKGYpKVxuY29uc3QgX2FwUGFyOiBBcHBseTI8VVJJPlsnYXAnXSA9IChmYWIsIGZhKSA9PiBwaXBlKGZhYiwgYXAoZmEpKVxuY29uc3QgX2FwU2VxOiBBcHBseTI8VVJJPlsnYXAnXSA9IChmYWIsIGZhKSA9PlxuICBwaXBlKFxuICAgIGZhYixcbiAgICBjaGFpbigoZikgPT4gcGlwZShmYSwgbWFwKGYpKSlcbiAgKVxuY29uc3QgX2NoYWluOiBDaGFpbjI8VVJJPlsnY2hhaW4nXSA9IChtYSwgZikgPT4gcGlwZShtYSwgY2hhaW4oZikpXG5cbi8qKlxuICogYG1hcGAgY2FuIGJlIHVzZWQgdG8gdHVybiBmdW5jdGlvbnMgYChhOiBBKSA9PiBCYCBpbnRvIGZ1bmN0aW9ucyBgKGZhOiBGPEE+KSA9PiBGPEI+YCB3aG9zZSBhcmd1bWVudCBhbmQgcmV0dXJuIHR5cGVzXG4gKiB1c2UgdGhlIHR5cGUgY29uc3RydWN0b3IgYEZgIHRvIHJlcHJlc2VudCBzb21lIGNvbXB1dGF0aW9uYWwgY29udGV4dC5cbiAqXG4gKiBAY2F0ZWdvcnkgRnVuY3RvclxuICogQHNpbmNlIDIuMy4wXG4gKi9cbmV4cG9ydCBjb25zdCBtYXA6IDxBLCBCPihmOiAoYTogQSkgPT4gQikgPT4gPFI+KGZhOiBSZWFkZXJUYXNrPFIsIEE+KSA9PiBSZWFkZXJUYXNrPFIsIEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBSVC5tYXAoVC5GdW5jdG9yKVxuXG4vKipcbiAqIEFwcGx5IGEgZnVuY3Rpb24gdG8gYW4gYXJndW1lbnQgdW5kZXIgYSB0eXBlIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBjYXRlZ29yeSBBcHBseVxuICogQHNpbmNlIDIuMy4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcDogPFIsIEE+KGZhOiBSZWFkZXJUYXNrPFIsIEE+KSA9PiA8Qj4oZmFiOiBSZWFkZXJUYXNrPFIsIChhOiBBKSA9PiBCPikgPT4gUmVhZGVyVGFzazxSLCBCPiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgUlQuYXAoVC5BcHBseVBhcilcblxuLyoqXG4gKiBMZXNzIHN0cmljdCB2ZXJzaW9uIG9mIFtgYXBgXSgjYXApLlxuICpcbiAqIEBjYXRlZ29yeSBBcHBseVxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBhcFc6IDxSMiwgQT4oXG4gIGZhOiBSZWFkZXJUYXNrPFIyLCBBPlxuKSA9PiA8UjEsIEI+KGZhYjogUmVhZGVyVGFzazxSMSwgKGE6IEEpID0+IEI+KSA9PiBSZWFkZXJUYXNrPFIxICYgUjIsIEI+ID0gYXAgYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IFBvaW50ZWRcbiAqIEBzaW5jZSAyLjMuMFxuICovXG5leHBvcnQgY29uc3Qgb2Y6IFBvaW50ZWQyPFVSST5bJ29mJ10gPVxuICAvKiNfX1BVUkVfXyovXG4gIFJULm9mKFQuUG9pbnRlZClcblxuLyoqXG4gKiBDb21wb3NlcyBjb21wdXRhdGlvbnMgaW4gc2VxdWVuY2UsIHVzaW5nIHRoZSByZXR1cm4gdmFsdWUgb2Ygb25lIGNvbXB1dGF0aW9uIHRvIGRldGVybWluZSB0aGUgbmV4dCBjb21wdXRhdGlvbi5cbiAqXG4gKiBAY2F0ZWdvcnkgTW9uYWRcbiAqIEBzaW5jZSAyLjMuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW46IDxBLCBSLCBCPihmOiAoYTogQSkgPT4gUmVhZGVyVGFzazxSLCBCPikgPT4gKG1hOiBSZWFkZXJUYXNrPFIsIEE+KSA9PiBSZWFkZXJUYXNrPFIsIEI+ID1cbiAgLyojX19QVVJFX18qL1xuICBSVC5jaGFpbihULk1vbmFkKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgIFtgY2hhaW5gXSgjY2hhaW4pLlxuICpcbiAqIEBjYXRlZ29yeSBNb25hZFxuICogQHNpbmNlIDIuNi43XG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpblc6IDxSMiwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBSZWFkZXJUYXNrPFIyLCBCPlxuKSA9PiA8UjE+KG1hOiBSZWFkZXJUYXNrPFIxLCBBPikgPT4gUmVhZGVyVGFzazxSMSAmIFIyLCBCPiA9IGNoYWluIGFzIGFueVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BmbGF0dGVuYF0oI2ZsYXR0ZW4pLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZmxhdHRlblc6IDxSMSwgUjIsIEE+KG1tYTogUmVhZGVyVGFzazxSMSwgUmVhZGVyVGFzazxSMiwgQT4+KSA9PiBSZWFkZXJUYXNrPFIxICYgUjIsIEE+ID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpblcoaWRlbnRpdHkpXG5cbi8qKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjMuMFxuICovXG5leHBvcnQgY29uc3QgZmxhdHRlbjogPFIsIEE+KG1tYTogUmVhZGVyVGFzazxSLCBSZWFkZXJUYXNrPFIsIEE+PikgPT4gUmVhZGVyVGFzazxSLCBBPiA9IGZsYXR0ZW5XXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGluc3RhbmNlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjMuMFxuICovXG5leHBvcnQgY29uc3QgVVJJID0gJ1JlYWRlclRhc2snXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMy4wXG4gKi9cbmV4cG9ydCB0eXBlIFVSSSA9IHR5cGVvZiBVUklcblxuZGVjbGFyZSBtb2R1bGUgJy4vSEtUJyB7XG4gIGludGVyZmFjZSBVUkl0b0tpbmQyPEUsIEE+IHtcbiAgICByZWFkb25seSBbVVJJXTogUmVhZGVyVGFzazxFLCBBPlxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGdW5jdG9yOiBGdW5jdG9yMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcFxufVxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBGdW5jdG9yYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXAgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZsYXBfKEZ1bmN0b3IpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgUG9pbnRlZDogUG9pbnRlZDI8VVJJPiA9IHtcbiAgVVJJLFxuICBvZlxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGx5UGFyOiBBcHBseTI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBQYXJcbn1cblxuLyoqXG4gKiBDb21iaW5lIHR3byBlZmZlY3RmdWwgYWN0aW9ucywga2VlcGluZyBvbmx5IHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBBcHBseWAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4zLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwRmlyc3QgPVxuICAvKiNfX1BVUkVfXyovXG4gIGFwRmlyc3RfKEFwcGx5UGFyKVxuXG4vKipcbiAqIENvbWJpbmUgdHdvIGVmZmVjdGZ1bCBhY3Rpb25zLCBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgc2Vjb25kLlxuICpcbiAqIERlcml2YWJsZSBmcm9tIGBBcHBseWAuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4zLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwU2Vjb25kID1cbiAgLyojX19QVVJFX18qL1xuICBhcFNlY29uZF8oQXBwbHlQYXIpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBBcHBsaWNhdGl2ZVBhcjogQXBwbGljYXRpdmUyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBhcDogX2FwUGFyLFxuICBvZlxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGx5U2VxOiBBcHBseTI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBTZXFcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwcGxpY2F0aXZlU2VxOiBBcHBsaWNhdGl2ZTI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIGFwOiBfYXBTZXEsXG4gIG9mXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgQ2hhaW46IENoYWluMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgYXA6IF9hcFBhcixcbiAgY2hhaW46IF9jaGFpblxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IE1vbmFkOiBNb25hZDI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG9mLFxuICBhcDogX2FwUGFyLFxuICBjaGFpbjogX2NoYWluXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgTW9uYWRJTzogTW9uYWRJTzI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG9mLFxuICBhcDogX2FwUGFyLFxuICBjaGFpbjogX2NoYWluLFxuICBmcm9tSU9cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBNb25hZFRhc2s6IE1vbmFkVGFzazI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG9mLFxuICBhcDogX2FwUGFyLFxuICBjaGFpbjogX2NoYWluLFxuICBmcm9tSU8sXG4gIGZyb21UYXNrXG59XG5cbi8qKlxuICogQ29tcG9zZXMgY29tcHV0YXRpb25zIGluIHNlcXVlbmNlLCB1c2luZyB0aGUgcmV0dXJuIHZhbHVlIG9mIG9uZSBjb21wdXRhdGlvbiB0byBkZXRlcm1pbmUgdGhlIG5leHQgY29tcHV0YXRpb24gYW5kXG4gKiBrZWVwaW5nIG9ubHkgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjMuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5GaXJzdCA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdF8oQ2hhaW4pXG5cbi8qKlxuICogTGVzcyBzdHJpY3QgdmVyc2lvbiBvZiBbYGNoYWluRmlyc3RgXSgjY2hhaW5maXJzdCkuXG4gKlxuICogRGVyaXZhYmxlIGZyb20gYENoYWluYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3RXOiA8UjIsIEEsIEI+KFxuICBmOiAoYTogQSkgPT4gUmVhZGVyVGFzazxSMiwgQj5cbikgPT4gPFIxPihtYTogUmVhZGVyVGFzazxSMSwgQT4pID0+IFJlYWRlclRhc2s8UjEgJiBSMiwgQT4gPSBjaGFpbkZpcnN0IGFzIGFueVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZyb21JTzogRnJvbUlPMjxVUkk+ID0ge1xuICBVUkksXG4gIGZyb21JT1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tSU9LID1cbiAgLyojX19QVVJFX18qL1xuICBmcm9tSU9LXyhGcm9tSU8pXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluSU9LID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpbklPS18oRnJvbUlPLCBDaGFpbilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3RJT0sgPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluRmlyc3RJT0tfKEZyb21JTywgQ2hhaW4pXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgRnJvbVJlYWRlcjogRnJvbVJlYWRlcjI8VVJJPiA9IHtcbiAgVVJJLFxuICBmcm9tUmVhZGVyXG59XG5cbi8qKlxuICogUmVhZHMgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29uc3RydWN0b3JzXG4gKiBAc2luY2UgMi4zLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFzayA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXNrXyhGcm9tUmVhZGVyKVxuXG4vKipcbiAqIFByb2plY3RzIGEgdmFsdWUgZnJvbSB0aGUgZ2xvYmFsIGNvbnRleHQgaW4gYSBgUmVhZGVyVGFza2AuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMy4wXG4gKi9cbmV4cG9ydCBjb25zdCBhc2tzID1cbiAgLyojX19QVVJFX18qL1xuICBhc2tzXyhGcm9tUmVhZGVyKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbVJlYWRlcksgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21SZWFkZXJLXyhGcm9tUmVhZGVyKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgY2hhaW5SZWFkZXJLID1cbiAgLyojX19QVVJFX18qL1xuICBjaGFpblJlYWRlcktfKEZyb21SZWFkZXIsIENoYWluKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BjaGFpblJlYWRlcktgXSgjY2hhaW5yZWFkZXJrKS5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluUmVhZGVyS1c6IDxBLCBSMSwgQj4oXG4gIGY6IChhOiBBKSA9PiBSLlJlYWRlcjxSMSwgQj5cbikgPT4gPFIyPihtYTogUmVhZGVyVGFzazxSMiwgQT4pID0+IFJlYWRlclRhc2s8UjEgJiBSMiwgQj4gPSBjaGFpblJlYWRlcksgYXMgYW55XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0UmVhZGVySyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdFJlYWRlcktfKEZyb21SZWFkZXIsIENoYWluKVxuXG4vKipcbiAqIExlc3Mgc3RyaWN0IHZlcnNpb24gb2YgW2BjaGFpbkZpcnN0UmVhZGVyS2BdKCNjaGFpbmZpcnN0cmVhZGVyaykuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkZpcnN0UmVhZGVyS1c6IDxBLCBSMSwgQj4oXG4gIGY6IChhOiBBKSA9PiBSLlJlYWRlcjxSMSwgQj5cbikgPT4gPFIyPihtYTogUmVhZGVyVGFzazxSMiwgQT4pID0+IFJlYWRlclRhc2s8UjEgJiBSMiwgQT4gPSBjaGFpbkZpcnN0UmVhZGVySyBhcyBhbnlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBGcm9tVGFzazogRnJvbVRhc2syPFVSST4gPSB7XG4gIFVSSSxcbiAgZnJvbUlPLFxuICBmcm9tVGFza1xufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuNC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tVGFza0sgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZyb21UYXNrS18oRnJvbVRhc2spXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi40LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluVGFza0sgPVxuICAvKiNfX1BVUkVfXyovXG4gIGNoYWluVGFza0tfKEZyb21UYXNrLCBDaGFpbilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluRmlyc3RUYXNrSyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgY2hhaW5GaXJzdFRhc2tLXyhGcm9tVGFzaywgQ2hhaW4pXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRvIG5vdGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBEbzogUmVhZGVyVGFzazx1bmtub3duLCB7fT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWNvcmQpXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBiaW5kVG8gPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRUb18oRnVuY3RvcilcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGJpbmQgPVxuICAvKiNfX1BVUkVfXyovXG4gIGJpbmRfKENoYWluKVxuXG4vKipcbiAqIEBzaW5jZSAyLjguMFxuICovXG5leHBvcnQgY29uc3QgYmluZFc6IDxOIGV4dGVuZHMgc3RyaW5nLCBBLCBSMiwgQj4oXG4gIG5hbWU6IEV4Y2x1ZGU8Tiwga2V5b2YgQT4sXG4gIGY6IChhOiBBKSA9PiBSZWFkZXJUYXNrPFIyLCBCPlxuKSA9PiA8UjE+KFxuICBmYTogUmVhZGVyVGFzazxSMSwgQT5cbikgPT4gUmVhZGVyVGFzazxSMSAmIFIyLCB7IHJlYWRvbmx5IFtLIGluIGtleW9mIEEgfCBOXTogSyBleHRlbmRzIGtleW9mIEEgPyBBW0tdIDogQiB9PiA9IGJpbmQgYXMgYW55XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHBpcGVhYmxlIHNlcXVlbmNlIFNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwUyA9XG4gIC8qI19fUFVSRV9fKi9cbiAgYXBTXyhBcHBseVBhcilcblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGFwU1c6IDxBLCBOIGV4dGVuZHMgc3RyaW5nLCBSMiwgQj4oXG4gIG5hbWU6IEV4Y2x1ZGU8Tiwga2V5b2YgQT4sXG4gIGZiOiBSZWFkZXJUYXNrPFIyLCBCPlxuKSA9PiA8UjE+KFxuICBmYTogUmVhZGVyVGFzazxSMSwgQT5cbikgPT4gUmVhZGVyVGFzazxSMSAmIFIyLCB7IHJlYWRvbmx5IFtLIGluIGtleW9mIEEgfCBOXTogSyBleHRlbmRzIGtleW9mIEEgPyBBW0tdIDogQiB9PiA9IGFwUyBhcyBhbnlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gc2VxdWVuY2UgVFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IEFwVDogUmVhZGVyVGFzazx1bmtub3duLCByZWFkb25seSBbXT4gPVxuICAvKiNfX1BVUkVfXyovXG4gIG9mKF8uZW1wdHlSZWFkb25seUFycmF5KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBhcnJheSB1dGlsc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5Tm9uRW1wdHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4ID0gPEEsIFIsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gUmVhZGVyVGFzazxSLCBCPlxuKTogKChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBSZWFkZXJUYXNrPFIsIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPj4pID0+XG4gIGZsb3coUi50cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChmKSwgUi5tYXAoVC50cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChTSykpKVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5QXJyYXkjdHJhdmVyc2VXaXRoSW5kZXgoQXBwbGljYXRpdmUpYC5cbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXggPSA8QSwgUiwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBSZWFkZXJUYXNrPFIsIEI+XG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkZXJUYXNrPFIsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IGcgPSB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChmKVxuICByZXR1cm4gKGFzKSA9PiAoXy5pc05vbkVtcHR5KGFzKSA/IGcoYXMpIDogQXBUKVxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5Tm9uRW1wdHlBcnJheSN0cmF2ZXJzZVdpdGhJbmRleChBcHBsaWNhdGl2ZVNlcSlgLlxuICpcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlUmVhZG9ubHlOb25FbXB0eUFycmF5V2l0aEluZGV4U2VxID0gPFIsIEEsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gUmVhZGVyVGFzazxSLCBCPlxuKTogKChhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KSA9PiBSZWFkZXJUYXNrPFIsIFJlYWRvbmx5Tm9uRW1wdHlBcnJheTxCPj4pID0+XG4gIGZsb3coUi50cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleChmKSwgUi5tYXAoVC50cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleFNlcShTSykpKVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gYFJlYWRvbmx5QXJyYXkjdHJhdmVyc2VXaXRoSW5kZXgoQXBwbGljYXRpdmVTZXEpYC5cbiAqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXhTZXEgPSA8UiwgQSwgQj4oXG4gIGY6IChpbmRleDogbnVtYmVyLCBhOiBBKSA9PiBSZWFkZXJUYXNrPFIsIEI+XG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkZXJUYXNrPFIsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB7XG4gIGNvbnN0IGcgPSB0cmF2ZXJzZVJlYWRvbmx5Tm9uRW1wdHlBcnJheVdpdGhJbmRleFNlcShmKVxuICByZXR1cm4gKGFzKSA9PiAoXy5pc05vbkVtcHR5KGFzKSA/IGcoYXMpIDogQXBUKVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjkuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VBcnJheVdpdGhJbmRleDogPFIsIEEsIEI+KFxuICBmOiAoaW5kZXg6IG51bWJlciwgYTogQSkgPT4gUmVhZGVyVGFzazxSLCBCPlxuKSA9PiAoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRlclRhc2s8UiwgUmVhZG9ubHlBcnJheTxCPj4gPSB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXhcblxuLyoqXG4gKiBAc2luY2UgMi45LjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlQXJyYXkgPSA8UiwgQSwgQj4oXG4gIGY6IChhOiBBKSA9PiBSZWFkZXJUYXNrPFIsIEI+XG4pOiAoKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkZXJUYXNrPFIsIFJlYWRvbmx5QXJyYXk8Qj4+KSA9PiB0cmF2ZXJzZVJlYWRvbmx5QXJyYXlXaXRoSW5kZXgoKF8sIGEpID0+IGYoYSkpXG5cbi8qKlxuICogQHNpbmNlIDIuOS4wXG4gKi9cbmV4cG9ydCBjb25zdCBzZXF1ZW5jZUFycmF5OiA8UiwgQT4oYXJyOiBSZWFkb25seUFycmF5PFJlYWRlclRhc2s8UiwgQT4+KSA9PiBSZWFkZXJUYXNrPFIsIFJlYWRvbmx5QXJyYXk8QT4+ID1cbiAgLyojX19QVVJFX18qL1xuICB0cmF2ZXJzZUFycmF5KGlkZW50aXR5KVxuXG4vKipcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHRyYXZlcnNlU2VxQXJyYXlXaXRoSW5kZXg6IDxSLCBBLCBCPihcbiAgZjogKGluZGV4OiBudW1iZXIsIGE6IEEpID0+IFJlYWRlclRhc2s8UiwgQj5cbikgPT4gKGFzOiBSZWFkb25seUFycmF5PEE+KSA9PiBSZWFkZXJUYXNrPFIsIFJlYWRvbmx5QXJyYXk8Qj4+ID0gdHJhdmVyc2VSZWFkb25seUFycmF5V2l0aEluZGV4U2VxXG5cbi8qKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgdHJhdmVyc2VTZXFBcnJheSA9IDxSLCBBLCBCPihcbiAgZjogKGE6IEEpID0+IFJlYWRlclRhc2s8UiwgQj5cbik6ICgoYXM6IFJlYWRvbmx5QXJyYXk8QT4pID0+IFJlYWRlclRhc2s8UiwgUmVhZG9ubHlBcnJheTxCPj4pID0+IHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleFNlcSgoXywgYSkgPT4gZihhKSlcblxuLyoqXG4gKiBVc2UgYHRyYXZlcnNlUmVhZG9ubHlBcnJheVdpdGhJbmRleFNlcWAgaW5zdGVhZC5cbiAqXG4gKiBAc2luY2UgMi4xMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2VTZXFBcnJheTogPFIsIEE+KGFycjogUmVhZG9ubHlBcnJheTxSZWFkZXJUYXNrPFIsIEE+PikgPT4gUmVhZGVyVGFzazxSLCBSZWFkb25seUFycmF5PEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgdHJhdmVyc2VTZXFBcnJheShpZGVudGl0eSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb25cblxuLyoqXG4gKiBVc2Ugc21hbGwsIHNwZWNpZmljIGluc3RhbmNlcyBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjMuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWRlclRhc2s6IE1vbmFkVGFzazI8VVJJPiA9IHtcbiAgVVJJLFxuICBtYXA6IF9tYXAsXG4gIG9mLFxuICBhcDogX2FwUGFyLFxuICBjaGFpbjogX2NoYWluLFxuICBmcm9tSU8sXG4gIGZyb21UYXNrXG59XG5cbi8qKlxuICogVXNlIHNtYWxsLCBzcGVjaWZpYyBpbnN0YW5jZXMgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cblxuZXhwb3J0IGNvbnN0IHJlYWRlclRhc2tTZXE6IHR5cGVvZiByZWFkZXJUYXNrID0ge1xuICBVUkksXG4gIG1hcDogX21hcCxcbiAgb2YsXG4gIGFwOiBfYXBTZXEsXG4gIGNoYWluOiBfY2hhaW4sXG4gIGZyb21JTyxcbiAgZnJvbVRhc2tcbn1cblxuLyoqXG4gKiBVc2UgW2BnZXRBcHBseVNlbWlncm91cGBdKC4vQXBwbHkudHMuaHRtbCNnZXRhcHBseXNlbWlncm91cCkgaW5zdGVhZC5cbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRTZW1pZ3JvdXA6IDxSLCBBPihTOiBTZW1pZ3JvdXA8QT4pID0+IFNlbWlncm91cDxSZWFkZXJUYXNrPFIsIEE+PiA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZ2V0QXBwbHlTZW1pZ3JvdXBfKEFwcGx5U2VxKVxuXG4vKipcbiAqIFVzZSBbYGdldEFwcGxpY2F0aXZlTW9ub2lkYF0oLi9BcHBsaWNhdGl2ZS50cy5odG1sI2dldGFwcGxpY2F0aXZlbW9ub2lkKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjMuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGdldE1vbm9pZDogPFIsIEE+KE06IE1vbm9pZDxBPikgPT4gTW9ub2lkPFJlYWRlclRhc2s8UiwgQT4+ID1cbiAgLyojX19QVVJFX18qL1xuICBnZXRBcHBsaWNhdGl2ZU1vbm9pZChBcHBsaWNhdGl2ZVNlcSlcblxuLyoqXG4gKiBAc2luY2UgMi40LjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5leHBvcnQgZnVuY3Rpb24gcnVuPFIsIEE+KG1hOiBSZWFkZXJUYXNrPFIsIEE+LCByOiBSKTogUHJvbWlzZTxBPiB7XG4gIHJldHVybiBtYShyKSgpXG59XG4iXX0=
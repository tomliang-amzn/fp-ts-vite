"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApply = exports.getApplicative = exports.flap = exports.execute = exports.execWriter = exports.evaluate = exports.evalWriter = exports.censor = exports.URI = exports.Functor = void 0;
exports.getChain = getChain;
exports.getMonad = getMonad;
exports.writer = exports.tell = exports.pass = exports.map = exports.listens = exports.listen = exports.getPointed = void 0;

var _function = require("./function");

var _Functor = require("./Functor");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Appends a value to the accumulator
 *
 * @category combinators
 * @since 2.0.0
 */
var tell = function tell(w) {
  return function () {
    return [undefined, w];
  };
};
/**
 * Modifies the result to include the changes to the accumulator
 *
 * @category combinators
 * @since 2.0.0
 */


exports.tell = tell;

var listen = function listen(fa) {
  return function () {
    var _fa = fa(),
        _fa2 = _slicedToArray(_fa, 2),
        a = _fa2[0],
        w = _fa2[1];

    return [[a, w], w];
  };
};
/**
 * Applies the returned function to the accumulator
 *
 * @category combinators
 * @since 2.0.0
 */


exports.listen = listen;

var pass = function pass(fa) {
  return function () {
    var _fa3 = fa(),
        _fa4 = _slicedToArray(_fa3, 2),
        _fa4$ = _slicedToArray(_fa4[0], 2),
        a = _fa4$[0],
        f = _fa4$[1],
        w = _fa4[1];

    return [a, f(w)];
  };
};
/**
 * Projects a value from modifications made to the accumulator during an action
 *
 * @category combinators
 * @since 2.0.0
 */


exports.pass = pass;

var listens = function listens(f) {
  return function (fa) {
    return function () {
      var _fa5 = fa(),
          _fa6 = _slicedToArray(_fa5, 2),
          a = _fa6[0],
          w = _fa6[1];

      return [[a, f(w)], w];
    };
  };
};
/**
 * Modify the final accumulator value by applying a function
 *
 * @category combinators
 * @since 2.0.0
 */


exports.listens = listens;

var censor = function censor(f) {
  return function (fa) {
    return function () {
      var _fa7 = fa(),
          _fa8 = _slicedToArray(_fa7, 2),
          a = _fa8[0],
          w = _fa8[1];

      return [a, f(w)];
    };
  };
}; // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------

/* istanbul ignore next */


exports.censor = censor;

var _map = function _map(fa, f) {
  return (0, _function.pipe)(fa, map(f));
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
      var _fa9 = fa(),
          _fa10 = _slicedToArray(_fa9, 2),
          a = _fa10[0],
          w = _fa10[1];

      return [f(a), w];
    };
  };
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */


exports.map = map;
var URI = 'Writer';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.10.0
 */
var getPointed = function getPointed(M) {
  return {
    URI: URI,
    _E: undefined,
    of: function of(a) {
      return function () {
        return [a, M.empty];
      };
    }
  };
};
/**
 * @category instances
 * @since 2.10.0
 */


exports.getPointed = getPointed;

var getApply = function getApply(S) {
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: function ap(fab, fa) {
      return function () {
        var _fab = fab(),
            _fab2 = _slicedToArray(_fab, 2),
            f = _fab2[0],
            w1 = _fab2[1];

        var _fa11 = fa(),
            _fa12 = _slicedToArray(_fa11, 2),
            a = _fa12[0],
            w2 = _fa12[1];

        return [f(a), S.concat(w1, w2)];
      };
    }
  };
};
/**
 * @category instances
 * @since 2.10.0
 */


exports.getApply = getApply;

var getApplicative = function getApplicative(M) {
  var A = getApply(M);
  var P = getPointed(M);
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: A.ap,
    of: P.of
  };
};
/**
 * @category instances
 * @since 2.10.0
 */


exports.getApplicative = getApplicative;

function getChain(M) {
  var A = getApply(M);
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: A.ap,
    chain: function chain(fa, f) {
      return function () {
        var _fa13 = fa(),
            _fa14 = _slicedToArray(_fa13, 2),
            a = _fa14[0],
            w1 = _fa14[1];

        var _f = f(a)(),
            _f2 = _slicedToArray(_f, 2),
            b = _f2[0],
            w2 = _f2[1];

        return [b, M.concat(w1, w2)];
      };
    }
  };
}
/**
 * @category instances
 * @since 2.0.0
 */


function getMonad(M) {
  var A = getApplicative(M);
  var C = getChain(M);
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    ap: A.ap,
    of: A.of,
    chain: C.chain
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
var flap = /*#__PURE__*/(0, _Functor.flap)(Functor); // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

/**
 * @since 2.8.0
 */

exports.flap = flap;

var evaluate = function evaluate(fa) {
  return fa()[0];
};
/**
 * @since 2.8.0
 */


exports.evaluate = evaluate;

var execute = function execute(fa) {
  return fa()[1];
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`evaluate`](#evaluate) instead
 *
 * @since 2.0.0
 * @deprecated
 */


exports.execute = execute;

var evalWriter = function evalWriter(fa) {
  return fa()[0];
};
/**
 * Use [`execute`](#execute) instead
 *
 * @since 2.0.0
 * @deprecated
 */


exports.evalWriter = evalWriter;

var execWriter = function execWriter(fa) {
  return fa()[1];
};
/**
 * Use [`Functor`](#functor) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */


exports.execWriter = execWriter;
var writer = Functor;
exports.writer = writer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9Xcml0ZXIudHMiXSwibmFtZXMiOlsidGVsbCIsInciLCJ1bmRlZmluZWQiLCJsaXN0ZW4iLCJmYSIsImEiLCJwYXNzIiwiZiIsImxpc3RlbnMiLCJjZW5zb3IiLCJfbWFwIiwibWFwIiwiVVJJIiwiZ2V0UG9pbnRlZCIsIk0iLCJfRSIsIm9mIiwiZW1wdHkiLCJnZXRBcHBseSIsIlMiLCJhcCIsImZhYiIsIncxIiwidzIiLCJjb25jYXQiLCJnZXRBcHBsaWNhdGl2ZSIsIkEiLCJQIiwiZ2V0Q2hhaW4iLCJjaGFpbiIsImIiLCJnZXRNb25hZCIsIkMiLCJGdW5jdG9yIiwiZmxhcCIsImV2YWx1YXRlIiwiZXhlY3V0ZSIsImV2YWxXcml0ZXIiLCJleGVjV3JpdGVyIiwid3JpdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxJQUFrQyxHQUFHLFNBQXJDQSxJQUFxQyxDQUFDQyxDQUFEO0FBQUEsU0FBTztBQUFBLFdBQU0sQ0FBQ0MsU0FBRCxFQUFZRCxDQUFaLENBQU47QUFBQSxHQUFQO0FBQUEsQ0FBM0M7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTUUsTUFBcUQsR0FBRyxTQUF4REEsTUFBd0QsQ0FBQ0MsRUFBRDtBQUFBLFNBQVEsWUFBTTtBQUNqRixjQUFlQSxFQUFFLEVBQWpCO0FBQUE7QUFBQSxRQUFPQyxDQUFQO0FBQUEsUUFBVUosQ0FBVjs7QUFDQSxXQUFPLENBQUMsQ0FBQ0ksQ0FBRCxFQUFJSixDQUFKLENBQUQsRUFBU0EsQ0FBVCxDQUFQO0FBQ0QsR0FIb0U7QUFBQSxDQUE5RDtBQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNSyxJQUE2RCxHQUFHLFNBQWhFQSxJQUFnRSxDQUFDRixFQUFEO0FBQUEsU0FB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LEdBQUcsU0FBekNBLE9BQXlDLENBQUNoQyxFQUFEO0FBQUEsU0FBUUEsRUFBRSxHQUFHLENBQUgsQ0FBVjtBQUFBLENBQS9DLEMsQ0FFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1pQyxVQUF5QyxHQUFHLFNBQTVDQSxVQUE0QyxDQUFDakMsRUFBRDtBQUFBLFNBQVFBLEVBQUUsR0FBRyxDQUFILENBQVY7QUFBQSxDQUFsRDtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNa0MsVUFBeUMsR0FBRyxTQUE1Q0EsVUFBNEMsQ0FBQ2xDLEVBQUQ7QUFBQSxTQUFRQSxFQUFFLEdBQUcsQ0FBSCxDQUFWO0FBQUEsQ0FBbEQ7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1tQyxNQUFxQixHQUFHTixPQUE5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IEFwcGxpY2F0aXZlMkMgfSBmcm9tICcuL0FwcGxpY2F0aXZlJ1xuaW1wb3J0IHsgQXBwbHkyQyB9IGZyb20gJy4vQXBwbHknXG5pbXBvcnQgeyBDaGFpbjJDIH0gZnJvbSAnLi9DaGFpbidcbmltcG9ydCB7IHBpcGUgfSBmcm9tICcuL2Z1bmN0aW9uJ1xuaW1wb3J0IHsgZmxhcCBhcyBmbGFwXywgRnVuY3RvcjIgfSBmcm9tICcuL0Z1bmN0b3InXG5pbXBvcnQgeyBNb25hZDJDIH0gZnJvbSAnLi9Nb25hZCdcbmltcG9ydCB7IE1vbm9pZCB9IGZyb20gJy4vTW9ub2lkJ1xuaW1wb3J0IHsgUG9pbnRlZDJDIH0gZnJvbSAnLi9Qb2ludGVkJ1xuaW1wb3J0IHsgU2VtaWdyb3VwIH0gZnJvbSAnLi9TZW1pZ3JvdXAnXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG1vZGVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IG1vZGVsXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBXcml0ZXI8VywgQT4ge1xuICAoKTogW0EsIFddXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbWJpbmF0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQXBwZW5kcyBhIHZhbHVlIHRvIHRoZSBhY2N1bXVsYXRvclxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB0ZWxsOiA8Vz4odzogVykgPT4gV3JpdGVyPFcsIHZvaWQ+ID0gKHcpID0+ICgpID0+IFt1bmRlZmluZWQsIHddXG5cbi8qKlxuICogTW9kaWZpZXMgdGhlIHJlc3VsdCB0byBpbmNsdWRlIHRoZSBjaGFuZ2VzIHRvIHRoZSBhY2N1bXVsYXRvclxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsaXN0ZW46IDxXLCBBPihmYTogV3JpdGVyPFcsIEE+KSA9PiBXcml0ZXI8VywgW0EsIFddPiA9IChmYSkgPT4gKCkgPT4ge1xuICBjb25zdCBbYSwgd10gPSBmYSgpXG4gIHJldHVybiBbW2EsIHddLCB3XVxufVxuXG4vKipcbiAqIEFwcGxpZXMgdGhlIHJldHVybmVkIGZ1bmN0aW9uIHRvIHRoZSBhY2N1bXVsYXRvclxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBwYXNzOiA8VywgQT4oZmE6IFdyaXRlcjxXLCBbQSwgKHc6IFcpID0+IFddPikgPT4gV3JpdGVyPFcsIEE+ID0gKGZhKSA9PiAoKSA9PiB7XG4gIGNvbnN0IFtbYSwgZl0sIHddID0gZmEoKVxuICByZXR1cm4gW2EsIGYodyldXG59XG5cbi8qKlxuICogUHJvamVjdHMgYSB2YWx1ZSBmcm9tIG1vZGlmaWNhdGlvbnMgbWFkZSB0byB0aGUgYWNjdW11bGF0b3IgZHVyaW5nIGFuIGFjdGlvblxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsaXN0ZW5zOiA8VywgQj4oZjogKHc6IFcpID0+IEIpID0+IDxBPihmYTogV3JpdGVyPFcsIEE+KSA9PiBXcml0ZXI8VywgW0EsIEJdPiA9IChmKSA9PiAoZmEpID0+ICgpID0+IHtcbiAgY29uc3QgW2EsIHddID0gZmEoKVxuICByZXR1cm4gW1thLCBmKHcpXSwgd11cbn1cblxuLyoqXG4gKiBNb2RpZnkgdGhlIGZpbmFsIGFjY3VtdWxhdG9yIHZhbHVlIGJ5IGFwcGx5aW5nIGEgZnVuY3Rpb25cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY2Vuc29yOiA8Vz4oZjogKHc6IFcpID0+IFcpID0+IDxBPihmYTogV3JpdGVyPFcsIEE+KSA9PiBXcml0ZXI8VywgQT4gPSAoZikgPT4gKGZhKSA9PiAoKSA9PiB7XG4gIGNvbnN0IFthLCB3XSA9IGZhKClcbiAgcmV0dXJuIFthLCBmKHcpXVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBub24tcGlwZWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBfbWFwOiBGdW5jdG9yMjxVUkk+WydtYXAnXSA9IChmYSwgZikgPT4gcGlwZShmYSwgbWFwKGYpKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB0eXBlIGNsYXNzIG1lbWJlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBgbWFwYCBjYW4gYmUgdXNlZCB0byB0dXJuIGZ1bmN0aW9ucyBgKGE6IEEpID0+IEJgIGludG8gZnVuY3Rpb25zIGAoZmE6IEY8QT4pID0+IEY8Qj5gIHdob3NlIGFyZ3VtZW50IGFuZCByZXR1cm4gdHlwZXNcbiAqIHVzZSB0aGUgdHlwZSBjb25zdHJ1Y3RvciBgRmAgdG8gcmVwcmVzZW50IHNvbWUgY29tcHV0YXRpb25hbCBjb250ZXh0LlxuICpcbiAqIEBjYXRlZ29yeSBGdW5jdG9yXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcDogPEEsIEI+KGY6IChhOiBBKSA9PiBCKSA9PiA8RT4oZmE6IFdyaXRlcjxFLCBBPikgPT4gV3JpdGVyPEUsIEI+ID0gKGYpID0+IChmYSkgPT4gKCkgPT4ge1xuICBjb25zdCBbYSwgd10gPSBmYSgpXG4gIHJldHVybiBbZihhKSwgd11cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnV3JpdGVyJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBVUkkgPSB0eXBlb2YgVVJJXG5cbmRlY2xhcmUgbW9kdWxlICcuL0hLVCcge1xuICBpbnRlcmZhY2UgVVJJdG9LaW5kMjxFLCBBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IFdyaXRlcjxFLCBBPlxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0UG9pbnRlZCA9IDxXPihNOiBNb25vaWQ8Vz4pOiBQb2ludGVkMkM8VVJJLCBXPiA9PiAoe1xuICBVUkksXG4gIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICBvZjogKGEpID0+ICgpID0+IFthLCBNLmVtcHR5XVxufSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRBcHBseSA9IDxXPihTOiBTZW1pZ3JvdXA8Vz4pOiBBcHBseTJDPFVSSSwgVz4gPT4gKHtcbiAgVVJJLFxuICBfRTogdW5kZWZpbmVkIGFzIGFueSxcbiAgbWFwOiBfbWFwLFxuICBhcDogKGZhYiwgZmEpID0+ICgpID0+IHtcbiAgICBjb25zdCBbZiwgdzFdID0gZmFiKClcbiAgICBjb25zdCBbYSwgdzJdID0gZmEoKVxuICAgIHJldHVybiBbZihhKSwgUy5jb25jYXQodzEsIHcyKV1cbiAgfVxufSlcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRBcHBsaWNhdGl2ZSA9IDxXPihNOiBNb25vaWQ8Vz4pOiBBcHBsaWNhdGl2ZTJDPFVSSSwgVz4gPT4ge1xuICBjb25zdCBBID0gZ2V0QXBwbHkoTSlcbiAgY29uc3QgUCA9IGdldFBvaW50ZWQoTSlcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIGFwOiBBLmFwLFxuICAgIG9mOiBQLm9mXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFpbjxXPihNOiBNb25vaWQ8Vz4pOiBDaGFpbjJDPFVSSSwgVz4ge1xuICBjb25zdCBBID0gZ2V0QXBwbHkoTSlcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIGFwOiBBLmFwLFxuICAgIGNoYWluOiAoZmEsIGYpID0+ICgpID0+IHtcbiAgICAgIGNvbnN0IFthLCB3MV0gPSBmYSgpXG4gICAgICBjb25zdCBbYiwgdzJdID0gZihhKSgpXG4gICAgICByZXR1cm4gW2IsIE0uY29uY2F0KHcxLCB3MildXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb25hZDxXPihNOiBNb25vaWQ8Vz4pOiBNb25hZDJDPFVSSSwgVz4ge1xuICBjb25zdCBBID0gZ2V0QXBwbGljYXRpdmUoTSlcbiAgY29uc3QgQyA9IGdldENoYWluKE0pXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogX21hcCxcbiAgICBhcDogQS5hcCxcbiAgICBvZjogQS5vZixcbiAgICBjaGFpbjogQy5jaGFpblxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGdW5jdG9yOiBGdW5jdG9yMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcFxufVxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBGdW5jdG9yYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXAgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZsYXBfKEZ1bmN0b3IpXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuOC4wXG4gKi9cbmV4cG9ydCBjb25zdCBldmFsdWF0ZTogPFcsIEE+KGZhOiBXcml0ZXI8VywgQT4pID0+IEEgPSAoZmEpID0+IGZhKClbMF1cblxuLyoqXG4gKiBAc2luY2UgMi44LjBcbiAqL1xuZXhwb3J0IGNvbnN0IGV4ZWN1dGU6IDxXLCBBPihmYTogV3JpdGVyPFcsIEE+KSA9PiBXID0gKGZhKSA9PiBmYSgpWzFdXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGRlcHJlY2F0ZWRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBVc2UgW2BldmFsdWF0ZWBdKCNldmFsdWF0ZSkgaW5zdGVhZFxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGV2YWxXcml0ZXI6IDxXLCBBPihmYTogV3JpdGVyPFcsIEE+KSA9PiBBID0gKGZhKSA9PiBmYSgpWzBdXG5cbi8qKlxuICogVXNlIFtgZXhlY3V0ZWBdKCNleGVjdXRlKSBpbnN0ZWFkXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZXhlY1dyaXRlcjogPFcsIEE+KGZhOiBXcml0ZXI8VywgQT4pID0+IFcgPSAoZmEpID0+IGZhKClbMV1cblxuLyoqXG4gKiBVc2UgW2BGdW5jdG9yYF0oI2Z1bmN0b3IpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3Qgd3JpdGVyOiBGdW5jdG9yMjxVUkk+ID0gRnVuY3RvclxuIl19
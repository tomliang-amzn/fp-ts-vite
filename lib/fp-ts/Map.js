"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URI = exports.Functor = exports.Filterable = exports.Compactable = void 0;
exports.collect = collect;
exports.filterMapWithIndex = exports.filterMap = exports.filter = exports.empty = exports.elem = exports.difference = exports.deleteAt = exports.compact = void 0;
exports.filterWithIndex = filterWithIndex;
exports.foldMapWithIndex = exports.foldMap = exports.flap = void 0;
exports.fromFoldable = fromFoldable;
exports.getEq = exports.getDifferenceMagma = void 0;
exports.getFilterableWithIndex = getFilterableWithIndex;
exports.getIntersectionSemigroup = exports.getFoldableWithIndex = exports.getFoldable = void 0;
exports.getMonoid = getMonoid;
exports.getUnionSemigroup = exports.getUnionMonoid = exports.getTraversableWithIndex = exports.getShow = void 0;
exports.getWitherable = getWitherable;
exports.lookup = exports.keys = exports.isSubmap = exports.isEmpty = exports.intersection = exports.insertAt = void 0;
exports.lookupWithKey = lookupWithKey;
exports.partitionMapWithIndex = exports.partitionMap = exports.partition = exports.modifyAt = exports.member = exports.map_ = exports.mapWithIndex = exports.map = void 0;
exports.partitionWithIndex = partitionWithIndex;
exports.pop = pop;
exports.size = exports.singleton = exports.separate = exports.reduceWithIndex = exports.reduceRightWithIndex = exports.reduceRight = exports.reduce = void 0;
exports.toArray = toArray;
exports.toUnfoldable = toUnfoldable;
exports.values = exports.upsertAt = exports.updateAt = exports.union = void 0;

var _function = require("./function");

var _Functor = require("./Functor");

var _ = _interopRequireWildcard(require("./internal"));

var O = _interopRequireWildcard(require("./Option"));

var RM = _interopRequireWildcard(require("./ReadonlyMap"));

var _Separated = require("./Separated");

var _Witherable = require("./Witherable");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Option = O.Option;
/**
 * @category instances
 * @since 2.0.0
 */

var getShow = RM.getShow;
/**
 * Calculate the number of key/value pairs in a map
 *
 * @since 2.0.0
 */

exports.getShow = getShow;
var size = RM.size;
/**
 * Test whether or not a map is empty
 *
 * @since 2.0.0
 */

exports.size = size;
var isEmpty = RM.isEmpty; // TODO: remove non-curried overloading in v3

/**
 * Test whether or not a key exists in a map
 *
 * @since 2.0.0
 */

exports.isEmpty = isEmpty;
var member = RM.member; // TODO: remove non-curried overloading in v3

/**
 * Test whether or not a value is a member of a map
 *
 * @since 2.0.0
 */

exports.member = member;
var elem = RM.elem;
/**
 * Get a sorted `Array` of the keys contained in a `Map`.
 *
 * @since 2.0.0
 */

exports.elem = elem;

var keys = function keys(O) {
  return function (m) {
    return Array.from(m.keys()).sort(O.compare);
  };
};
/**
 * Get a sorted `Array` of the values contained in a `Map`.
 *
 * @since 2.0.0
 */


exports.keys = keys;

var values = function values(O) {
  return function (m) {
    return Array.from(m.values()).sort(O.compare);
  };
};
/**
 * @since 2.0.0
 */


exports.values = values;

function collect(O) {
  var keysO = keys(O);
  return function (f) {
    return function (m) {
      var out = [];
      var ks = keysO(m);

      var _iterator = _createForOfIteratorHelper(ks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          out.push(f(key, m.get(key)));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return out;
    };
  };
}
/**
 * Get a sorted `Array` of the key/value pairs contained in a `Map`.
 *
 * @since 2.0.0
 */


function toArray(O) {
  return collect(O)(function (k, a) {
    return [k, a];
  });
}
/**
 * Unfolds a map into a list of key/value pairs
 *
 * @since 2.0.0
 */


function toUnfoldable(ord, U) {
  var toArrayO = toArray(ord);
  return function (d) {
    var kas = toArrayO(d);
    var len = kas.length;
    return U.unfold(0, function (b) {
      return b < len ? _.some([kas[b], b + 1]) : _.none;
    });
  };
}
/**
 * Insert or replace a key/value pair in a `Map`.
 *
 * @category combinators
 * @since 2.0.0
 */


var upsertAt = function upsertAt(E) {
  var lookupWithKeyE = lookupWithKey(E);
  return function (k, a) {
    var lookupWithKeyEk = lookupWithKeyE(k);
    return function (m) {
      var found = lookupWithKeyEk(m);

      if (_.isNone(found)) {
        var out = new Map(m);
        out.set(k, a);
        return out;
      } else if (found.value[1] !== a) {
        var _out = new Map(m);

        _out.set(found.value[0], a);

        return _out;
      }

      return m;
    };
  };
};
/**
 * Delete a key and value from a map
 *
 * @category combinators
 * @since 2.0.0
 */


exports.upsertAt = upsertAt;

var deleteAt = function deleteAt(E) {
  var lookupWithKeyE = lookupWithKey(E);
  return function (k) {
    return function (m) {
      var found = lookupWithKeyE(k, m);

      if (_.isSome(found)) {
        var r = new Map(m);
        r["delete"](found.value[0]);
        return r;
      }

      return m;
    };
  };
};
/**
 * @since 2.0.0
 */


exports.deleteAt = deleteAt;

var updateAt = function updateAt(E) {
  var modifyAtE = modifyAt(E);
  return function (k, a) {
    return modifyAtE(k, function () {
      return a;
    });
  };
};
/**
 * @since 2.0.0
 */


exports.updateAt = updateAt;

var modifyAt = function modifyAt(E) {
  var lookupWithKeyE = lookupWithKey(E);
  return function (k, f) {
    return function (m) {
      var found = lookupWithKeyE(k, m);

      if (_.isNone(found)) {
        return _.none;
      }

      var r = new Map(m);
      r.set(found.value[0], f(found.value[1]));
      return _.some(r);
    };
  };
};
/**
 * Delete a key and value from a map, returning the value as well as the subsequent map
 *
 * @since 2.0.0
 */


exports.modifyAt = modifyAt;

function pop(E) {
  var lookupE = lookup(E);
  var deleteAtE = deleteAt(E);
  return function (k) {
    var deleteAtEk = deleteAtE(k);
    return function (m) {
      return (0, _function.pipe)(lookupE(k, m), O.map(function (a) {
        return [a, deleteAtEk(m)];
      }));
    };
  };
}

function lookupWithKey(E) {
  return function (k, m) {
    if (m === undefined) {
      var lookupWithKeyE = lookupWithKey(E);
      return function (m) {
        return lookupWithKeyE(k, m);
      };
    }

    var entries = m.entries();
    var e; // tslint:disable-next-line: strict-boolean-expressions

    while (!(e = entries.next()).done) {
      var _e$value = _slicedToArray(e.value, 2),
          ka = _e$value[0],
          _a = _e$value[1];

      if (E.equals(ka, k)) {
        return _.some([ka, _a]);
      }
    }

    return _.none;
  };
} // TODO: remove non-curried overloading in v3

/**
 * Lookup the value for a key in a `Map`.
 *
 * @since 2.0.0
 */


var lookup = RM.lookup; // TODO: remove non-curried overloading in v3

/**
 * Test whether or not one `Map` contains all of the keys and values contained in another `Map`
 *
 * @since 2.0.0
 */

exports.lookup = lookup;
var isSubmap = RM.isSubmap;
/**
 * @category instances
 * @since 2.0.0
 */

exports.isSubmap = isSubmap;
var getEq = RM.getEq;
/**
 * Gets `Monoid` instance for Maps given `Semigroup` instance for their values
 *
 * @category instances
 * @since 2.0.0
 */

exports.getEq = getEq;

function getMonoid(SK, SA) {
  var lookupWithKeyS = lookupWithKey(SK);
  return {
    concat: function concat(mx, my) {
      if (isEmpty(mx)) {
        return my;
      }

      if (isEmpty(my)) {
        return mx;
      }

      var r = new Map(mx);
      var entries = my.entries();
      var e; // tslint:disable-next-line: strict-boolean-expressions

      while (!(e = entries.next()).done) {
        var _e$value2 = _slicedToArray(e.value, 2),
            _k = _e$value2[0],
            _a2 = _e$value2[1];

        var mxOptA = lookupWithKeyS(_k, mx);

        if (_.isSome(mxOptA)) {
          r.set(mxOptA.value[0], SA.concat(mxOptA.value[1], _a2));
        } else {
          r.set(_k, _a2);
        }
      }

      return r;
    },
    empty: new Map()
  };
}
/**
 * Create a map with one key/value pair
 *
 * @since 2.0.0
 */


var singleton = function singleton(k, a) {
  return new Map([[k, a]]);
};
/**
 * Create a map from a foldable collection of key/value pairs, using the
 * specified `Magma` to combine values for duplicate keys.
 *
 * @category constructors
 * @since 2.0.0
 */


exports.singleton = singleton;

function fromFoldable(E, M, F) {
  return function (fka) {
    var lookupWithKeyE = lookupWithKey(E);
    return F.reduce(fka, new Map(), function (b, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          a = _ref2[1];

      var bOpt = lookupWithKeyE(k, b);

      if (_.isSome(bOpt)) {
        b.set(bOpt.value[0], M.concat(bOpt.value[1], a));
      } else {
        b.set(k, a);
      }

      return b;
    });
  };
}

var _mapWithIndex = function _mapWithIndex(fa, f) {
  var m = new Map();
  var entries = fa.entries();
  var e; // tslint:disable-next-line: strict-boolean-expressions

  while (!(e = entries.next()).done) {
    var _e$value3 = _slicedToArray(e.value, 2),
        key = _e$value3[0],
        _a3 = _e$value3[1];

    m.set(key, f(key, _a3));
  }

  return m;
};
/**
 * @category combinators
 * @since 2.10.0
 */


var partitionMapWithIndex = function partitionMapWithIndex(f) {
  return function (fa) {
    var left = new Map();
    var right = new Map();
    var entries = fa.entries();
    var e; // tslint:disable-next-line: strict-boolean-expressions

    while (!(e = entries.next()).done) {
      var _e$value4 = _slicedToArray(e.value, 2),
          _k2 = _e$value4[0],
          _a4 = _e$value4[1];

      var ei = f(_k2, _a4);

      if (_.isLeft(ei)) {
        left.set(_k2, ei.left);
      } else {
        right.set(_k2, ei.right);
      }
    }

    return (0, _Separated.separated)(left, right);
  };
};
/**
 * @category combinators
 * @since 2.10.0
 */


exports.partitionMapWithIndex = partitionMapWithIndex;

function partitionWithIndex(predicateWithIndex) {
  return function (fa) {
    var left = new Map();
    var right = new Map();
    var entries = fa.entries();
    var e; // tslint:disable-next-line: strict-boolean-expressions

    while (!(e = entries.next()).done) {
      var _e$value5 = _slicedToArray(e.value, 2),
          _k3 = _e$value5[0],
          _a5 = _e$value5[1];

      if (predicateWithIndex(_k3, _a5)) {
        right.set(_k3, _a5);
      } else {
        left.set(_k3, _a5);
      }
    }

    return (0, _Separated.separated)(left, right);
  };
}
/**
 * @category combinators
 * @since 2.10.0
 */


var filterMapWithIndex = function filterMapWithIndex(f) {
  return function (fa) {
    var m = new Map();
    var entries = fa.entries();
    var e; // tslint:disable-next-line: strict-boolean-expressions

    while (!(e = entries.next()).done) {
      var _e$value6 = _slicedToArray(e.value, 2),
          _k4 = _e$value6[0],
          _a6 = _e$value6[1];

      var o = f(_k4, _a6);

      if (_.isSome(o)) {
        m.set(_k4, o.value);
      }
    }

    return m;
  };
};
/**
 * @category combinators
 * @since 2.10.0
 */


exports.filterMapWithIndex = filterMapWithIndex;

function filterWithIndex(p) {
  return function (m) {
    var out = new Map();
    var entries = m.entries();
    var e; // tslint:disable-next-line: strict-boolean-expressions

    while (!(e = entries.next()).done) {
      var _e$value7 = _slicedToArray(e.value, 2),
          _k5 = _e$value7[0],
          _a7 = _e$value7[1];

      if (p(_k5, _a7)) {
        out.set(_k5, _a7);
      }
    }

    return out;
  };
} // -------------------------------------------------------------------------------------
// non-pipeables
// -------------------------------------------------------------------------------------


var _map = function _map(fa, f) {
  return _mapWithIndex(fa, function (_, a) {
    return f(a);
  });
};

var _filter = function _filter(fa, p) {
  return _filterWithIndex(fa, function (_, a) {
    return p(a);
  });
};

var _filterMap = function _filterMap(fa, f) {
  return _filterMapWithIndex(fa, function (_, a) {
    return f(a);
  });
};

var _partition = function _partition(fa, predicate) {
  return _partitionWithIndex(fa, function (_, a) {
    return predicate(a);
  });
};

var _partitionMap = function _partitionMap(fa, f) {
  return _partitionMapWithIndex(fa, function (_, a) {
    return f(a);
  });
};

var _filterWithIndex = function _filterWithIndex(fa, p) {
  return (0, _function.pipe)(fa, filterWithIndex(p));
};

var _filterMapWithIndex = function _filterMapWithIndex(fa, f) {
  return (0, _function.pipe)(fa, filterMapWithIndex(f));
};

var _partitionWithIndex = function _partitionWithIndex(fa, p) {
  return (0, _function.pipe)(fa, partitionWithIndex(p));
};

var _partitionMapWithIndex = function _partitionMapWithIndex(fa, f) {
  return (0, _function.pipe)(fa, partitionMapWithIndex(f));
}; // -------------------------------------------------------------------------------------
// type class members
// -------------------------------------------------------------------------------------

/**
 * @category Compactable
 * @since 2.0.0
 */


var compact = function compact(fa) {
  var m = new Map();
  var entries = fa.entries();
  var e; // tslint:disable-next-line: strict-boolean-expressions

  while (!(e = entries.next()).done) {
    var _e$value8 = _slicedToArray(e.value, 2),
        _k6 = _e$value8[0],
        oa = _e$value8[1];

    if (_.isSome(oa)) {
      m.set(_k6, oa.value);
    }
  }

  return m;
};
/**
 * @category Filterable
 * @since 2.0.0
 */


exports.compact = compact;

var filter = function filter(predicate) {
  return function (fa) {
    return _filter(fa, predicate);
  };
};
/**
 * @category Filterable
 * @since 2.0.0
 */


exports.filter = filter;

var filterMap = function filterMap(f) {
  return function (fa) {
    return _filterMap(fa, f);
  };
};
/**
 * `map` can be used to turn functions `(a: A) => B` into functions `(fa: F<A>) => F<B>` whose argument and return types
 * use the type constructor `F` to represent some computational context.
 *
 * @category Functor
 * @since 2.0.0
 */


exports.filterMap = filterMap;

var map = function map(f) {
  return function (fa) {
    return _map(fa, f);
  };
};
/**
 * @category FunctorWithIndex
 * @since 2.7.1
 */


exports.map = map;

var mapWithIndex = function mapWithIndex(f) {
  return function (fa) {
    return _mapWithIndex(fa, f);
  };
};
/**
 * @category Filterable
 * @since 2.0.0
 */


exports.mapWithIndex = mapWithIndex;

var partition = function partition(predicate) {
  return function (fa) {
    return _partition(fa, predicate);
  };
};
/**
 * @category Filterable
 * @since 2.0.0
 */


exports.partition = partition;

var partitionMap = function partitionMap(f) {
  return function (fa) {
    return _partitionMap(fa, f);
  };
};
/**
 * @category Compactable
 * @since 2.0.0
 */


exports.partitionMap = partitionMap;

var separate = function separate(fa) {
  var left = new Map();
  var right = new Map();
  var entries = fa.entries();
  var e; // tslint:disable-next-line: strict-boolean-expressions

  while (!(e = entries.next()).done) {
    var _e$value9 = _slicedToArray(e.value, 2),
        _k7 = _e$value9[0],
        ei = _e$value9[1];

    if (_.isLeft(ei)) {
      left.set(_k7, ei.left);
    } else {
      right.set(_k7, ei.right);
    }
  }

  return (0, _Separated.separated)(left, right);
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */


exports.separate = separate;
var URI = 'Map';
/**
 * @category instances
 * @since 2.0.0
 */

exports.URI = URI;

/**
 * @category instances
 * @since 2.11.0
 */
var getUnionSemigroup = function getUnionSemigroup(E, S) {
  var unionES = union(E, S);
  return {
    concat: function concat(first, second) {
      return unionES(second)(first);
    }
  };
};
/**
 * @category instances
 * @since 2.11.0
 */


exports.getUnionSemigroup = getUnionSemigroup;

var getUnionMonoid = function getUnionMonoid(E, S) {
  return {
    concat: getUnionSemigroup(E, S).concat,
    empty: new Map()
  };
};
/**
 * @category instances
 * @since 2.11.0
 */


exports.getUnionMonoid = getUnionMonoid;

var getIntersectionSemigroup = function getIntersectionSemigroup(E, S) {
  var intersectionES = intersection(E, S);
  return {
    concat: function concat(first, second) {
      return intersectionES(second)(first);
    }
  };
};
/**
 * @category instances
 * @since 2.11.0
 */


exports.getIntersectionSemigroup = getIntersectionSemigroup;

var getDifferenceMagma = function getDifferenceMagma(E) {
  return function () {
    var differenceE = difference(E);
    return {
      concat: function concat(first, second) {
        return differenceE(second)(first);
      }
    };
  };
};
/**
 * @category instances
 * @since 2.0.0
 */


exports.getDifferenceMagma = getDifferenceMagma;

function getFilterableWithIndex() {
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    mapWithIndex: _mapWithIndex,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    partitionMapWithIndex: _partitionMapWithIndex,
    partitionWithIndex: _partitionWithIndex,
    filterMapWithIndex: _filterMapWithIndex,
    filterWithIndex: _filterWithIndex
  };
}
/**
 * @category instances
 * @since 2.0.0
 */


function getWitherable(O) {
  var TWI = getTraversableWithIndex(O);
  return {
    URI: URI,
    _E: undefined,
    map: _map,
    compact: compact,
    separate: separate,
    filter: _filter,
    filterMap: _filterMap,
    partition: _partition,
    partitionMap: _partitionMap,
    reduce: TWI.reduce,
    foldMap: TWI.foldMap,
    reduceRight: TWI.reduceRight,
    traverse: TWI.traverse,
    sequence: TWI.sequence,
    mapWithIndex: _mapWithIndex,
    reduceWithIndex: TWI.reduceWithIndex,
    foldMapWithIndex: TWI.foldMapWithIndex,
    reduceRightWithIndex: TWI.reduceRightWithIndex,
    traverseWithIndex: TWI.traverseWithIndex,
    wilt: (0, _Witherable.wiltDefault)(TWI, Compactable),
    wither: (0, _Witherable.witherDefault)(TWI, Compactable)
  };
}
/**
 * @since 2.11.0
 */


var reduce = RM.reduce;
/**
 * @since 2.11.0
 */

exports.reduce = reduce;
var foldMap = RM.foldMap;
/**
 * @since 2.11.0
 */

exports.foldMap = foldMap;
var reduceRight = RM.reduceRight;
/**
 * @category instances
 * @since 2.11.0
 */

exports.reduceRight = reduceRight;

var getFoldable = function getFoldable(O) {
  return _objectSpread(_objectSpread({}, RM.getFoldable(O)), {}, {
    URI: URI
  });
};
/**
 * @since 2.11.0
 */


exports.getFoldable = getFoldable;
var reduceWithIndex = RM.reduceWithIndex;
/**
 * @since 2.11.0
 */

exports.reduceWithIndex = reduceWithIndex;
var foldMapWithIndex = RM.foldMapWithIndex;
/**
 * @since 2.11.0
 */

exports.foldMapWithIndex = foldMapWithIndex;
var reduceRightWithIndex = RM.reduceRightWithIndex;
/**
 * @category instances
 * @since 2.10.0
 */

exports.reduceRightWithIndex = reduceRightWithIndex;

var getFoldableWithIndex = function getFoldableWithIndex(O) {
  return _objectSpread(_objectSpread({}, RM.getFoldableWithIndex(O)), {}, {
    URI: URI
  });
};
/**
 * @category instances
 * @since 2.10.0
 */


exports.getFoldableWithIndex = getFoldableWithIndex;

var getTraversableWithIndex = function getTraversableWithIndex(O) {
  var FWI = getFoldableWithIndex(O);
  var keysO = keys(O);

  var traverseWithIndex = function traverseWithIndex(F) {
    return function (ta, f) {
      var fm = F.of(new Map());
      var ks = keysO(ta);
      var len = ks.length;

      var _loop = function _loop(i) {
        var key = ks[i];
        var a = ta.get(key);
        fm = F.ap(F.map(fm, function (m) {
          return function (b) {
            return m.set(key, b);
          };
        }), f(key, a));
      };

      for (var i = 0; i < len; i++) {
        _loop(i);
      }

      return fm;
    };
  };

  var traverse = function traverse(F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function (ta, f) {
      return traverseWithIndexF(ta, function (_, a) {
        return f(a);
      });
    };
  };

  var sequence = function sequence(F) {
    var traverseWithIndexF = traverseWithIndex(F);
    return function (ta) {
      return traverseWithIndexF(ta, function (_, a) {
        return a;
      });
    };
  };

  return {
    URI: URI,
    _E: undefined,
    map: _map,
    mapWithIndex: _mapWithIndex,
    reduce: FWI.reduce,
    foldMap: FWI.foldMap,
    reduceRight: FWI.reduceRight,
    reduceWithIndex: FWI.reduceWithIndex,
    foldMapWithIndex: FWI.foldMapWithIndex,
    reduceRightWithIndex: FWI.reduceRightWithIndex,
    traverse: traverse,
    sequence: sequence,
    traverseWithIndex: traverseWithIndex
  };
};
/**
 * @category instances
 * @since 2.7.0
 */


exports.getTraversableWithIndex = getTraversableWithIndex;
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
 * @since 2.7.0
 */

exports.flap = flap;
var Compactable = {
  URI: URI,
  compact: compact,
  separate: separate
};
/**
 * @category instances
 * @since 2.7.0
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
}; // -------------------------------------------------------------------------------------
// utils
// -------------------------------------------------------------------------------------

exports.Filterable = Filterable;

var copy = function copy(m) {
  return new Map(m);
};
/**
 * @since 2.11.0
 */


var union = function union(E, M) {
  var unionEM = RM.union(E, M);
  return function (second) {
    return function (first) {
      if (isEmpty(first)) {
        return copy(second);
      }

      if (isEmpty(second)) {
        return copy(first);
      }

      return unionEM(second)(first);
    };
  };
};
/**
 * @since 2.11.0
 */


exports.union = union;

var intersection = function intersection(E, M) {
  var intersectionEM = RM.intersection(E, M);
  return function (second) {
    return function (first) {
      if (isEmpty(first) || isEmpty(second)) {
        return new Map();
      }

      return intersectionEM(second)(first);
    };
  };
};
/**
 * @since 2.11.0
 */


exports.intersection = intersection;

var difference = function difference(E) {
  var differenceE = RM.difference(E);
  return function (second) {
    return function (first) {
      if (isEmpty(first)) {
        return copy(second);
      }

      if (isEmpty(second)) {
        return copy(first);
      }

      return differenceE(second)(first);
    };
  };
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use a `new Map()` instead.
 *
 * @since 2.0.0
 * @deprecated
 */


exports.difference = difference;
var empty = new Map();
/**
 * Use [`upsertAt`](#upsertat) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */

exports.empty = empty;
var insertAt = upsertAt;
/**
 * Use [`Filterable`](#filterable) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.insertAt = insertAt;
var map_ = Filterable;
exports.map_ = map_;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9NYXAudHMiXSwibmFtZXMiOlsiT3B0aW9uIiwiTyIsImdldFNob3ciLCJSTSIsInNpemUiLCJpc0VtcHR5IiwibWVtYmVyIiwiZWxlbSIsImtleXMiLCJtIiwiQXJyYXkiLCJmcm9tIiwic29ydCIsImNvbXBhcmUiLCJ2YWx1ZXMiLCJjb2xsZWN0Iiwia2V5c08iLCJmIiwib3V0Iiwia3MiLCJrZXkiLCJwdXNoIiwiZ2V0IiwidG9BcnJheSIsImsiLCJhIiwidG9VbmZvbGRhYmxlIiwib3JkIiwiVSIsInRvQXJyYXlPIiwiZCIsImthcyIsImxlbiIsImxlbmd0aCIsInVuZm9sZCIsImIiLCJfIiwic29tZSIsIm5vbmUiLCJ1cHNlcnRBdCIsIkUiLCJsb29rdXBXaXRoS2V5RSIsImxvb2t1cFdpdGhLZXkiLCJsb29rdXBXaXRoS2V5RWsiLCJmb3VuZCIsImlzTm9uZSIsIk1hcCIsInNldCIsInZhbHVlIiwiZGVsZXRlQXQiLCJpc1NvbWUiLCJyIiwidXBkYXRlQXQiLCJtb2RpZnlBdEUiLCJtb2RpZnlBdCIsInBvcCIsImxvb2t1cEUiLCJsb29rdXAiLCJkZWxldGVBdEUiLCJkZWxldGVBdEVrIiwibWFwIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImUiLCJuZXh0IiwiZG9uZSIsImthIiwiZXF1YWxzIiwiaXNTdWJtYXAiLCJnZXRFcSIsImdldE1vbm9pZCIsIlNLIiwiU0EiLCJsb29rdXBXaXRoS2V5UyIsImNvbmNhdCIsIm14IiwibXkiLCJteE9wdEEiLCJlbXB0eSIsInNpbmdsZXRvbiIsImZyb21Gb2xkYWJsZSIsIk0iLCJGIiwiZmthIiwicmVkdWNlIiwiYk9wdCIsIl9tYXBXaXRoSW5kZXgiLCJmYSIsInBhcnRpdGlvbk1hcFdpdGhJbmRleCIsImxlZnQiLCJyaWdodCIsImVpIiwiaXNMZWZ0IiwicGFydGl0aW9uV2l0aEluZGV4IiwicHJlZGljYXRlV2l0aEluZGV4IiwiZmlsdGVyTWFwV2l0aEluZGV4IiwibyIsImZpbHRlcldpdGhJbmRleCIsInAiLCJfbWFwIiwiX2ZpbHRlciIsIl9maWx0ZXJXaXRoSW5kZXgiLCJfZmlsdGVyTWFwIiwiX2ZpbHRlck1hcFdpdGhJbmRleCIsIl9wYXJ0aXRpb24iLCJwcmVkaWNhdGUiLCJfcGFydGl0aW9uV2l0aEluZGV4IiwiX3BhcnRpdGlvbk1hcCIsIl9wYXJ0aXRpb25NYXBXaXRoSW5kZXgiLCJjb21wYWN0Iiwib2EiLCJmaWx0ZXIiLCJmaWx0ZXJNYXAiLCJtYXBXaXRoSW5kZXgiLCJwYXJ0aXRpb24iLCJwYXJ0aXRpb25NYXAiLCJzZXBhcmF0ZSIsIlVSSSIsImdldFVuaW9uU2VtaWdyb3VwIiwiUyIsInVuaW9uRVMiLCJ1bmlvbiIsImZpcnN0Iiwic2Vjb25kIiwiZ2V0VW5pb25Nb25vaWQiLCJnZXRJbnRlcnNlY3Rpb25TZW1pZ3JvdXAiLCJpbnRlcnNlY3Rpb25FUyIsImludGVyc2VjdGlvbiIsImdldERpZmZlcmVuY2VNYWdtYSIsImRpZmZlcmVuY2VFIiwiZGlmZmVyZW5jZSIsImdldEZpbHRlcmFibGVXaXRoSW5kZXgiLCJfRSIsImdldFdpdGhlcmFibGUiLCJUV0kiLCJnZXRUcmF2ZXJzYWJsZVdpdGhJbmRleCIsImZvbGRNYXAiLCJyZWR1Y2VSaWdodCIsInRyYXZlcnNlIiwic2VxdWVuY2UiLCJyZWR1Y2VXaXRoSW5kZXgiLCJmb2xkTWFwV2l0aEluZGV4IiwicmVkdWNlUmlnaHRXaXRoSW5kZXgiLCJ0cmF2ZXJzZVdpdGhJbmRleCIsIndpbHQiLCJDb21wYWN0YWJsZSIsIndpdGhlciIsImdldEZvbGRhYmxlIiwiZ2V0Rm9sZGFibGVXaXRoSW5kZXgiLCJGV0kiLCJ0YSIsImZtIiwib2YiLCJpIiwiYXAiLCJ0cmF2ZXJzZVdpdGhJbmRleEYiLCJGdW5jdG9yIiwiZmxhcCIsIkZpbHRlcmFibGUiLCJjb3B5IiwidW5pb25FTSIsImludGVyc2VjdGlvbkVNIiwiaW5zZXJ0QXQiLCJtYXBfIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNb0gsUUFBeUUsR0FBRzNILFFBQWxGO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU00SCxJQUFzQixHQUFHTCxVQUEvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmltcG9ydCB7IEFwcGxpY2F0aXZlIH0gZnJvbSAnLi9BcHBsaWNhdGl2ZSdcbmltcG9ydCB7IENvbXBhY3RhYmxlMiB9IGZyb20gJy4vQ29tcGFjdGFibGUnXG5pbXBvcnQgeyBFaXRoZXIgfSBmcm9tICcuL0VpdGhlcidcbmltcG9ydCB7IEVxIH0gZnJvbSAnLi9FcSdcbmltcG9ydCB7IEZpbHRlcmFibGUyIH0gZnJvbSAnLi9GaWx0ZXJhYmxlJ1xuaW1wb3J0IHsgRmlsdGVyYWJsZVdpdGhJbmRleDJDIH0gZnJvbSAnLi9GaWx0ZXJhYmxlV2l0aEluZGV4J1xuaW1wb3J0IHsgRm9sZGFibGUsIEZvbGRhYmxlMSwgRm9sZGFibGUyLCBGb2xkYWJsZTJDLCBGb2xkYWJsZTMgfSBmcm9tICcuL0ZvbGRhYmxlJ1xuaW1wb3J0IHsgRm9sZGFibGVXaXRoSW5kZXgyQyB9IGZyb20gJy4vRm9sZGFibGVXaXRoSW5kZXgnXG5pbXBvcnQgeyBwaXBlIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7IGZsYXAgYXMgZmxhcF8sIEZ1bmN0b3IyIH0gZnJvbSAnLi9GdW5jdG9yJ1xuaW1wb3J0IHsgSEtULCBLaW5kLCBLaW5kMiwgS2luZDMsIFVSSVMsIFVSSVMyLCBVUklTMyB9IGZyb20gJy4vSEtUJ1xuaW1wb3J0ICogYXMgXyBmcm9tICcuL2ludGVybmFsJ1xuaW1wb3J0IHsgTWFnbWEgfSBmcm9tICcuL01hZ21hJ1xuaW1wb3J0IHsgTW9ub2lkIH0gZnJvbSAnLi9Nb25vaWQnXG5pbXBvcnQgKiBhcyBPIGZyb20gJy4vT3B0aW9uJ1xuaW1wb3J0IHsgT3JkIH0gZnJvbSAnLi9PcmQnXG5pbXBvcnQgeyBQcmVkaWNhdGUgfSBmcm9tICcuL1ByZWRpY2F0ZSdcbmltcG9ydCAqIGFzIFJNIGZyb20gJy4vUmVhZG9ubHlNYXAnXG5pbXBvcnQgeyBSZWZpbmVtZW50IH0gZnJvbSAnLi9SZWZpbmVtZW50J1xuaW1wb3J0IHsgU2VtaWdyb3VwIH0gZnJvbSAnLi9TZW1pZ3JvdXAnXG5pbXBvcnQgeyBzZXBhcmF0ZWQsIFNlcGFyYXRlZCB9IGZyb20gJy4vU2VwYXJhdGVkJ1xuaW1wb3J0IHsgU2hvdyB9IGZyb20gJy4vU2hvdydcbmltcG9ydCB7IFRyYXZlcnNhYmxlV2l0aEluZGV4MkMgfSBmcm9tICcuL1RyYXZlcnNhYmxlV2l0aEluZGV4J1xuaW1wb3J0IHsgVW5mb2xkYWJsZSwgVW5mb2xkYWJsZTEgfSBmcm9tICcuL1VuZm9sZGFibGUnXG5pbXBvcnQgeyB3aWx0RGVmYXVsdCwgV2l0aGVyYWJsZTJDLCB3aXRoZXJEZWZhdWx0IH0gZnJvbSAnLi9XaXRoZXJhYmxlJ1xuXG5pbXBvcnQgT3B0aW9uID0gTy5PcHRpb25cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFNob3c6IDxLLCBBPihTSzogU2hvdzxLPiwgU0E6IFNob3c8QT4pID0+IFNob3c8TWFwPEssIEE+PiA9IFJNLmdldFNob3dcblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBrZXkvdmFsdWUgcGFpcnMgaW4gYSBtYXBcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHNpemU6IDxLLCBBPihtOiBNYXA8SywgQT4pID0+IG51bWJlciA9IFJNLnNpemVcblxuLyoqXG4gKiBUZXN0IHdoZXRoZXIgb3Igbm90IGEgbWFwIGlzIGVtcHR5XG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBpc0VtcHR5OiA8SywgQT4obTogTWFwPEssIEE+KSA9PiBib29sZWFuID0gUk0uaXNFbXB0eVxuXG4vLyBUT0RPOiByZW1vdmUgbm9uLWN1cnJpZWQgb3ZlcmxvYWRpbmcgaW4gdjNcbi8qKlxuICogVGVzdCB3aGV0aGVyIG9yIG5vdCBhIGtleSBleGlzdHMgaW4gYSBtYXBcbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IG1lbWJlcjogPEs+KFxuICBFOiBFcTxLPlxuKSA9PiB7XG4gIChrOiBLKTogPEE+KG06IE1hcDxLLCBBPikgPT4gYm9vbGVhblxuICA8QT4oazogSywgbTogTWFwPEssIEE+KTogYm9vbGVhblxufSA9IFJNLm1lbWJlclxuXG4vLyBUT0RPOiByZW1vdmUgbm9uLWN1cnJpZWQgb3ZlcmxvYWRpbmcgaW4gdjNcbi8qKlxuICogVGVzdCB3aGV0aGVyIG9yIG5vdCBhIHZhbHVlIGlzIGEgbWVtYmVyIG9mIGEgbWFwXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBlbGVtOiA8QT4oXG4gIEU6IEVxPEE+XG4pID0+IHtcbiAgKGE6IEEpOiA8Sz4obTogTWFwPEssIEE+KSA9PiBib29sZWFuXG4gIDxLPihhOiBBLCBtOiBNYXA8SywgQT4pOiBib29sZWFuXG59ID0gUk0uZWxlbVxuXG4vKipcbiAqIEdldCBhIHNvcnRlZCBgQXJyYXlgIG9mIHRoZSBrZXlzIGNvbnRhaW5lZCBpbiBhIGBNYXBgLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qga2V5cyA9IDxLPihPOiBPcmQ8Sz4pID0+IDxBPihtOiBNYXA8SywgQT4pOiBBcnJheTxLPiA9PiBBcnJheS5mcm9tKG0ua2V5cygpKS5zb3J0KE8uY29tcGFyZSlcblxuLyoqXG4gKiBHZXQgYSBzb3J0ZWQgYEFycmF5YCBvZiB0aGUgdmFsdWVzIGNvbnRhaW5lZCBpbiBhIGBNYXBgLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgdmFsdWVzID0gPEE+KE86IE9yZDxBPikgPT4gPEs+KG06IE1hcDxLLCBBPik6IEFycmF5PEE+ID0+IEFycmF5LmZyb20obS52YWx1ZXMoKSkuc29ydChPLmNvbXBhcmUpXG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xsZWN0PEs+KE86IE9yZDxLPik6IDxBLCBCPihmOiAoazogSywgYTogQSkgPT4gQikgPT4gKG06IE1hcDxLLCBBPikgPT4gQXJyYXk8Qj4ge1xuICBjb25zdCBrZXlzTyA9IGtleXMoTylcbiAgcmV0dXJuIDxBLCBCPihmOiAoazogSywgYTogQSkgPT4gQikgPT4gKG06IE1hcDxLLCBBPik6IEFycmF5PEI+ID0+IHtcbiAgICBjb25zdCBvdXQ6IEFycmF5PEI+ID0gW11cbiAgICBjb25zdCBrcyA9IGtleXNPKG0pXG4gICAgZm9yIChjb25zdCBrZXkgb2Yga3MpIHtcbiAgICAgIG91dC5wdXNoKGYoa2V5LCBtLmdldChrZXkpISkpXG4gICAgfVxuICAgIHJldHVybiBvdXRcbiAgfVxufVxuXG4vKipcbiAqIEdldCBhIHNvcnRlZCBgQXJyYXlgIG9mIHRoZSBrZXkvdmFsdWUgcGFpcnMgY29udGFpbmVkIGluIGEgYE1hcGAuXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5PEs+KE86IE9yZDxLPik6IDxBPihtOiBNYXA8SywgQT4pID0+IEFycmF5PFtLLCBBXT4ge1xuICByZXR1cm4gY29sbGVjdChPKSgoaywgYSkgPT4gW2ssIGFdKVxufVxuXG4vKipcbiAqIFVuZm9sZHMgYSBtYXAgaW50byBhIGxpc3Qgb2Yga2V5L3ZhbHVlIHBhaXJzXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b1VuZm9sZGFibGU8SywgRiBleHRlbmRzIFVSSVM+KG9yZDogT3JkPEs+LCBVOiBVbmZvbGRhYmxlMTxGPik6IDxBPihkOiBNYXA8SywgQT4pID0+IEtpbmQ8RiwgW0ssIEFdPlxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5mb2xkYWJsZTxLLCBGPihvcmQ6IE9yZDxLPiwgVTogVW5mb2xkYWJsZTxGPik6IDxBPihkOiBNYXA8SywgQT4pID0+IEhLVDxGLCBbSywgQV0+XG5leHBvcnQgZnVuY3Rpb24gdG9VbmZvbGRhYmxlPEssIEY+KG9yZDogT3JkPEs+LCBVOiBVbmZvbGRhYmxlPEY+KTogPEE+KGQ6IE1hcDxLLCBBPikgPT4gSEtUPEYsIFtLLCBBXT4ge1xuICBjb25zdCB0b0FycmF5TyA9IHRvQXJyYXkob3JkKVxuICByZXR1cm4gKGQpID0+IHtcbiAgICBjb25zdCBrYXMgPSB0b0FycmF5TyhkKVxuICAgIGNvbnN0IGxlbiA9IGthcy5sZW5ndGhcbiAgICByZXR1cm4gVS51bmZvbGQoMCwgKGIpID0+IChiIDwgbGVuID8gXy5zb21lKFtrYXNbYl0sIGIgKyAxXSkgOiBfLm5vbmUpKVxuICB9XG59XG5cbi8qKlxuICogSW5zZXJ0IG9yIHJlcGxhY2UgYSBrZXkvdmFsdWUgcGFpciBpbiBhIGBNYXBgLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCB1cHNlcnRBdCA9IDxLPihFOiBFcTxLPik6ICg8QT4oazogSywgYTogQSkgPT4gKG06IE1hcDxLLCBBPikgPT4gTWFwPEssIEE+KSA9PiB7XG4gIGNvbnN0IGxvb2t1cFdpdGhLZXlFID0gbG9va3VwV2l0aEtleShFKVxuICByZXR1cm4gKGssIGEpID0+IHtcbiAgICBjb25zdCBsb29rdXBXaXRoS2V5RWsgPSBsb29rdXBXaXRoS2V5RShrKVxuICAgIHJldHVybiAobSkgPT4ge1xuICAgICAgY29uc3QgZm91bmQgPSBsb29rdXBXaXRoS2V5RWsobSlcbiAgICAgIGlmIChfLmlzTm9uZShmb3VuZCkpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IE1hcChtKVxuICAgICAgICBvdXQuc2V0KGssIGEpXG4gICAgICAgIHJldHVybiBvdXRcbiAgICAgIH0gZWxzZSBpZiAoZm91bmQudmFsdWVbMV0gIT09IGEpIHtcbiAgICAgICAgY29uc3Qgb3V0ID0gbmV3IE1hcChtKVxuICAgICAgICBvdXQuc2V0KGZvdW5kLnZhbHVlWzBdLCBhKVxuICAgICAgICByZXR1cm4gb3V0XG4gICAgICB9XG4gICAgICByZXR1cm4gbVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERlbGV0ZSBhIGtleSBhbmQgdmFsdWUgZnJvbSBhIG1hcFxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBkZWxldGVBdCA9IDxLPihFOiBFcTxLPik6ICgoazogSykgPT4gPEE+KG06IE1hcDxLLCBBPikgPT4gTWFwPEssIEE+KSA9PiB7XG4gIGNvbnN0IGxvb2t1cFdpdGhLZXlFID0gbG9va3VwV2l0aEtleShFKVxuICByZXR1cm4gKGspID0+IChtKSA9PiB7XG4gICAgY29uc3QgZm91bmQgPSBsb29rdXBXaXRoS2V5RShrLCBtKVxuICAgIGlmIChfLmlzU29tZShmb3VuZCkpIHtcbiAgICAgIGNvbnN0IHIgPSBuZXcgTWFwKG0pXG4gICAgICByLmRlbGV0ZShmb3VuZC52YWx1ZVswXSlcbiAgICAgIHJldHVybiByXG4gICAgfVxuICAgIHJldHVybiBtXG4gIH1cbn1cblxuLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUF0ID0gPEs+KEU6IEVxPEs+KTogKDxBPihrOiBLLCBhOiBBKSA9PiAobTogTWFwPEssIEE+KSA9PiBPcHRpb248TWFwPEssIEE+PikgPT4ge1xuICBjb25zdCBtb2RpZnlBdEUgPSBtb2RpZnlBdChFKVxuICByZXR1cm4gKGssIGEpID0+IG1vZGlmeUF0RShrLCAoKSA9PiBhKVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbW9kaWZ5QXQgPSA8Sz4oRTogRXE8Sz4pOiAoPEE+KGs6IEssIGY6IChhOiBBKSA9PiBBKSA9PiAobTogTWFwPEssIEE+KSA9PiBPcHRpb248TWFwPEssIEE+PikgPT4ge1xuICBjb25zdCBsb29rdXBXaXRoS2V5RSA9IGxvb2t1cFdpdGhLZXkoRSlcbiAgcmV0dXJuIChrLCBmKSA9PiAobSkgPT4ge1xuICAgIGNvbnN0IGZvdW5kID0gbG9va3VwV2l0aEtleUUoaywgbSlcbiAgICBpZiAoXy5pc05vbmUoZm91bmQpKSB7XG4gICAgICByZXR1cm4gXy5ub25lXG4gICAgfVxuICAgIGNvbnN0IHIgPSBuZXcgTWFwKG0pXG4gICAgci5zZXQoZm91bmQudmFsdWVbMF0sIGYoZm91bmQudmFsdWVbMV0pKVxuICAgIHJldHVybiBfLnNvbWUocilcbiAgfVxufVxuXG4vKipcbiAqIERlbGV0ZSBhIGtleSBhbmQgdmFsdWUgZnJvbSBhIG1hcCwgcmV0dXJuaW5nIHRoZSB2YWx1ZSBhcyB3ZWxsIGFzIHRoZSBzdWJzZXF1ZW50IG1hcFxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9wPEs+KEU6IEVxPEs+KTogKGs6IEspID0+IDxBPihtOiBNYXA8SywgQT4pID0+IE9wdGlvbjxbQSwgTWFwPEssIEE+XT4ge1xuICBjb25zdCBsb29rdXBFID0gbG9va3VwKEUpXG4gIGNvbnN0IGRlbGV0ZUF0RSA9IGRlbGV0ZUF0KEUpXG4gIHJldHVybiAoaykgPT4ge1xuICAgIGNvbnN0IGRlbGV0ZUF0RWsgPSBkZWxldGVBdEUoaylcbiAgICByZXR1cm4gKG0pID0+XG4gICAgICBwaXBlKFxuICAgICAgICBsb29rdXBFKGssIG0pLFxuICAgICAgICBPLm1hcCgoYSkgPT4gW2EsIGRlbGV0ZUF0RWsobSldKVxuICAgICAgKVxuICB9XG59XG5cbmludGVyZmFjZSBOZXh0PEE+IHtcbiAgcmVhZG9ubHkgZG9uZT86IGJvb2xlYW5cbiAgcmVhZG9ubHkgdmFsdWU6IEFcbn1cblxuLy8gVE9ETzogcmVtb3ZlIG5vbi1jdXJyaWVkIG92ZXJsb2FkaW5nIGluIHYzXG4vKipcbiAqIExvb2t1cCB0aGUgdmFsdWUgZm9yIGEga2V5IGluIGEgYE1hcGAuXG4gKiBJZiB0aGUgcmVzdWx0IGlzIGEgYFNvbWVgLCB0aGUgZXhpc3Rpbmcga2V5IGlzIGFsc28gcmV0dXJuZWQuXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBXaXRoS2V5PEs+KFxuICBFOiBFcTxLPlxuKToge1xuICAoazogSyk6IDxBPihtOiBNYXA8SywgQT4pID0+IE9wdGlvbjxbSywgQV0+XG4gIDxBPihrOiBLLCBtOiBNYXA8SywgQT4pOiBPcHRpb248W0ssIEFdPlxufVxuZXhwb3J0IGZ1bmN0aW9uIGxvb2t1cFdpdGhLZXk8Sz4oXG4gIEU6IEVxPEs+XG4pOiA8QT4oazogSywgbT86IE1hcDxLLCBBPikgPT4gT3B0aW9uPFtLLCBBXT4gfCAoKG06IE1hcDxLLCBBPikgPT4gT3B0aW9uPFtLLCBBXT4pIHtcbiAgcmV0dXJuIDxBPihrOiBLLCBtPzogTWFwPEssIEE+KSA9PiB7XG4gICAgaWYgKG0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgbG9va3VwV2l0aEtleUUgPSBsb29rdXBXaXRoS2V5KEUpXG4gICAgICByZXR1cm4gKG0pID0+IGxvb2t1cFdpdGhLZXlFKGssIG0pXG4gICAgfVxuICAgIGNvbnN0IGVudHJpZXMgPSBtLmVudHJpZXMoKVxuICAgIGxldCBlOiBOZXh0PFtLLCBBXT5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHN0cmljdC1ib29sZWFuLWV4cHJlc3Npb25zXG4gICAgd2hpbGUgKCEoZSA9IGVudHJpZXMubmV4dCgpKS5kb25lKSB7XG4gICAgICBjb25zdCBba2EsIGFdID0gZS52YWx1ZVxuICAgICAgaWYgKEUuZXF1YWxzKGthLCBrKSkge1xuICAgICAgICByZXR1cm4gXy5zb21lKFtrYSwgYV0pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBfLm5vbmVcbiAgfVxufVxuXG4vLyBUT0RPOiByZW1vdmUgbm9uLWN1cnJpZWQgb3ZlcmxvYWRpbmcgaW4gdjNcbi8qKlxuICogTG9va3VwIHRoZSB2YWx1ZSBmb3IgYSBrZXkgaW4gYSBgTWFwYC5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGxvb2t1cDogPEs+KFxuICBFOiBFcTxLPlxuKSA9PiB7XG4gIChrOiBLKTogPEE+KG06IE1hcDxLLCBBPikgPT4gT3B0aW9uPEE+XG4gIDxBPihrOiBLLCBtOiBNYXA8SywgQT4pOiBPcHRpb248QT5cbn0gPSBSTS5sb29rdXBcblxuLy8gVE9ETzogcmVtb3ZlIG5vbi1jdXJyaWVkIG92ZXJsb2FkaW5nIGluIHYzXG4vKipcbiAqIFRlc3Qgd2hldGhlciBvciBub3Qgb25lIGBNYXBgIGNvbnRhaW5zIGFsbCBvZiB0aGUga2V5cyBhbmQgdmFsdWVzIGNvbnRhaW5lZCBpbiBhbm90aGVyIGBNYXBgXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBpc1N1Ym1hcDogPEssIEE+KFxuICBTSzogRXE8Sz4sXG4gIFNBOiBFcTxBPlxuKSA9PiB7XG4gICh0aGF0OiBNYXA8SywgQT4pOiAobWU6IE1hcDxLLCBBPikgPT4gYm9vbGVhblxuICAobWU6IE1hcDxLLCBBPiwgdGhhdDogTWFwPEssIEE+KTogYm9vbGVhblxufSA9IFJNLmlzU3VibWFwXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRFcTogPEssIEE+KFNLOiBFcTxLPiwgU0E6IEVxPEE+KSA9PiBFcTxNYXA8SywgQT4+ID0gUk0uZ2V0RXFcblxuLyoqXG4gKiBHZXRzIGBNb25vaWRgIGluc3RhbmNlIGZvciBNYXBzIGdpdmVuIGBTZW1pZ3JvdXBgIGluc3RhbmNlIGZvciB0aGVpciB2YWx1ZXNcbiAqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbm9pZDxLLCBBPihTSzogRXE8Sz4sIFNBOiBTZW1pZ3JvdXA8QT4pOiBNb25vaWQ8TWFwPEssIEE+PiB7XG4gIGNvbnN0IGxvb2t1cFdpdGhLZXlTID0gbG9va3VwV2l0aEtleShTSylcbiAgcmV0dXJuIHtcbiAgICBjb25jYXQ6IChteCwgbXkpID0+IHtcbiAgICAgIGlmIChpc0VtcHR5KG14KSkge1xuICAgICAgICByZXR1cm4gbXlcbiAgICAgIH1cbiAgICAgIGlmIChpc0VtcHR5KG15KSkge1xuICAgICAgICByZXR1cm4gbXhcbiAgICAgIH1cbiAgICAgIGNvbnN0IHIgPSBuZXcgTWFwKG14KVxuICAgICAgY29uc3QgZW50cmllcyA9IG15LmVudHJpZXMoKVxuICAgICAgbGV0IGU6IE5leHQ8W0ssIEFdPlxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBzdHJpY3QtYm9vbGVhbi1leHByZXNzaW9uc1xuICAgICAgd2hpbGUgKCEoZSA9IGVudHJpZXMubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNvbnN0IFtrLCBhXSA9IGUudmFsdWVcbiAgICAgICAgY29uc3QgbXhPcHRBID0gbG9va3VwV2l0aEtleVMoaywgbXgpXG4gICAgICAgIGlmIChfLmlzU29tZShteE9wdEEpKSB7XG4gICAgICAgICAgci5zZXQobXhPcHRBLnZhbHVlWzBdLCBTQS5jb25jYXQobXhPcHRBLnZhbHVlWzFdLCBhKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByLnNldChrLCBhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gclxuICAgIH0sXG4gICAgZW1wdHk6IG5ldyBNYXAoKVxuICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgbWFwIHdpdGggb25lIGtleS92YWx1ZSBwYWlyXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzaW5nbGV0b24gPSA8SywgQT4oazogSywgYTogQSk6IE1hcDxLLCBBPiA9PiBuZXcgTWFwKFtbaywgYV1dKVxuXG4vKipcbiAqIENyZWF0ZSBhIG1hcCBmcm9tIGEgZm9sZGFibGUgY29sbGVjdGlvbiBvZiBrZXkvdmFsdWUgcGFpcnMsIHVzaW5nIHRoZVxuICogc3BlY2lmaWVkIGBNYWdtYWAgdG8gY29tYmluZSB2YWx1ZXMgZm9yIGR1cGxpY2F0ZSBrZXlzLlxuICpcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZnJvbUZvbGRhYmxlPEYgZXh0ZW5kcyBVUklTMywgSywgQT4oXG4gIEU6IEVxPEs+LFxuICBNOiBNYWdtYTxBPixcbiAgRjogRm9sZGFibGUzPEY+XG4pOiA8UiwgRT4oZmthOiBLaW5kMzxGLCBSLCBFLCBbSywgQV0+KSA9PiBNYXA8SywgQT5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tRm9sZGFibGU8RiBleHRlbmRzIFVSSVMyLCBLLCBBPihcbiAgRTogRXE8Sz4sXG4gIE06IE1hZ21hPEE+LFxuICBGOiBGb2xkYWJsZTI8Rj5cbik6IDxFPihma2E6IEtpbmQyPEYsIEUsIFtLLCBBXT4pID0+IE1hcDxLLCBBPlxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Gb2xkYWJsZTxGIGV4dGVuZHMgVVJJUywgSywgQT4oXG4gIEU6IEVxPEs+LFxuICBNOiBNYWdtYTxBPixcbiAgRjogRm9sZGFibGUxPEY+XG4pOiAoZmthOiBLaW5kPEYsIFtLLCBBXT4pID0+IE1hcDxLLCBBPlxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Gb2xkYWJsZTxGLCBLLCBBPihFOiBFcTxLPiwgTTogTWFnbWE8QT4sIEY6IEZvbGRhYmxlPEY+KTogKGZrYTogSEtUPEYsIFtLLCBBXT4pID0+IE1hcDxLLCBBPlxuZXhwb3J0IGZ1bmN0aW9uIGZyb21Gb2xkYWJsZTxGLCBLLCBBPihFOiBFcTxLPiwgTTogTWFnbWE8QT4sIEY6IEZvbGRhYmxlPEY+KTogKGZrYTogSEtUPEYsIFtLLCBBXT4pID0+IE1hcDxLLCBBPiB7XG4gIHJldHVybiAoZmthOiBIS1Q8RiwgW0ssIEFdPikgPT4ge1xuICAgIGNvbnN0IGxvb2t1cFdpdGhLZXlFID0gbG9va3VwV2l0aEtleShFKVxuICAgIHJldHVybiBGLnJlZHVjZTxbSywgQV0sIE1hcDxLLCBBPj4oZmthLCBuZXcgTWFwPEssIEE+KCksIChiLCBbaywgYV0pID0+IHtcbiAgICAgIGNvbnN0IGJPcHQgPSBsb29rdXBXaXRoS2V5RShrLCBiKVxuICAgICAgaWYgKF8uaXNTb21lKGJPcHQpKSB7XG4gICAgICAgIGIuc2V0KGJPcHQudmFsdWVbMF0sIE0uY29uY2F0KGJPcHQudmFsdWVbMV0sIGEpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYi5zZXQoaywgYSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBiXG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBfbWFwV2l0aEluZGV4ID0gPEssIEEsIEI+KGZhOiBNYXA8SywgQT4sIGY6IChrOiBLLCBhOiBBKSA9PiBCKTogTWFwPEssIEI+ID0+IHtcbiAgY29uc3QgbSA9IG5ldyBNYXA8SywgQj4oKVxuICBjb25zdCBlbnRyaWVzID0gZmEuZW50cmllcygpXG4gIGxldCBlOiBOZXh0PFtLLCBBXT5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBzdHJpY3QtYm9vbGVhbi1leHByZXNzaW9uc1xuICB3aGlsZSAoIShlID0gZW50cmllcy5uZXh0KCkpLmRvbmUpIHtcbiAgICBjb25zdCBba2V5LCBhXSA9IGUudmFsdWVcbiAgICBtLnNldChrZXksIGYoa2V5LCBhKSlcbiAgfVxuICByZXR1cm4gbVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgcGFydGl0aW9uTWFwV2l0aEluZGV4ID0gPEssIEEsIEIsIEM+KGY6IChrOiBLLCBhOiBBKSA9PiBFaXRoZXI8QiwgQz4pID0+IChcbiAgZmE6IE1hcDxLLCBBPlxuKTogU2VwYXJhdGVkPE1hcDxLLCBCPiwgTWFwPEssIEM+PiA9PiB7XG4gIGNvbnN0IGxlZnQgPSBuZXcgTWFwPEssIEI+KClcbiAgY29uc3QgcmlnaHQgPSBuZXcgTWFwPEssIEM+KClcbiAgY29uc3QgZW50cmllcyA9IGZhLmVudHJpZXMoKVxuICBsZXQgZTogTmV4dDxbSywgQV0+XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogc3RyaWN0LWJvb2xlYW4tZXhwcmVzc2lvbnNcbiAgd2hpbGUgKCEoZSA9IGVudHJpZXMubmV4dCgpKS5kb25lKSB7XG4gICAgY29uc3QgW2ssIGFdID0gZS52YWx1ZVxuICAgIGNvbnN0IGVpID0gZihrLCBhKVxuICAgIGlmIChfLmlzTGVmdChlaSkpIHtcbiAgICAgIGxlZnQuc2V0KGssIGVpLmxlZnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJpZ2h0LnNldChrLCBlaS5yaWdodClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlcGFyYXRlZChsZWZ0LCByaWdodClcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpdGlvbldpdGhJbmRleDxLLCBBLCBCIGV4dGVuZHMgQT4oXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogKGs6IEssIGE6IEEpID0+IGEgaXMgQlxuKTogKGZhOiBNYXA8SywgQT4pID0+IFNlcGFyYXRlZDxNYXA8SywgQT4sIE1hcDxLLCBCPj5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aXRpb25XaXRoSW5kZXg8SywgQT4oXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogKGs6IEssIGE6IEEpID0+IGJvb2xlYW5cbik6IDxCIGV4dGVuZHMgQT4oZmI6IE1hcDxLLCBCPikgPT4gU2VwYXJhdGVkPE1hcDxLLCBCPiwgTWFwPEssIEI+PlxuZXhwb3J0IGZ1bmN0aW9uIHBhcnRpdGlvbldpdGhJbmRleDxLLCBBPihcbiAgcHJlZGljYXRlV2l0aEluZGV4OiAoazogSywgYTogQSkgPT4gYm9vbGVhblxuKTogKGZhOiBNYXA8SywgQT4pID0+IFNlcGFyYXRlZDxNYXA8SywgQT4sIE1hcDxLLCBBPj5cbmV4cG9ydCBmdW5jdGlvbiBwYXJ0aXRpb25XaXRoSW5kZXg8SywgQT4oXG4gIHByZWRpY2F0ZVdpdGhJbmRleDogKGs6IEssIGE6IEEpID0+IGJvb2xlYW5cbik6IChmYTogTWFwPEssIEE+KSA9PiBTZXBhcmF0ZWQ8TWFwPEssIEE+LCBNYXA8SywgQT4+IHtcbiAgcmV0dXJuIChmYTogTWFwPEssIEE+KSA9PiB7XG4gICAgY29uc3QgbGVmdCA9IG5ldyBNYXA8SywgQT4oKVxuICAgIGNvbnN0IHJpZ2h0ID0gbmV3IE1hcDxLLCBBPigpXG4gICAgY29uc3QgZW50cmllcyA9IGZhLmVudHJpZXMoKVxuICAgIGxldCBlOiBOZXh0PFtLLCBBXT5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHN0cmljdC1ib29sZWFuLWV4cHJlc3Npb25zXG4gICAgd2hpbGUgKCEoZSA9IGVudHJpZXMubmV4dCgpKS5kb25lKSB7XG4gICAgICBjb25zdCBbaywgYV0gPSBlLnZhbHVlXG4gICAgICBpZiAocHJlZGljYXRlV2l0aEluZGV4KGssIGEpKSB7XG4gICAgICAgIHJpZ2h0LnNldChrLCBhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdC5zZXQoaywgYSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlcGFyYXRlZChsZWZ0LCByaWdodClcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZmlsdGVyTWFwV2l0aEluZGV4ID0gPEssIEEsIEI+KGY6IChrOiBLLCBhOiBBKSA9PiBPcHRpb248Qj4pID0+IChmYTogTWFwPEssIEE+KTogTWFwPEssIEI+ID0+IHtcbiAgY29uc3QgbSA9IG5ldyBNYXA8SywgQj4oKVxuICBjb25zdCBlbnRyaWVzID0gZmEuZW50cmllcygpXG4gIGxldCBlOiBOZXh0PFtLLCBBXT5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBzdHJpY3QtYm9vbGVhbi1leHByZXNzaW9uc1xuICB3aGlsZSAoIShlID0gZW50cmllcy5uZXh0KCkpLmRvbmUpIHtcbiAgICBjb25zdCBbaywgYV0gPSBlLnZhbHVlXG4gICAgY29uc3QgbyA9IGYoaywgYSlcbiAgICBpZiAoXy5pc1NvbWUobykpIHtcbiAgICAgIG0uc2V0KGssIG8udmFsdWUpXG4gICAgfVxuICB9XG4gIHJldHVybiBtXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJXaXRoSW5kZXg8SywgQSwgQiBleHRlbmRzIEE+KHA6IChrOiBLLCBhOiBBKSA9PiBhIGlzIEIpOiAobTogTWFwPEssIEE+KSA9PiBNYXA8SywgQj5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJXaXRoSW5kZXg8SywgQT4ocDogKGs6IEssIGE6IEEpID0+IGJvb2xlYW4pOiA8QiBleHRlbmRzIEE+KG06IE1hcDxLLCBCPikgPT4gTWFwPEssIEI+XG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyV2l0aEluZGV4PEssIEE+KHA6IChrOiBLLCBhOiBBKSA9PiBib29sZWFuKTogKG06IE1hcDxLLCBBPikgPT4gTWFwPEssIEE+XG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyV2l0aEluZGV4PEssIEE+KHA6IChrOiBLLCBhOiBBKSA9PiBib29sZWFuKTogKG06IE1hcDxLLCBBPikgPT4gTWFwPEssIEE+IHtcbiAgcmV0dXJuIChtOiBNYXA8SywgQT4pID0+IHtcbiAgICBjb25zdCBvdXQgPSBuZXcgTWFwPEssIEE+KClcbiAgICBjb25zdCBlbnRyaWVzID0gbS5lbnRyaWVzKClcbiAgICBsZXQgZTogTmV4dDxbSywgQV0+XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBzdHJpY3QtYm9vbGVhbi1leHByZXNzaW9uc1xuICAgIHdoaWxlICghKGUgPSBlbnRyaWVzLm5leHQoKSkuZG9uZSkge1xuICAgICAgY29uc3QgW2ssIGFdID0gZS52YWx1ZVxuICAgICAgaWYgKHAoaywgYSkpIHtcbiAgICAgICAgb3V0LnNldChrLCBhKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gbm9uLXBpcGVhYmxlc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBfbWFwOiBGdW5jdG9yMjxVUkk+WydtYXAnXSA9IChmYSwgZikgPT4gX21hcFdpdGhJbmRleChmYSwgKF8sIGEpID0+IGYoYSkpXG5jb25zdCBfZmlsdGVyOiBGaWx0ZXJhYmxlMjxVUkk+WydmaWx0ZXInXSA9IDxLLCBBPihmYTogTWFwPEssIEE+LCBwOiBQcmVkaWNhdGU8QT4pID0+XG4gIF9maWx0ZXJXaXRoSW5kZXgoZmEsIChfLCBhKSA9PiBwKGEpKVxuY29uc3QgX2ZpbHRlck1hcDogRmlsdGVyYWJsZTI8VVJJPlsnZmlsdGVyTWFwJ10gPSAoZmEsIGYpID0+IF9maWx0ZXJNYXBXaXRoSW5kZXgoZmEsIChfLCBhKSA9PiBmKGEpKVxuY29uc3QgX3BhcnRpdGlvbjogRmlsdGVyYWJsZTI8VVJJPlsncGFydGl0aW9uJ10gPSA8SywgQT4oZmE6IE1hcDxLLCBBPiwgcHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pID0+XG4gIF9wYXJ0aXRpb25XaXRoSW5kZXgoZmEsIChfLCBhKSA9PiBwcmVkaWNhdGUoYSkpXG5jb25zdCBfcGFydGl0aW9uTWFwOiBGaWx0ZXJhYmxlMjxVUkk+WydwYXJ0aXRpb25NYXAnXSA9IChmYSwgZikgPT4gX3BhcnRpdGlvbk1hcFdpdGhJbmRleChmYSwgKF8sIGEpID0+IGYoYSkpXG5jb25zdCBfZmlsdGVyV2l0aEluZGV4ID0gPEssIEE+KGZhOiBNYXA8SywgQT4sIHA6IChrOiBLLCBhOiBBKSA9PiBib29sZWFuKSA9PiBwaXBlKGZhLCBmaWx0ZXJXaXRoSW5kZXgocCkpXG5jb25zdCBfZmlsdGVyTWFwV2l0aEluZGV4ID0gPEssIEEsIEI+KGZhOiBNYXA8SywgQT4sIGY6IChrOiBLLCBhOiBBKSA9PiBPcHRpb248Qj4pID0+IHBpcGUoZmEsIGZpbHRlck1hcFdpdGhJbmRleChmKSlcbmNvbnN0IF9wYXJ0aXRpb25XaXRoSW5kZXggPSA8SywgQT4oZmE6IE1hcDxLLCBBPiwgcDogKGs6IEssIGE6IEEpID0+IGJvb2xlYW4pID0+IHBpcGUoZmEsIHBhcnRpdGlvbldpdGhJbmRleChwKSlcbmNvbnN0IF9wYXJ0aXRpb25NYXBXaXRoSW5kZXggPSA8SywgQSwgQiwgQz4oZmE6IE1hcDxLLCBBPiwgZjogKGs6IEssIGE6IEEpID0+IEVpdGhlcjxCLCBDPikgPT5cbiAgcGlwZShmYSwgcGFydGl0aW9uTWFwV2l0aEluZGV4KGYpKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyB0eXBlIGNsYXNzIG1lbWJlcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ29tcGFjdGFibGVcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgY29tcGFjdCA9IDxLLCBBPihmYTogTWFwPEssIE9wdGlvbjxBPj4pOiBNYXA8SywgQT4gPT4ge1xuICBjb25zdCBtID0gbmV3IE1hcDxLLCBBPigpXG4gIGNvbnN0IGVudHJpZXMgPSBmYS5lbnRyaWVzKClcbiAgbGV0IGU6IE5leHQ8W0ssIE9wdGlvbjxBPl0+XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogc3RyaWN0LWJvb2xlYW4tZXhwcmVzc2lvbnNcbiAgd2hpbGUgKCEoZSA9IGVudHJpZXMubmV4dCgpKS5kb25lKSB7XG4gICAgY29uc3QgW2ssIG9hXSA9IGUudmFsdWVcbiAgICBpZiAoXy5pc1NvbWUob2EpKSB7XG4gICAgICBtLnNldChrLCBvYS52YWx1ZSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgRmlsdGVyYWJsZVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBmaWx0ZXI6IHtcbiAgPEEsIEIgZXh0ZW5kcyBBPihyZWZpbmVtZW50OiBSZWZpbmVtZW50PEEsIEI+KTogPEs+KGZhOiBNYXA8SywgQT4pID0+IE1hcDxLLCBCPlxuICA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8SywgQiBleHRlbmRzIEE+KGZiOiBNYXA8SywgQj4pID0+IE1hcDxLLCBCPlxuICA8QT4ocHJlZGljYXRlOiBQcmVkaWNhdGU8QT4pOiA8Sz4oZmE6IE1hcDxLLCBBPikgPT4gTWFwPEssIEE+XG59ID0gPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KSA9PiA8Sz4oZmE6IE1hcDxLLCBBPikgPT4gX2ZpbHRlcihmYSwgcHJlZGljYXRlKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbHRlck1hcDogPEEsIEI+KGY6IChhOiBBKSA9PiBPcHRpb248Qj4pID0+IDxLPihmYTogTWFwPEssIEE+KSA9PiBNYXA8SywgQj4gPSAoZikgPT4gKGZhKSA9PlxuICBfZmlsdGVyTWFwKGZhLCBmKVxuXG4vKipcbiAqIGBtYXBgIGNhbiBiZSB1c2VkIHRvIHR1cm4gZnVuY3Rpb25zIGAoYTogQSkgPT4gQmAgaW50byBmdW5jdGlvbnMgYChmYTogRjxBPikgPT4gRjxCPmAgd2hvc2UgYXJndW1lbnQgYW5kIHJldHVybiB0eXBlc1xuICogdXNlIHRoZSB0eXBlIGNvbnN0cnVjdG9yIGBGYCB0byByZXByZXNlbnQgc29tZSBjb21wdXRhdGlvbmFsIGNvbnRleHQuXG4gKlxuICogQGNhdGVnb3J5IEZ1bmN0b3JcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgbWFwOiA8QSwgQj4oZjogKGE6IEEpID0+IEIpID0+IDxLPihmYTogTWFwPEssIEE+KSA9PiBNYXA8SywgQj4gPSAoZikgPT4gKGZhKSA9PiBfbWFwKGZhLCBmKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGdW5jdG9yV2l0aEluZGV4XG4gKiBAc2luY2UgMi43LjFcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcFdpdGhJbmRleDogPEssIEEsIEI+KGY6IChrOiBLLCBhOiBBKSA9PiBCKSA9PiAoZmE6IE1hcDxLLCBBPikgPT4gTWFwPEssIEI+ID0gKGYpID0+IChmYSkgPT5cbiAgX21hcFdpdGhJbmRleChmYSwgZilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRmlsdGVyYWJsZVxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJ0aXRpb246IHtcbiAgPEEsIEIgZXh0ZW5kcyBBPihyZWZpbmVtZW50OiBSZWZpbmVtZW50PEEsIEI+KTogPEs+KGZhOiBNYXA8SywgQT4pID0+IFNlcGFyYXRlZDxNYXA8SywgQT4sIE1hcDxLLCBCPj5cbiAgPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KTogPEssIEIgZXh0ZW5kcyBBPihmYjogTWFwPEssIEI+KSA9PiBTZXBhcmF0ZWQ8TWFwPEssIEI+LCBNYXA8SywgQj4+XG4gIDxBPihwcmVkaWNhdGU6IFByZWRpY2F0ZTxBPik6IDxLPihmYTogTWFwPEssIEE+KSA9PiBTZXBhcmF0ZWQ8TWFwPEssIEE+LCBNYXA8SywgQT4+XG59ID0gPEE+KHByZWRpY2F0ZTogUHJlZGljYXRlPEE+KSA9PiA8Sz4oZmE6IE1hcDxLLCBBPikgPT4gX3BhcnRpdGlvbihmYSwgcHJlZGljYXRlKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBGaWx0ZXJhYmxlXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnRpdGlvbk1hcDogPEEsIEIsIEM+KFxuICBmOiAoYTogQSkgPT4gRWl0aGVyPEIsIEM+XG4pID0+IDxLPihmYTogTWFwPEssIEE+KSA9PiBTZXBhcmF0ZWQ8TWFwPEssIEI+LCBNYXA8SywgQz4+ID0gKGYpID0+IChmYSkgPT4gX3BhcnRpdGlvbk1hcChmYSwgZilcblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ29tcGFjdGFibGVcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgc2VwYXJhdGUgPSA8SywgQSwgQj4oZmE6IE1hcDxLLCBFaXRoZXI8QSwgQj4+KTogU2VwYXJhdGVkPE1hcDxLLCBBPiwgTWFwPEssIEI+PiA9PiB7XG4gIGNvbnN0IGxlZnQgPSBuZXcgTWFwPEssIEE+KClcbiAgY29uc3QgcmlnaHQgPSBuZXcgTWFwPEssIEI+KClcbiAgY29uc3QgZW50cmllcyA9IGZhLmVudHJpZXMoKVxuICBsZXQgZTogTmV4dDxbSywgRWl0aGVyPEEsIEI+XT5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBzdHJpY3QtYm9vbGVhbi1leHByZXNzaW9uc1xuICB3aGlsZSAoIShlID0gZW50cmllcy5uZXh0KCkpLmRvbmUpIHtcbiAgICBjb25zdCBbaywgZWldID0gZS52YWx1ZVxuICAgIGlmIChfLmlzTGVmdChlaSkpIHtcbiAgICAgIGxlZnQuc2V0KGssIGVpLmxlZnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJpZ2h0LnNldChrLCBlaS5yaWdodClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlcGFyYXRlZChsZWZ0LCByaWdodClcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBVUkkgPSAnTWFwJ1xuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgdHlwZSBVUkkgPSB0eXBlb2YgVVJJXG5cbmRlY2xhcmUgbW9kdWxlICcuL0hLVCcge1xuICBpbnRlcmZhY2UgVVJJdG9LaW5kMjxFLCBBPiB7XG4gICAgcmVhZG9ubHkgW1VSSV06IE1hcDxFLCBBPlxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0VW5pb25TZW1pZ3JvdXAgPSA8SywgQT4oRTogRXE8Sz4sIFM6IFNlbWlncm91cDxBPik6IFNlbWlncm91cDxNYXA8SywgQT4+ID0+IHtcbiAgY29uc3QgdW5pb25FUyA9IHVuaW9uKEUsIFMpXG4gIHJldHVybiB7XG4gICAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4gdW5pb25FUyhzZWNvbmQpKGZpcnN0KVxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0VW5pb25Nb25vaWQgPSA8SywgQT4oRTogRXE8Sz4sIFM6IFNlbWlncm91cDxBPik6IE1vbm9pZDxNYXA8SywgQT4+ID0+ICh7XG4gIGNvbmNhdDogZ2V0VW5pb25TZW1pZ3JvdXAoRSwgUykuY29uY2F0LFxuICBlbXB0eTogbmV3IE1hcCgpXG59KVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEludGVyc2VjdGlvblNlbWlncm91cCA9IDxLLCBBPihFOiBFcTxLPiwgUzogU2VtaWdyb3VwPEE+KTogU2VtaWdyb3VwPE1hcDxLLCBBPj4gPT4ge1xuICBjb25zdCBpbnRlcnNlY3Rpb25FUyA9IGludGVyc2VjdGlvbihFLCBTKVxuICByZXR1cm4ge1xuICAgIGNvbmNhdDogKGZpcnN0LCBzZWNvbmQpID0+IGludGVyc2VjdGlvbkVTKHNlY29uZCkoZmlyc3QpXG4gIH1cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREaWZmZXJlbmNlTWFnbWEgPSA8Sz4oRTogRXE8Sz4pID0+IDxBPigpOiBNYWdtYTxNYXA8SywgQT4+ID0+IHtcbiAgY29uc3QgZGlmZmVyZW5jZUUgPSBkaWZmZXJlbmNlKEUpXG4gIHJldHVybiB7XG4gICAgY29uY2F0OiAoZmlyc3QsIHNlY29uZCkgPT4gZGlmZmVyZW5jZUUoc2Vjb25kKShmaXJzdClcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyYWJsZVdpdGhJbmRleDxLID0gbmV2ZXI+KCk6IEZpbHRlcmFibGVXaXRoSW5kZXgyQzxVUkksIEssIEs+IHtcbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIG1hcFdpdGhJbmRleDogX21hcFdpdGhJbmRleCxcbiAgICBjb21wYWN0LFxuICAgIHNlcGFyYXRlLFxuICAgIGZpbHRlcjogX2ZpbHRlcixcbiAgICBmaWx0ZXJNYXA6IF9maWx0ZXJNYXAsXG4gICAgcGFydGl0aW9uOiBfcGFydGl0aW9uLFxuICAgIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcCxcbiAgICBwYXJ0aXRpb25NYXBXaXRoSW5kZXg6IF9wYXJ0aXRpb25NYXBXaXRoSW5kZXgsXG4gICAgcGFydGl0aW9uV2l0aEluZGV4OiBfcGFydGl0aW9uV2l0aEluZGV4LFxuICAgIGZpbHRlck1hcFdpdGhJbmRleDogX2ZpbHRlck1hcFdpdGhJbmRleCxcbiAgICBmaWx0ZXJXaXRoSW5kZXg6IF9maWx0ZXJXaXRoSW5kZXhcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2l0aGVyYWJsZTxLPihPOiBPcmQ8Sz4pOiBXaXRoZXJhYmxlMkM8VVJJLCBLPiAmIFRyYXZlcnNhYmxlV2l0aEluZGV4MkM8VVJJLCBLLCBLPiB7XG4gIGNvbnN0IFRXSSA9IGdldFRyYXZlcnNhYmxlV2l0aEluZGV4KE8pXG4gIHJldHVybiB7XG4gICAgVVJJLFxuICAgIF9FOiB1bmRlZmluZWQgYXMgYW55LFxuICAgIG1hcDogX21hcCxcbiAgICBjb21wYWN0LFxuICAgIHNlcGFyYXRlLFxuICAgIGZpbHRlcjogX2ZpbHRlcixcbiAgICBmaWx0ZXJNYXA6IF9maWx0ZXJNYXAsXG4gICAgcGFydGl0aW9uOiBfcGFydGl0aW9uLFxuICAgIHBhcnRpdGlvbk1hcDogX3BhcnRpdGlvbk1hcCxcbiAgICByZWR1Y2U6IFRXSS5yZWR1Y2UsXG4gICAgZm9sZE1hcDogVFdJLmZvbGRNYXAsXG4gICAgcmVkdWNlUmlnaHQ6IFRXSS5yZWR1Y2VSaWdodCxcbiAgICB0cmF2ZXJzZTogVFdJLnRyYXZlcnNlLFxuICAgIHNlcXVlbmNlOiBUV0kuc2VxdWVuY2UsXG4gICAgbWFwV2l0aEluZGV4OiBfbWFwV2l0aEluZGV4LFxuICAgIHJlZHVjZVdpdGhJbmRleDogVFdJLnJlZHVjZVdpdGhJbmRleCxcbiAgICBmb2xkTWFwV2l0aEluZGV4OiBUV0kuZm9sZE1hcFdpdGhJbmRleCxcbiAgICByZWR1Y2VSaWdodFdpdGhJbmRleDogVFdJLnJlZHVjZVJpZ2h0V2l0aEluZGV4LFxuICAgIHRyYXZlcnNlV2l0aEluZGV4OiBUV0kudHJhdmVyc2VXaXRoSW5kZXgsXG4gICAgd2lsdDogd2lsdERlZmF1bHQoVFdJLCBDb21wYWN0YWJsZSksXG4gICAgd2l0aGVyOiB3aXRoZXJEZWZhdWx0KFRXSSwgQ29tcGFjdGFibGUpXG4gIH1cbn1cblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCByZWR1Y2U6IDxLPihPOiBPcmQ8Sz4pID0+IDxCLCBBPihiOiBCLCBmOiAoYjogQiwgYTogQSkgPT4gQikgPT4gKG06IE1hcDxLLCBBPikgPT4gQiA9IFJNLnJlZHVjZVxuXG4vKipcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGRNYXA6IDxLPihPOiBPcmQ8Sz4pID0+IDxNPihNOiBNb25vaWQ8TT4pID0+IDxBPihmOiAoYTogQSkgPT4gTSkgPT4gKG06IE1hcDxLLCBBPikgPT4gTSA9IFJNLmZvbGRNYXBcblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCByZWR1Y2VSaWdodDogPEs+KE86IE9yZDxLPikgPT4gPEIsIEE+KGI6IEIsIGY6IChhOiBBLCBiOiBCKSA9PiBCKSA9PiAobTogTWFwPEssIEE+KSA9PiBCID0gUk0ucmVkdWNlUmlnaHRcblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRGb2xkYWJsZSA9IDxLPihPOiBPcmQ8Sz4pOiBGb2xkYWJsZTJDPFVSSSwgSz4gPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLlJNLmdldEZvbGRhYmxlKE8pLFxuICAgIFVSSVxuICB9XG59XG5cbi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlV2l0aEluZGV4OiA8Sz4oTzogT3JkPEs+KSA9PiA8QiwgQT4oYjogQiwgZjogKGs6IEssIGI6IEIsIGE6IEEpID0+IEIpID0+IChtOiBNYXA8SywgQT4pID0+IEIgPVxuICBSTS5yZWR1Y2VXaXRoSW5kZXhcblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xkTWFwV2l0aEluZGV4OiA8Sz4oTzogT3JkPEs+KSA9PiA8TT4oTTogTW9ub2lkPE0+KSA9PiA8QT4oZjogKGs6IEssIGE6IEEpID0+IE0pID0+IChtOiBNYXA8SywgQT4pID0+IE0gPVxuICBSTS5mb2xkTWFwV2l0aEluZGV4XG5cbi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlUmlnaHRXaXRoSW5kZXg6IDxLPihPOiBPcmQ8Sz4pID0+IDxCLCBBPihiOiBCLCBmOiAoazogSywgYTogQSwgYjogQikgPT4gQikgPT4gKG06IE1hcDxLLCBBPikgPT4gQiA9XG4gIFJNLnJlZHVjZVJpZ2h0V2l0aEluZGV4XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgY29uc3QgZ2V0Rm9sZGFibGVXaXRoSW5kZXggPSA8Sz4oTzogT3JkPEs+KTogRm9sZGFibGVXaXRoSW5kZXgyQzxVUkksIEssIEs+ID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5STS5nZXRGb2xkYWJsZVdpdGhJbmRleChPKSxcbiAgICBVUklcbiAgfVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBpbnN0YW5jZXNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRyYXZlcnNhYmxlV2l0aEluZGV4ID0gPEs+KE86IE9yZDxLPik6IFRyYXZlcnNhYmxlV2l0aEluZGV4MkM8VVJJLCBLLCBLPiA9PiB7XG4gIGNvbnN0IEZXSSA9IGdldEZvbGRhYmxlV2l0aEluZGV4KE8pXG4gIGNvbnN0IGtleXNPID0ga2V5cyhPKVxuICBjb25zdCB0cmF2ZXJzZVdpdGhJbmRleCA9IDxGPihcbiAgICBGOiBBcHBsaWNhdGl2ZTxGPlxuICApOiAoPEEsIEI+KHRhOiBNYXA8SywgQT4sIGY6IChrOiBLLCBhOiBBKSA9PiBIS1Q8RiwgQj4pID0+IEhLVDxGLCBNYXA8SywgQj4+KSA9PiB7XG4gICAgcmV0dXJuIDxBLCBCPih0YTogTWFwPEssIEE+LCBmOiAoazogSywgYTogQSkgPT4gSEtUPEYsIEI+KSA9PiB7XG4gICAgICBsZXQgZm06IEhLVDxGLCBNYXA8SywgQj4+ID0gRi5vZihuZXcgTWFwKCkpXG4gICAgICBjb25zdCBrcyA9IGtleXNPKHRhKVxuICAgICAgY29uc3QgbGVuID0ga3MubGVuZ3RoXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtzW2ldXG4gICAgICAgIGNvbnN0IGEgPSB0YS5nZXQoa2V5KSFcbiAgICAgICAgZm0gPSBGLmFwKFxuICAgICAgICAgIEYubWFwKGZtLCAobSkgPT4gKGI6IEIpID0+IG0uc2V0KGtleSwgYikpLFxuICAgICAgICAgIGYoa2V5LCBhKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICByZXR1cm4gZm1cbiAgICB9XG4gIH1cbiAgY29uc3QgdHJhdmVyc2UgPSA8Rj4oRjogQXBwbGljYXRpdmU8Rj4pOiAoPEEsIEI+KHRhOiBNYXA8SywgQT4sIGY6IChhOiBBKSA9PiBIS1Q8RiwgQj4pID0+IEhLVDxGLCBNYXA8SywgQj4+KSA9PiB7XG4gICAgY29uc3QgdHJhdmVyc2VXaXRoSW5kZXhGID0gdHJhdmVyc2VXaXRoSW5kZXgoRilcbiAgICByZXR1cm4gKHRhLCBmKSA9PiB0cmF2ZXJzZVdpdGhJbmRleEYodGEsIChfLCBhKSA9PiBmKGEpKVxuICB9XG5cbiAgY29uc3Qgc2VxdWVuY2UgPSA8Rj4oRjogQXBwbGljYXRpdmU8Rj4pOiAoPEE+KHRhOiBNYXA8SywgSEtUPEYsIEE+PikgPT4gSEtUPEYsIE1hcDxLLCBBPj4pID0+IHtcbiAgICBjb25zdCB0cmF2ZXJzZVdpdGhJbmRleEYgPSB0cmF2ZXJzZVdpdGhJbmRleChGKVxuICAgIHJldHVybiAodGEpID0+IHRyYXZlcnNlV2l0aEluZGV4Rih0YSwgKF8sIGEpID0+IGEpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBVUkksXG4gICAgX0U6IHVuZGVmaW5lZCBhcyBhbnksXG4gICAgbWFwOiBfbWFwLFxuICAgIG1hcFdpdGhJbmRleDogX21hcFdpdGhJbmRleCxcbiAgICByZWR1Y2U6IEZXSS5yZWR1Y2UsXG4gICAgZm9sZE1hcDogRldJLmZvbGRNYXAsXG4gICAgcmVkdWNlUmlnaHQ6IEZXSS5yZWR1Y2VSaWdodCxcbiAgICByZWR1Y2VXaXRoSW5kZXg6IEZXSS5yZWR1Y2VXaXRoSW5kZXgsXG4gICAgZm9sZE1hcFdpdGhJbmRleDogRldJLmZvbGRNYXBXaXRoSW5kZXgsXG4gICAgcmVkdWNlUmlnaHRXaXRoSW5kZXg6IEZXSS5yZWR1Y2VSaWdodFdpdGhJbmRleCxcbiAgICB0cmF2ZXJzZSxcbiAgICBzZXF1ZW5jZSxcbiAgICB0cmF2ZXJzZVdpdGhJbmRleFxuICB9XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBGdW5jdG9yOiBGdW5jdG9yMjxVUkk+ID0ge1xuICBVUkksXG4gIG1hcDogX21hcFxufVxuXG4vKipcbiAqIERlcml2YWJsZSBmcm9tIGBGdW5jdG9yYC5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXAgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZsYXBfKEZ1bmN0b3IpXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuNy4wXG4gKi9cbmV4cG9ydCBjb25zdCBDb21wYWN0YWJsZTogQ29tcGFjdGFibGUyPFVSST4gPSB7XG4gIFVSSSxcbiAgY29tcGFjdCxcbiAgc2VwYXJhdGVcbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgaW5zdGFuY2VzXG4gKiBAc2luY2UgMi43LjBcbiAqL1xuZXhwb3J0IGNvbnN0IEZpbHRlcmFibGU6IEZpbHRlcmFibGUyPFVSST4gPSB7XG4gIFVSSSxcbiAgbWFwOiBfbWFwLFxuICBjb21wYWN0LFxuICBzZXBhcmF0ZSxcbiAgZmlsdGVyOiBfZmlsdGVyLFxuICBmaWx0ZXJNYXA6IF9maWx0ZXJNYXAsXG4gIHBhcnRpdGlvbjogX3BhcnRpdGlvbixcbiAgcGFydGl0aW9uTWFwOiBfcGFydGl0aW9uTWFwXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHV0aWxzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IGNvcHkgPSA8SywgQT4obTogTWFwPEssIEE+KTogTWFwPEssIEE+ID0+IG5ldyBNYXAobSlcblxuLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB1bmlvbiA9IDxLLCBBPihFOiBFcTxLPiwgTTogTWFnbWE8QT4pOiAoKHNlY29uZDogTWFwPEssIEE+KSA9PiAoZmlyc3Q6IE1hcDxLLCBBPikgPT4gTWFwPEssIEE+KSA9PiB7XG4gIGNvbnN0IHVuaW9uRU0gPSBSTS51bmlvbihFLCBNKVxuICByZXR1cm4gKHNlY29uZCkgPT4gKGZpcnN0KSA9PiB7XG4gICAgaWYgKGlzRW1wdHkoZmlyc3QpKSB7XG4gICAgICByZXR1cm4gY29weShzZWNvbmQpXG4gICAgfVxuICAgIGlmIChpc0VtcHR5KHNlY29uZCkpIHtcbiAgICAgIHJldHVybiBjb3B5KGZpcnN0KVxuICAgIH1cbiAgICByZXR1cm4gdW5pb25FTShzZWNvbmQpKGZpcnN0KSBhcyBhbnlcbiAgfVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGludGVyc2VjdGlvbiA9IDxLLCBBPihFOiBFcTxLPiwgTTogTWFnbWE8QT4pOiAoKHNlY29uZDogTWFwPEssIEE+KSA9PiAoZmlyc3Q6IE1hcDxLLCBBPikgPT4gTWFwPEssIEE+KSA9PiB7XG4gIGNvbnN0IGludGVyc2VjdGlvbkVNID0gUk0uaW50ZXJzZWN0aW9uKEUsIE0pXG4gIHJldHVybiAoc2Vjb25kKSA9PiAoZmlyc3QpID0+IHtcbiAgICBpZiAoaXNFbXB0eShmaXJzdCkgfHwgaXNFbXB0eShzZWNvbmQpKSB7XG4gICAgICByZXR1cm4gbmV3IE1hcCgpXG4gICAgfVxuICAgIHJldHVybiBpbnRlcnNlY3Rpb25FTShzZWNvbmQpKGZpcnN0KSBhcyBhbnlcbiAgfVxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGRpZmZlcmVuY2UgPSA8Sz4oRTogRXE8Sz4pOiAoPEE+KF9zZWNvbmQ6IE1hcDxLLCBBPikgPT4gKGZpcnN0OiBNYXA8SywgQT4pID0+IE1hcDxLLCBBPikgPT4ge1xuICBjb25zdCBkaWZmZXJlbmNlRSA9IFJNLmRpZmZlcmVuY2UoRSlcbiAgcmV0dXJuIDxBPihzZWNvbmQ6IE1hcDxLLCBBPikgPT4gKGZpcnN0OiBNYXA8SywgQT4pID0+IHtcbiAgICBpZiAoaXNFbXB0eShmaXJzdCkpIHtcbiAgICAgIHJldHVybiBjb3B5KHNlY29uZClcbiAgICB9XG4gICAgaWYgKGlzRW1wdHkoc2Vjb25kKSkge1xuICAgICAgcmV0dXJuIGNvcHkoZmlyc3QpXG4gICAgfVxuICAgIHJldHVybiBkaWZmZXJlbmNlRShzZWNvbmQpKGZpcnN0KSBhcyBhbnlcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXByZWNhdGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVXNlIGEgYG5ldyBNYXAoKWAgaW5zdGVhZC5cbiAqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBlbXB0eSA9IG5ldyBNYXA8bmV2ZXIsIG5ldmVyPigpXG5cbi8qKlxuICogVXNlIFtgdXBzZXJ0QXRgXSgjdXBzZXJ0YXQpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBjb25zdCBpbnNlcnRBdDogPEs+KEU6IEVxPEs+KSA9PiA8QT4oazogSywgYTogQSkgPT4gKG06IE1hcDxLLCBBPikgPT4gTWFwPEssIEE+ID0gdXBzZXJ0QXRcblxuLyoqXG4gKiBVc2UgW2BGaWx0ZXJhYmxlYF0oI2ZpbHRlcmFibGUpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgbWFwXzogRmlsdGVyYWJsZTI8VVJJPiA9IEZpbHRlcmFibGVcbiJdfQ==
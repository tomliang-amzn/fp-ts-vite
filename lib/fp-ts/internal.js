"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tail = exports.some = exports.singleton = exports.right = exports.none = exports.left = exports.isSome = exports.isRight = exports.isNone = exports.isNonEmpty = exports.isLeft = exports.head = exports.has = exports.fromReadonlyNonEmptyArray = exports.emptyRecord = exports.emptyReadonlyArray = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @since 2.10.0
 */
// -------------------------------------------------------------------------------------
// Option
// -------------------------------------------------------------------------------------

/** @internal */
var isNone = function isNone(fa) {
  return fa._tag === 'None';
};
/** @internal */


exports.isNone = isNone;

var isSome = function isSome(fa) {
  return fa._tag === 'Some';
};
/** @internal */


exports.isSome = isSome;
var none = {
  _tag: 'None'
};
/** @internal */

exports.none = none;

var some = function some(a) {
  return {
    _tag: 'Some',
    value: a
  };
}; // -------------------------------------------------------------------------------------
// Either
// -------------------------------------------------------------------------------------

/** @internal */


exports.some = some;

var isLeft = function isLeft(ma) {
  return ma._tag === 'Left';
};
/** @internal */


exports.isLeft = isLeft;

var isRight = function isRight(ma) {
  return ma._tag === 'Right';
};
/** @internal */


exports.isRight = isRight;

var left = function left(e) {
  return {
    _tag: 'Left',
    left: e
  };
};
/** @internal */


exports.left = left;

var right = function right(a) {
  return {
    _tag: 'Right',
    right: a
  };
}; // -------------------------------------------------------------------------------------
// ReadonlyNonEmptyArray
// -------------------------------------------------------------------------------------

/** @internal */


exports.right = right;

var singleton = function singleton(a) {
  return [a];
};
/** @internal */


exports.singleton = singleton;

var isNonEmpty = function isNonEmpty(as) {
  return as.length > 0;
};
/** @internal */


exports.isNonEmpty = isNonEmpty;

var head = function head(as) {
  return as[0];
};
/** @internal */


exports.head = head;

var tail = function tail(as) {
  return as.slice(1);
}; // -------------------------------------------------------------------------------------
// empty
// -------------------------------------------------------------------------------------

/** @internal */


exports.tail = tail;
var emptyReadonlyArray = [];
/** @internal */

exports.emptyReadonlyArray = emptyReadonlyArray;
var emptyRecord = {}; // -------------------------------------------------------------------------------------
// Record
// -------------------------------------------------------------------------------------

/** @internal */

exports.emptyRecord = emptyRecord;
var has = Object.prototype.hasOwnProperty; // -------------------------------------------------------------------------------------
// NonEmptyArray
// -------------------------------------------------------------------------------------

/** @internal */

exports.has = has;

var fromReadonlyNonEmptyArray = function fromReadonlyNonEmptyArray(as) {
  return [as[0]].concat(_toConsumableArray(as.slice(1)));
};

exports.fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9pbnRlcm5hbC50cyJdLCJuYW1lcyI6WyJpc05vbmUiLCJmYSIsIl90YWciLCJpc1NvbWUiLCJub25lIiwic29tZSIsImEiLCJ2YWx1ZSIsImlzTGVmdCIsIm1hIiwiaXNSaWdodCIsImxlZnQiLCJlIiwicmlnaHQiLCJzaW5nbGV0b24iLCJpc05vbkVtcHR5IiwiYXMiLCJsZW5ndGgiLCJoZWFkIiwidGFpbCIsInNsaWNlIiwiZW1wdHlSZWFkb25seUFycmF5IiwiZW1wdHlSZWNvcmQiLCJoYXMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImZyb21SZWFkb25seU5vbkVtcHR5QXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTyxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxFQUFEO0FBQUEsU0FBcUNBLEVBQUUsQ0FBQ0MsSUFBSCxLQUFZLE1BQWpEO0FBQUEsQ0FBZjtBQUVQOzs7OztBQUNPLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUlGLEVBQUo7QUFBQSxTQUFxQ0EsRUFBRSxDQUFDQyxJQUFILEtBQVksTUFBakQ7QUFBQSxDQUFmO0FBRVA7Ozs7QUFDTyxJQUFNRSxJQUFtQixHQUFHO0FBQUVGLEVBQUFBLElBQUksRUFBRTtBQUFSLENBQTVCO0FBRVA7Ozs7QUFDTyxJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFJQyxDQUFKO0FBQUEsU0FBeUI7QUFBRUosSUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JLLElBQUFBLEtBQUssRUFBRUQ7QUFBdkIsR0FBekI7QUFBQSxDQUFiLEMsQ0FFUDtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBQ08sSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBSUMsRUFBSjtBQUFBLFNBQThDQSxFQUFFLENBQUNQLElBQUgsS0FBWSxNQUExRDtBQUFBLENBQWY7QUFFUDs7Ozs7QUFDTyxJQUFNUSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFJRCxFQUFKO0FBQUEsU0FBK0NBLEVBQUUsQ0FBQ1AsSUFBSCxLQUFZLE9BQTNEO0FBQUEsQ0FBaEI7QUFFUDs7Ozs7QUFDTyxJQUFNUyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFlQyxDQUFmO0FBQUEsU0FBdUM7QUFBRVYsSUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JTLElBQUFBLElBQUksRUFBRUM7QUFBdEIsR0FBdkM7QUFBQSxDQUFiO0FBRVA7Ozs7O0FBQ08sSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBZVAsQ0FBZjtBQUFBLFNBQXVDO0FBQUVKLElBQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCVyxJQUFBQSxLQUFLLEVBQUVQO0FBQXhCLEdBQXZDO0FBQUEsQ0FBZCxDLENBRVA7QUFDQTtBQUNBOztBQUVBOzs7OztBQUNPLElBQU1RLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUlSLENBQUo7QUFBQSxTQUErQixDQUFDQSxDQUFELENBQS9CO0FBQUEsQ0FBbEI7QUFFUDs7Ozs7QUFDTyxJQUFNUyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFJQyxFQUFKO0FBQUEsU0FBNkRBLEVBQUUsQ0FBQ0MsTUFBSCxHQUFZLENBQXpFO0FBQUEsQ0FBbkI7QUFFUDs7Ozs7QUFDTyxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFJRixFQUFKO0FBQUEsU0FBd0NBLEVBQUUsQ0FBQyxDQUFELENBQTFDO0FBQUEsQ0FBYjtBQUVQOzs7OztBQUNPLElBQU1HLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUlILEVBQUo7QUFBQSxTQUF1REEsRUFBRSxDQUFDSSxLQUFILENBQVMsQ0FBVCxDQUF2RDtBQUFBLENBQWIsQyxDQUVQO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUNPLElBQU1DLGtCQUErQixHQUFHLEVBQXhDO0FBRVA7OztBQUNPLElBQU1DLFdBQWUsR0FBRyxFQUF4QixDLENBRVA7QUFDQTtBQUNBOztBQUVBOzs7QUFDTyxJQUFNQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsY0FBN0IsQyxDQUVQO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUNPLElBQU1DLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEIsQ0FBSVgsRUFBSjtBQUFBLFVBQXdEQSxFQUFFLENBQUMsQ0FBRCxDQUExRCw0QkFBa0VBLEVBQUUsQ0FBQ0ksS0FBSCxDQUFTLENBQVQsQ0FBbEU7QUFBQSxDQUFsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5pbXBvcnQgeyBFaXRoZXIsIExlZnQsIFJpZ2h0IH0gZnJvbSAnLi9FaXRoZXInXG5pbXBvcnQgeyBOb25FbXB0eUFycmF5IH0gZnJvbSAnLi9Ob25FbXB0eUFycmF5J1xuaW1wb3J0IHsgTm9uZSwgT3B0aW9uLCBTb21lIH0gZnJvbSAnLi9PcHRpb24nXG5pbXBvcnQgeyBSZWFkb25seU5vbkVtcHR5QXJyYXkgfSBmcm9tICcuL1JlYWRvbmx5Tm9uRW1wdHlBcnJheSdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gT3B0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBpc05vbmUgPSAoZmE6IE9wdGlvbjx1bmtub3duPik6IGZhIGlzIE5vbmUgPT4gZmEuX3RhZyA9PT0gJ05vbmUnXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBpc1NvbWUgPSA8QT4oZmE6IE9wdGlvbjxBPik6IGZhIGlzIFNvbWU8QT4gPT4gZmEuX3RhZyA9PT0gJ1NvbWUnXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBub25lOiBPcHRpb248bmV2ZXI+ID0geyBfdGFnOiAnTm9uZScgfVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgc29tZSA9IDxBPihhOiBBKTogT3B0aW9uPEE+ID0+ICh7IF90YWc6ICdTb21lJywgdmFsdWU6IGEgfSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRWl0aGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBpc0xlZnQgPSA8RT4obWE6IEVpdGhlcjxFLCB1bmtub3duPik6IG1hIGlzIExlZnQ8RT4gPT4gbWEuX3RhZyA9PT0gJ0xlZnQnXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBpc1JpZ2h0ID0gPEE+KG1hOiBFaXRoZXI8dW5rbm93biwgQT4pOiBtYSBpcyBSaWdodDxBPiA9PiBtYS5fdGFnID09PSAnUmlnaHQnXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBsZWZ0ID0gPEUsIEEgPSBuZXZlcj4oZTogRSk6IEVpdGhlcjxFLCBBPiA9PiAoeyBfdGFnOiAnTGVmdCcsIGxlZnQ6IGUgfSlcblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0ID0gPEEsIEUgPSBuZXZlcj4oYTogQSk6IEVpdGhlcjxFLCBBPiA9PiAoeyBfdGFnOiAnUmlnaHQnLCByaWdodDogYSB9KVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBSZWFkb25seU5vbkVtcHR5QXJyYXlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNpbmdsZXRvbiA9IDxBPihhOiBBKTogTm9uRW1wdHlBcnJheTxBPiA9PiBbYV1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGlzTm9uRW1wdHkgPSA8QT4oYXM6IFJlYWRvbmx5QXJyYXk8QT4pOiBhcyBpcyBSZWFkb25seU5vbkVtcHR5QXJyYXk8QT4gPT4gYXMubGVuZ3RoID4gMFxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgaGVhZCA9IDxBPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogQSA9PiBhc1swXVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgdGFpbCA9IDxBPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogUmVhZG9ubHlBcnJheTxBPiA9PiBhcy5zbGljZSgxKVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBlbXB0eVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgZW1wdHlSZWFkb25seUFycmF5OiByZWFkb25seSBbXSA9IFtdXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBlbXB0eVJlY29yZDoge30gPSB7fVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBSZWNvcmRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTm9uRW1wdHlBcnJheVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgZnJvbVJlYWRvbmx5Tm9uRW1wdHlBcnJheSA9IDxBPihhczogUmVhZG9ubHlOb25FbXB0eUFycmF5PEE+KTogTm9uRW1wdHlBcnJheTxBPiA9PiBbYXNbMF0sIC4uLmFzLnNsaWNlKDEpXVxuIl19
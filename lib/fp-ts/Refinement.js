"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zero = exports.or = exports.not = exports.id = exports.fromOptionK = exports.fromEitherK = exports.compose = exports.and = void 0;

var _ = _interopRequireWildcard(require("./internal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @since 2.11.0
 */
// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * Returns a `Refinement` from a `Option` returning function.
 * This function ensures that a `Refinement` definition is type-safe.
 *
 * @category constructors
 * @since 2.11.0
 */
var fromOptionK = function fromOptionK(getOption) {
  return function (a) {
    return _.isSome(getOption(a));
  };
};
/**
 * @category constructors
 * @since 2.11.0
 */


exports.fromOptionK = fromOptionK;

var fromEitherK = function fromEitherK(getEither) {
  return function (a) {
    return _.isRight(getEither(a));
  };
};
/**
 * @category constructors
 * @since 2.11.0
 */


exports.fromEitherK = fromEitherK;

var id = function id() {
  return function (_) {
    return true;
  };
}; // -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * @category combinators
 * @since 2.11.0
 */


exports.id = id;

var not = function not(refinement) {
  return function (a) {
    return !refinement(a);
  };
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.not = not;

var or = function or(second) {
  return function (first) {
    return function (a) {
      return first(a) || second(a);
    };
  };
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.or = or;

var and = function and(second) {
  return function (first) {
    return function (a) {
      return first(a) && second(a);
    };
  };
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.and = and;

var zero = function zero() {
  return function (_) {
    return false;
  };
};
/**
 * @category combinators
 * @since 2.11.0
 */


exports.zero = zero;

var compose = function compose(bc) {
  return function (ab) {
    return function (i) {
      return ab(i) && bc(i);
    };
  };
};

exports.compose = compose;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9SZWZpbmVtZW50LnRzIl0sIm5hbWVzIjpbImZyb21PcHRpb25LIiwiZ2V0T3B0aW9uIiwiYSIsIl8iLCJpc1NvbWUiLCJmcm9tRWl0aGVySyIsImdldEVpdGhlciIsImlzUmlnaHQiLCJpZCIsIm5vdCIsInJlZmluZW1lbnQiLCJvciIsInNlY29uZCIsImZpcnN0IiwiYW5kIiwiemVybyIsImNvbXBvc2UiLCJiYyIsImFiIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUE7Ozs7OztBQUpBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFpQkMsU0FBakIsRUFBc0U7QUFDL0YsU0FBTyxVQUFDQyxDQUFEO0FBQUEsV0FBa0JDLENBQUMsQ0FBQ0MsTUFBRixDQUFTSCxTQUFTLENBQUNDLENBQUQsQ0FBbEIsQ0FBbEI7QUFBQSxHQUFQO0FBQ0QsQ0FGTTtBQUlQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQWlCQyxTQUFqQixFQUErRTtBQUN4RyxTQUFPLFVBQUNKLENBQUQ7QUFBQSxXQUFrQkMsQ0FBQyxDQUFDSSxPQUFGLENBQVVELFNBQVMsQ0FBQ0osQ0FBRCxDQUFuQixDQUFsQjtBQUFBLEdBQVA7QUFDRCxDQUZNO0FBSVA7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTU0sRUFBRSxHQUFHLFNBQUxBLEVBQUssR0FBMkI7QUFDM0MsU0FBTyxVQUFDTCxDQUFEO0FBQUEsV0FBZSxJQUFmO0FBQUEsR0FBUDtBQUNELENBRk0sQyxDQUlQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNTSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFpQkMsVUFBakI7QUFBQSxTQUFnRixVQUNqR1IsQ0FEaUc7QUFBQSxXQUUxRSxDQUFDUSxVQUFVLENBQUNSLENBQUQsQ0FGK0Q7QUFBQSxHQUFoRjtBQUFBLENBQVo7QUFJUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNUyxFQUFFLEdBQUcsU0FBTEEsRUFBSyxDQUFpQkMsTUFBakI7QUFBQSxTQUE4QyxVQUM5REMsS0FEOEQ7QUFBQSxXQUVyQyxVQUFDWCxDQUFEO0FBQUEsYUFBbUJXLEtBQUssQ0FBQ1gsQ0FBRCxDQUFMLElBQVlVLE1BQU0sQ0FBQ1YsQ0FBRCxDQUFyQztBQUFBLEtBRnFDO0FBQUEsR0FBOUM7QUFBQSxDQUFYO0FBSVA7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTVksR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBaUJGLE1BQWpCO0FBQUEsU0FBOEMsVUFDL0RDLEtBRCtEO0FBQUEsV0FFdEMsVUFBQ1gsQ0FBRDtBQUFBLGFBQW1CVyxLQUFLLENBQUNYLENBQUQsQ0FBTCxJQUFZVSxNQUFNLENBQUNWLENBQUQsQ0FBckM7QUFBQSxLQUZzQztBQUFBLEdBQTlDO0FBQUEsQ0FBWjtBQUlQO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1hLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQXdDO0FBQzFELFNBQU8sVUFBQ1osQ0FBRDtBQUFBLFdBQWUsS0FBZjtBQUFBLEdBQVA7QUFDRCxDQUZNO0FBSVA7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sSUFBTWEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBOEJDLEVBQTlCO0FBQUEsU0FBdUQsVUFDNUVDLEVBRDRFLEVBRXZEO0FBQ3JCLFdBQU8sVUFBQ0MsQ0FBRDtBQUFBLGFBQWVELEVBQUUsQ0FBQ0MsQ0FBRCxDQUFGLElBQVNGLEVBQUUsQ0FBQ0UsQ0FBRCxDQUExQjtBQUFBLEtBQVA7QUFDRCxHQUpzQjtBQUFBLENBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4vT3B0aW9uJ1xuaW1wb3J0ICogYXMgXyBmcm9tICcuL2ludGVybmFsJ1xuaW1wb3J0IHsgRWl0aGVyIH0gZnJvbSAnLi9FaXRoZXInXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG1vZGVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlZmluZW1lbnQ8QSwgQiBleHRlbmRzIEE+IHtcbiAgKGE6IEEpOiBhIGlzIEJcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29uc3RydWN0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogUmV0dXJucyBhIGBSZWZpbmVtZW50YCBmcm9tIGEgYE9wdGlvbmAgcmV0dXJuaW5nIGZ1bmN0aW9uLlxuICogVGhpcyBmdW5jdGlvbiBlbnN1cmVzIHRoYXQgYSBgUmVmaW5lbWVudGAgZGVmaW5pdGlvbiBpcyB0eXBlLXNhZmUuXG4gKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgZnJvbU9wdGlvbksgPSA8QSwgQiBleHRlbmRzIEE+KGdldE9wdGlvbjogKGE6IEEpID0+IE9wdGlvbjxCPik6IFJlZmluZW1lbnQ8QSwgQj4gPT4ge1xuICByZXR1cm4gKGE6IEEpOiBhIGlzIEIgPT4gXy5pc1NvbWUoZ2V0T3B0aW9uKGEpKVxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb25zdHJ1Y3RvcnNcbiAqIEBzaW5jZSAyLjExLjBcbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21FaXRoZXJLID0gPEEsIEIgZXh0ZW5kcyBBPihnZXRFaXRoZXI6IChhOiBBKSA9PiBFaXRoZXI8dW5rbm93biwgQj4pOiBSZWZpbmVtZW50PEEsIEI+ID0+IHtcbiAgcmV0dXJuIChhOiBBKTogYSBpcyBCID0+IF8uaXNSaWdodChnZXRFaXRoZXIoYSkpXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbnN0cnVjdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgaWQgPSA8QT4oKTogUmVmaW5lbWVudDxBLCBBPiA9PiB7XG4gIHJldHVybiAoXyk6IF8gaXMgQSA9PiB0cnVlXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGNvbWJpbmF0b3JzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBub3QgPSA8QSwgQiBleHRlbmRzIEE+KHJlZmluZW1lbnQ6IFJlZmluZW1lbnQ8QSwgQj4pOiBSZWZpbmVtZW50PEEsIEV4Y2x1ZGU8QSwgQj4+ID0+IChcbiAgYVxuKTogYSBpcyBFeGNsdWRlPEEsIEI+ID0+ICFyZWZpbmVtZW50KGEpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBvciA9IDxBLCBDIGV4dGVuZHMgQT4oc2Vjb25kOiBSZWZpbmVtZW50PEEsIEM+KSA9PiA8QiBleHRlbmRzIEE+KFxuICBmaXJzdDogUmVmaW5lbWVudDxBLCBCPlxuKTogUmVmaW5lbWVudDxBLCBCIHwgQz4gPT4gKGEpOiBhIGlzIEIgfCBDID0+IGZpcnN0KGEpIHx8IHNlY29uZChhKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMTEuMFxuICovXG5leHBvcnQgY29uc3QgYW5kID0gPEEsIEMgZXh0ZW5kcyBBPihzZWNvbmQ6IFJlZmluZW1lbnQ8QSwgQz4pID0+IDxCIGV4dGVuZHMgQT4oXG4gIGZpcnN0OiBSZWZpbmVtZW50PEEsIEI+XG4pOiBSZWZpbmVtZW50PEEsIEIgJiBDPiA9PiAoYSk6IGEgaXMgQiAmIEMgPT4gZmlyc3QoYSkgJiYgc2Vjb25kKGEpXG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCB6ZXJvID0gPEEsIEIgZXh0ZW5kcyBBPigpOiBSZWZpbmVtZW50PEEsIEI+ID0+IHtcbiAgcmV0dXJuIChfKTogXyBpcyBCID0+IGZhbHNlXG59XG5cbi8qKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMS4wXG4gKi9cbmV4cG9ydCBjb25zdCBjb21wb3NlID0gPEEsIEIgZXh0ZW5kcyBBLCBDIGV4dGVuZHMgQj4oYmM6IFJlZmluZW1lbnQ8QiwgQz4pID0+IChcbiAgYWI6IFJlZmluZW1lbnQ8QSwgQj5cbik6IFJlZmluZW1lbnQ8QSwgQz4gPT4ge1xuICByZXR1cm4gKGkpOiBpIGlzIEMgPT4gYWIoaSkgJiYgYmMoaSlcbn1cbiJdfQ==
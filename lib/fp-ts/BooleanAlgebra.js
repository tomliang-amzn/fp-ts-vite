"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverse = exports.getFunctionBooleanAlgebra = exports.getDualBooleanAlgebra = exports.booleanAlgebraVoid = exports.booleanAlgebraBoolean = void 0;

var _function = require("./function");

/**
 * Boolean algebras are Heyting algebras with the additional constraint that the law of the excluded middle is true
 * (equivalently, double-negation is true).
 *
 * Instances should satisfy the following laws in addition to the `HeytingAlgebra` laws:
 *
 * - Excluded middle: `a ∨ ¬a <-> 1`
 *
 * Boolean algebras generalize classical logic: one is equivalent to "true" and zero is equivalent to "false".
 *
 * @since 2.0.0
 */
// -------------------------------------------------------------------------------------
// combinators
// -------------------------------------------------------------------------------------

/**
 * Every boolean algebras has a dual algebra, which involves reversing one/zero as well as join/meet.
 *
 * @category combinators
 * @since 2.10.0
 */
var reverse = function reverse(B) {
  return {
    meet: function meet(x, y) {
      return B.join(x, y);
    },
    join: function join(x, y) {
      return B.meet(x, y);
    },
    zero: B.one,
    one: B.zero,
    implies: function implies(x, y) {
      return B.join(B.not(x), y);
    },
    not: B.not
  };
}; // -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.0.0
 */


exports.reverse = reverse;
var booleanAlgebraVoid = {
  meet: function meet() {
    return undefined;
  },
  join: function join() {
    return undefined;
  },
  zero: undefined,
  one: undefined,
  implies: function implies() {
    return undefined;
  },
  not: function not() {
    return undefined;
  }
}; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------

/**
 * Use [`reverse`](#reverse) instead.
 *
 * @category combinators
 * @since 2.0.0
 * @deprecated
 */

exports.booleanAlgebraVoid = booleanAlgebraVoid;
var getDualBooleanAlgebra = reverse;
/**
 * Use [`BooleanAlgebra`](./boolean.ts.html#booleanalgebra) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.getDualBooleanAlgebra = getDualBooleanAlgebra;
var booleanAlgebraBoolean = {
  meet: function meet(x, y) {
    return x && y;
  },
  join: function join(x, y) {
    return x || y;
  },
  zero: false,
  one: true,
  implies: function implies(x, y) {
    return !x || y;
  },
  not: function not(x) {
    return !x;
  }
};
/**
 * Use [`getBooleanAlgebra`](./function.ts.html#getbooleanalgebra) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */

exports.booleanAlgebraBoolean = booleanAlgebraBoolean;
var getFunctionBooleanAlgebra = _function.getBooleanAlgebra;
exports.getFunctionBooleanAlgebra = getFunctionBooleanAlgebra;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9Cb29sZWFuQWxnZWJyYS50cyJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiQiIsIm1lZXQiLCJ4IiwieSIsImpvaW4iLCJ6ZXJvIiwib25lIiwiaW1wbGllcyIsIm5vdCIsImJvb2xlYW5BbGdlYnJhVm9pZCIsInVuZGVmaW5lZCIsImdldER1YWxCb29sZWFuQWxnZWJyYSIsImJvb2xlYW5BbGdlYnJhQm9vbGVhbiIsImdldEZ1bmN0aW9uQm9vbGVhbkFsZ2VicmEiLCJnZXRCb29sZWFuQWxnZWJyYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQWFBOztBQWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFJQyxDQUFKO0FBQUEsU0FBaUQ7QUFDdEVDLElBQUFBLElBQUksRUFBRSxjQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVSCxDQUFDLENBQUNJLElBQUYsQ0FBT0YsQ0FBUCxFQUFVQyxDQUFWLENBQVY7QUFBQSxLQURnRTtBQUV0RUMsSUFBQUEsSUFBSSxFQUFFLGNBQUNGLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVVILENBQUMsQ0FBQ0MsSUFBRixDQUFPQyxDQUFQLEVBQVVDLENBQVYsQ0FBVjtBQUFBLEtBRmdFO0FBR3RFRSxJQUFBQSxJQUFJLEVBQUVMLENBQUMsQ0FBQ00sR0FIOEQ7QUFJdEVBLElBQUFBLEdBQUcsRUFBRU4sQ0FBQyxDQUFDSyxJQUorRDtBQUt0RUUsSUFBQUEsT0FBTyxFQUFFLGlCQUFDTCxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVSCxDQUFDLENBQUNJLElBQUYsQ0FBT0osQ0FBQyxDQUFDUSxHQUFGLENBQU1OLENBQU4sQ0FBUCxFQUFpQkMsQ0FBakIsQ0FBVjtBQUFBLEtBTDZEO0FBTXRFSyxJQUFBQSxHQUFHLEVBQUVSLENBQUMsQ0FBQ1E7QUFOK0QsR0FBakQ7QUFBQSxDQUFoQixDLENBU1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ08sSUFBTUMsa0JBQXdDLEdBQUc7QUFDdERSLEVBQUFBLElBQUksRUFBRTtBQUFBLFdBQU1TLFNBQU47QUFBQSxHQURnRDtBQUV0RE4sRUFBQUEsSUFBSSxFQUFFO0FBQUEsV0FBTU0sU0FBTjtBQUFBLEdBRmdEO0FBR3RETCxFQUFBQSxJQUFJLEVBQUVLLFNBSGdEO0FBSXRESixFQUFBQSxHQUFHLEVBQUVJLFNBSmlEO0FBS3RESCxFQUFBQSxPQUFPLEVBQUU7QUFBQSxXQUFNRyxTQUFOO0FBQUEsR0FMNkM7QUFNdERGLEVBQUFBLEdBQUcsRUFBRTtBQUFBLFdBQU1FLFNBQU47QUFBQTtBQU5pRCxDQUFqRCxDLENBU1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxxQkFBcUIsR0FBR1osT0FBOUI7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTWEscUJBQThDLEdBQUc7QUFDNURYLEVBQUFBLElBQUksRUFBRSxjQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVRCxDQUFDLElBQUlDLENBQWY7QUFBQSxHQURzRDtBQUU1REMsRUFBQUEsSUFBSSxFQUFFLGNBQUNGLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVELENBQUMsSUFBSUMsQ0FBZjtBQUFBLEdBRnNEO0FBRzVERSxFQUFBQSxJQUFJLEVBQUUsS0FIc0Q7QUFJNURDLEVBQUFBLEdBQUcsRUFBRSxJQUp1RDtBQUs1REMsRUFBQUEsT0FBTyxFQUFFLGlCQUFDTCxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVLENBQUNELENBQUQsSUFBTUMsQ0FBaEI7QUFBQSxHQUxtRDtBQU01REssRUFBQUEsR0FBRyxFQUFFLGFBQUNOLENBQUQ7QUFBQSxXQUFPLENBQUNBLENBQVI7QUFBQTtBQU51RCxDQUF2RDtBQVNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNVyx5QkFFb0MsR0FBR0MsMkJBRjdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCb29sZWFuIGFsZ2VicmFzIGFyZSBIZXl0aW5nIGFsZ2VicmFzIHdpdGggdGhlIGFkZGl0aW9uYWwgY29uc3RyYWludCB0aGF0IHRoZSBsYXcgb2YgdGhlIGV4Y2x1ZGVkIG1pZGRsZSBpcyB0cnVlXG4gKiAoZXF1aXZhbGVudGx5LCBkb3VibGUtbmVnYXRpb24gaXMgdHJ1ZSkuXG4gKlxuICogSW5zdGFuY2VzIHNob3VsZCBzYXRpc2Z5IHRoZSBmb2xsb3dpbmcgbGF3cyBpbiBhZGRpdGlvbiB0byB0aGUgYEhleXRpbmdBbGdlYnJhYCBsYXdzOlxuICpcbiAqIC0gRXhjbHVkZWQgbWlkZGxlOiBgYSDiiKggwqxhIDwtPiAxYFxuICpcbiAqIEJvb2xlYW4gYWxnZWJyYXMgZ2VuZXJhbGl6ZSBjbGFzc2ljYWwgbG9naWM6IG9uZSBpcyBlcXVpdmFsZW50IHRvIFwidHJ1ZVwiIGFuZCB6ZXJvIGlzIGVxdWl2YWxlbnQgdG8gXCJmYWxzZVwiLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5pbXBvcnQgeyBIZXl0aW5nQWxnZWJyYSB9IGZyb20gJy4vSGV5dGluZ0FsZ2VicmEnXG5pbXBvcnQgeyBnZXRCb29sZWFuQWxnZWJyYSB9IGZyb20gJy4vZnVuY3Rpb24nXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIG1vZGVsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IHR5cGUgY2xhc3Nlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQm9vbGVhbkFsZ2VicmE8QT4gZXh0ZW5kcyBIZXl0aW5nQWxnZWJyYTxBPiB7fVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBjb21iaW5hdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEV2ZXJ5IGJvb2xlYW4gYWxnZWJyYXMgaGFzIGEgZHVhbCBhbGdlYnJhLCB3aGljaCBpbnZvbHZlcyByZXZlcnNpbmcgb25lL3plcm8gYXMgd2VsbCBhcyBqb2luL21lZXQuXG4gKlxuICogQGNhdGVnb3J5IGNvbWJpbmF0b3JzXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCByZXZlcnNlID0gPEE+KEI6IEJvb2xlYW5BbGdlYnJhPEE+KTogQm9vbGVhbkFsZ2VicmE8QT4gPT4gKHtcbiAgbWVldDogKHgsIHkpID0+IEIuam9pbih4LCB5KSxcbiAgam9pbjogKHgsIHkpID0+IEIubWVldCh4LCB5KSxcbiAgemVybzogQi5vbmUsXG4gIG9uZTogQi56ZXJvLFxuICBpbXBsaWVzOiAoeCwgeSkgPT4gQi5qb2luKEIubm90KHgpLCB5KSxcbiAgbm90OiBCLm5vdFxufSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gaW5zdGFuY2VzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBib29sZWFuQWxnZWJyYVZvaWQ6IEJvb2xlYW5BbGdlYnJhPHZvaWQ+ID0ge1xuICBtZWV0OiAoKSA9PiB1bmRlZmluZWQsXG4gIGpvaW46ICgpID0+IHVuZGVmaW5lZCxcbiAgemVybzogdW5kZWZpbmVkLFxuICBvbmU6IHVuZGVmaW5lZCxcbiAgaW1wbGllczogKCkgPT4gdW5kZWZpbmVkLFxuICBub3Q6ICgpID0+IHVuZGVmaW5lZFxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBkZXByZWNhdGVkXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVXNlIFtgcmV2ZXJzZWBdKCNyZXZlcnNlKSBpbnN0ZWFkLlxuICpcbiAqIEBjYXRlZ29yeSBjb21iaW5hdG9yc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0RHVhbEJvb2xlYW5BbGdlYnJhID0gcmV2ZXJzZVxuXG4vKipcbiAqIFVzZSBbYEJvb2xlYW5BbGdlYnJhYF0oLi9ib29sZWFuLnRzLmh0bWwjYm9vbGVhbmFsZ2VicmEpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgYm9vbGVhbkFsZ2VicmFCb29sZWFuOiBCb29sZWFuQWxnZWJyYTxib29sZWFuPiA9IHtcbiAgbWVldDogKHgsIHkpID0+IHggJiYgeSxcbiAgam9pbjogKHgsIHkpID0+IHggfHwgeSxcbiAgemVybzogZmFsc2UsXG4gIG9uZTogdHJ1ZSxcbiAgaW1wbGllczogKHgsIHkpID0+ICF4IHx8IHksXG4gIG5vdDogKHgpID0+ICF4XG59XG5cbi8qKlxuICogVXNlIFtgZ2V0Qm9vbGVhbkFsZ2VicmFgXSguL2Z1bmN0aW9uLnRzLmh0bWwjZ2V0Ym9vbGVhbmFsZ2VicmEpIGluc3RlYWQuXG4gKlxuICogQGNhdGVnb3J5IGluc3RhbmNlc1xuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgY29uc3QgZ2V0RnVuY3Rpb25Cb29sZWFuQWxnZWJyYTogPEI+KFxuICBCOiBCb29sZWFuQWxnZWJyYTxCPlxuKSA9PiA8QSA9IG5ldmVyPigpID0+IEJvb2xlYW5BbGdlYnJhPChhOiBBKSA9PiBCPiA9IGdldEJvb2xlYW5BbGdlYnJhXG4iXX0=
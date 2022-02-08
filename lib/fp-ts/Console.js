"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = exports.log = exports.info = exports.error = void 0;

/**
 * @since 2.0.0
 */

/**
 * @since 2.0.0
 */
var log = function log(a) {
  return function () {
    return console.log(a);
  };
}; // tslint:disable-line:no-console

/**
 * @since 2.0.0
 */


exports.log = log;

var warn = function warn(a) {
  return function () {
    return console.warn(a);
  };
}; // tslint:disable-line:no-console

/**
 * @since 2.0.0
 */


exports.warn = warn;

var error = function error(a) {
  return function () {
    return console.error(a);
  };
}; // tslint:disable-line:no-console

/**
 * @since 2.0.0
 */


exports.error = error;

var info = function info(a) {
  return function () {
    return console.info(a);
  };
}; // tslint:disable-line:no-console


exports.info = info;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9Db25zb2xlLnRzIl0sIm5hbWVzIjpbImxvZyIsImEiLCJjb25zb2xlIiwid2FybiIsImVycm9yIiwiaW5mbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFJQyxDQUFKO0FBQUEsU0FBdUI7QUFBQSxXQUFNQyxPQUFPLENBQUNGLEdBQVIsQ0FBWUMsQ0FBWixDQUFOO0FBQUEsR0FBdkI7QUFBQSxDQUFaLEMsQ0FBd0Q7O0FBRS9EO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFJRixDQUFKO0FBQUEsU0FBdUI7QUFBQSxXQUFNQyxPQUFPLENBQUNDLElBQVIsQ0FBYUYsQ0FBYixDQUFOO0FBQUEsR0FBdkI7QUFBQSxDQUFiLEMsQ0FBMEQ7O0FBRWpFO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNRyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFJSCxDQUFKO0FBQUEsU0FBdUI7QUFBQSxXQUFNQyxPQUFPLENBQUNFLEtBQVIsQ0FBY0gsQ0FBZCxDQUFOO0FBQUEsR0FBdkI7QUFBQSxDQUFkLEMsQ0FBNEQ7O0FBRW5FO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFJSixDQUFKO0FBQUEsU0FBdUI7QUFBQSxXQUFNQyxPQUFPLENBQUNHLElBQVIsQ0FBYUosQ0FBYixDQUFOO0FBQUEsR0FBdkI7QUFBQSxDQUFiLEMsQ0FBMEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5pbXBvcnQgeyBJTyB9IGZyb20gJy4vSU8nXG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBsb2cgPSA8QT4oYTogQSk6IElPPHZvaWQ+ID0+ICgpID0+IGNvbnNvbGUubG9nKGEpIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tY29uc29sZVxuXG4vKipcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3Qgd2FybiA9IDxBPihhOiBBKTogSU88dm9pZD4gPT4gKCkgPT4gY29uc29sZS53YXJuKGEpIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tY29uc29sZVxuXG4vKipcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgY29uc3QgZXJyb3IgPSA8QT4oYTogQSk6IElPPHZvaWQ+ID0+ICgpID0+IGNvbnNvbGUuZXJyb3IoYSkgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1jb25zb2xlXG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBpbmZvID0gPEE+KGE6IEEpOiBJTzx2b2lkPiA9PiAoKSA9PiBjb25zb2xlLmluZm8oYSkgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1jb25zb2xlXG4iXX0=
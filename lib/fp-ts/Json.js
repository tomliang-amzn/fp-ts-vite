"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringify = exports.parse = void 0;

var _Either = require("./Either");

var _function = require("./function");

/**
 * @since 2.10.0
 */

/**
 * Converts a JavaScript Object Notation (JSON) string into a `Json` type.
 *
 * @example
 * import * as J from 'fp-ts/Json'
 * import * as E from 'fp-ts/Either'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(pipe('{"a":1}', J.parse), E.right({ a: 1 }))
 * assert.deepStrictEqual(pipe('{"a":}', J.parse), E.left(new SyntaxError('Unexpected token } in JSON at position 5')))
 *
 * @since 2.10.0
 */
var parse = function parse(s) {
  return (0, _Either.tryCatch)(function () {
    return JSON.parse(s);
  }, _function.identity);
};
/**
 * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
 *
 * @example
 * import * as E from 'fp-ts/Either'
 * import * as J from 'fp-ts/Json'
 * import { pipe } from 'fp-ts/function'
 *
 * assert.deepStrictEqual(J.stringify({ a: 1 }), E.right('{"a":1}'))
 * const circular: any = { ref: null }
 * circular.ref = circular
 * assert.deepStrictEqual(
 *   pipe(
 *     J.stringify(circular),
 *     E.mapLeft(e => e instanceof Error && e.message.includes('Converting circular structure to JSON'))
 *   ),
 *   E.left(true)
 * )
 *
 *  @since 2.10.0
 */


exports.parse = parse;

var stringify = function stringify(a) {
  return (0, _Either.tryCatch)(function () {
    var s = JSON.stringify(a);

    if (typeof s !== 'string') {
      throw new Error('Converting unsupported structure to JSON');
    }

    return s;
  }, _function.identity);
};

exports.stringify = stringify;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9Kc29uLnRzIl0sIm5hbWVzIjpbInBhcnNlIiwicyIsIkpTT04iLCJpZGVudGl0eSIsInN0cmluZ2lmeSIsImEiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUNBOztBQUpBO0FBQ0E7QUFDQTs7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxDQUFEO0FBQUEsU0FBc0Msc0JBQVM7QUFBQSxXQUFNQyxJQUFJLENBQUNGLEtBQUwsQ0FBV0MsQ0FBWCxDQUFOO0FBQUEsR0FBVCxFQUE4QkUsa0JBQTlCLENBQXRDO0FBQUEsQ0FBZDtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFJQyxDQUFKO0FBQUEsU0FDdkIsc0JBQVMsWUFBTTtBQUNiLFFBQU1KLENBQUMsR0FBR0MsSUFBSSxDQUFDRSxTQUFMLENBQWVDLENBQWYsQ0FBVjs7QUFDQSxRQUFJLE9BQU9KLENBQVAsS0FBYSxRQUFqQixFQUEyQjtBQUN6QixZQUFNLElBQUlLLEtBQUosQ0FBVSwwQ0FBVixDQUFOO0FBQ0Q7O0FBQ0QsV0FBT0wsQ0FBUDtBQUNELEdBTkQsRUFNR0Usa0JBTkgsQ0FEdUI7QUFBQSxDQUFsQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5pbXBvcnQgeyBFaXRoZXIsIHRyeUNhdGNoIH0gZnJvbSAnLi9FaXRoZXInXG5pbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vZnVuY3Rpb24nXG5cbi8qKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgdHlwZSBKc29uID0gYm9vbGVhbiB8IG51bWJlciB8IHN0cmluZyB8IG51bGwgfCBKc29uQXJyYXkgfCBKc29uUmVjb3JkXG5cbi8qKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEpzb25SZWNvcmQge1xuICByZWFkb25seSBba2V5OiBzdHJpbmddOiBKc29uXG59XG5cbi8qKlxuICogQHNpbmNlIDIuMTAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEpzb25BcnJheSBleHRlbmRzIFJlYWRvbmx5QXJyYXk8SnNvbj4ge31cblxuLyoqXG4gKiBDb252ZXJ0cyBhIEphdmFTY3JpcHQgT2JqZWN0IE5vdGF0aW9uIChKU09OKSBzdHJpbmcgaW50byBhIGBKc29uYCB0eXBlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgKiBhcyBKIGZyb20gJ2ZwLXRzL0pzb24nXG4gKiBpbXBvcnQgKiBhcyBFIGZyb20gJ2ZwLXRzL0VpdGhlcidcbiAqIGltcG9ydCB7IHBpcGUgfSBmcm9tICdmcC10cy9mdW5jdGlvbidcbiAqXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBpcGUoJ3tcImFcIjoxfScsIEoucGFyc2UpLCBFLnJpZ2h0KHsgYTogMSB9KSlcbiAqIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGlwZSgne1wiYVwiOn0nLCBKLnBhcnNlKSwgRS5sZWZ0KG5ldyBTeW50YXhFcnJvcignVW5leHBlY3RlZCB0b2tlbiB9IGluIEpTT04gYXQgcG9zaXRpb24gNScpKSlcbiAqXG4gKiBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZSA9IChzOiBzdHJpbmcpOiBFaXRoZXI8dW5rbm93biwgSnNvbj4gPT4gdHJ5Q2F0Y2goKCkgPT4gSlNPTi5wYXJzZShzKSwgaWRlbnRpdHkpXG5cbi8qKlxuICogQ29udmVydHMgYSBKYXZhU2NyaXB0IHZhbHVlIHRvIGEgSmF2YVNjcmlwdCBPYmplY3QgTm90YXRpb24gKEpTT04pIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0ICogYXMgRSBmcm9tICdmcC10cy9FaXRoZXInXG4gKiBpbXBvcnQgKiBhcyBKIGZyb20gJ2ZwLXRzL0pzb24nXG4gKiBpbXBvcnQgeyBwaXBlIH0gZnJvbSAnZnAtdHMvZnVuY3Rpb24nXG4gKlxuICogYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChKLnN0cmluZ2lmeSh7IGE6IDEgfSksIEUucmlnaHQoJ3tcImFcIjoxfScpKVxuICogY29uc3QgY2lyY3VsYXI6IGFueSA9IHsgcmVmOiBudWxsIH1cbiAqIGNpcmN1bGFyLnJlZiA9IGNpcmN1bGFyXG4gKiBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICogICBwaXBlKFxuICogICAgIEouc3RyaW5naWZ5KGNpcmN1bGFyKSxcbiAqICAgICBFLm1hcExlZnQoZSA9PiBlIGluc3RhbmNlb2YgRXJyb3IgJiYgZS5tZXNzYWdlLmluY2x1ZGVzKCdDb252ZXJ0aW5nIGNpcmN1bGFyIHN0cnVjdHVyZSB0byBKU09OJykpXG4gKiAgICksXG4gKiAgIEUubGVmdCh0cnVlKVxuICogKVxuICpcbiAqICBAc2luY2UgMi4xMC4wXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmdpZnkgPSA8QT4oYTogQSk6IEVpdGhlcjx1bmtub3duLCBzdHJpbmc+ID0+XG4gIHRyeUNhdGNoKCgpID0+IHtcbiAgICBjb25zdCBzID0gSlNPTi5zdHJpbmdpZnkoYSlcbiAgICBpZiAodHlwZW9mIHMgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnZlcnRpbmcgdW5zdXBwb3J0ZWQgc3RydWN0dXJlIHRvIEpTT04nKVxuICAgIH1cbiAgICByZXR1cm4gc1xuICB9LCBpZGVudGl0eSlcbiJdfQ==
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getValidationM = getValidationM;

var _Applicative = require("./Applicative");

var E = _interopRequireWildcard(require("./Either"));

var _ = _interopRequireWildcard(require("./internal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @since 2.0.0
 */
var Either = E.Either; // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation

/**
 * @since 2.0.0
 * @deprecated
 */

/** @deprecated */
function getValidationM(S, M) {
  var A = (0, _Applicative.getApplicativeComposition)(M, E.getApplicativeValidation(S));
  return {
    map: A.map,
    ap: A.ap,
    of: A.of,
    chain: function chain(ma, f) {
      return M.chain(ma, function (e) {
        return _.isLeft(e) ? M.of(_.left(e.left)) : f(e.right);
      });
    },
    alt: function alt(me, that) {
      return M.chain(me, function (e1) {
        return _.isRight(e1) ? M.of(e1) : M.map(that(), function (e2) {
          return _.isLeft(e2) ? _.left(S.concat(e1.left, e2.left)) : e2;
        });
      });
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9WYWxpZGF0aW9uVC50cyJdLCJuYW1lcyI6WyJFaXRoZXIiLCJFIiwiZ2V0VmFsaWRhdGlvbk0iLCJTIiwiTSIsIkEiLCJnZXRBcHBsaWNhdGl2ZVZhbGlkYXRpb24iLCJtYXAiLCJhcCIsIm9mIiwiY2hhaW4iLCJtYSIsImYiLCJlIiwiXyIsImlzTGVmdCIsImxlZnQiLCJyaWdodCIsImFsdCIsIm1lIiwidGhhdCIsImUxIiwiaXNSaWdodCIsImUyIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFHQTs7QUFNQTs7QUFHQTs7Ozs7O0FBWkE7QUFDQTtBQUNBO0lBY09BLE0sR0FBU0MsQyxDQUFFRCxNLEVBRWxCO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQWtFQTtBQUVPLFNBQVNFLGNBQVQsQ0FBOEJDLENBQTlCLEVBQStDQyxDQUEvQyxFQUErRTtBQUNwRixNQUFNQyxDQUFDLEdBQUcsNENBQTBCRCxDQUExQixFQUE2QkgsQ0FBQyxDQUFDSyx3QkFBRixDQUEyQkgsQ0FBM0IsQ0FBN0IsQ0FBVjtBQUVBLFNBQU87QUFDTEksSUFBQUEsR0FBRyxFQUFFRixDQUFDLENBQUNFLEdBREY7QUFFTEMsSUFBQUEsRUFBRSxFQUFFSCxDQUFDLENBQUNHLEVBRkQ7QUFHTEMsSUFBQUEsRUFBRSxFQUFFSixDQUFDLENBQUNJLEVBSEQ7QUFJTEMsSUFBQUEsS0FBSyxFQUFFLGVBQUNDLEVBQUQsRUFBS0MsQ0FBTDtBQUFBLGFBQVdSLENBQUMsQ0FBQ00sS0FBRixDQUFRQyxFQUFSLEVBQVksVUFBQ0UsQ0FBRDtBQUFBLGVBQVFDLENBQUMsQ0FBQ0MsTUFBRixDQUFTRixDQUFULElBQWNULENBQUMsQ0FBQ0ssRUFBRixDQUFLSyxDQUFDLENBQUNFLElBQUYsQ0FBT0gsQ0FBQyxDQUFDRyxJQUFULENBQUwsQ0FBZCxHQUFxQ0osQ0FBQyxDQUFDQyxDQUFDLENBQUNJLEtBQUgsQ0FBOUM7QUFBQSxPQUFaLENBQVg7QUFBQSxLQUpGO0FBS0xDLElBQUFBLEdBQUcsRUFBRSxhQUFDQyxFQUFELEVBQUtDLElBQUw7QUFBQSxhQUNIaEIsQ0FBQyxDQUFDTSxLQUFGLENBQVFTLEVBQVIsRUFBWSxVQUFDRSxFQUFEO0FBQUEsZUFDVlAsQ0FBQyxDQUFDUSxPQUFGLENBQVVELEVBQVYsSUFBZ0JqQixDQUFDLENBQUNLLEVBQUYsQ0FBS1ksRUFBTCxDQUFoQixHQUEyQmpCLENBQUMsQ0FBQ0csR0FBRixDQUFNYSxJQUFJLEVBQVYsRUFBYyxVQUFDRyxFQUFEO0FBQUEsaUJBQVNULENBQUMsQ0FBQ0MsTUFBRixDQUFTUSxFQUFULElBQWVULENBQUMsQ0FBQ0UsSUFBRixDQUFPYixDQUFDLENBQUNxQixNQUFGLENBQVNILEVBQUUsQ0FBQ0wsSUFBWixFQUFrQk8sRUFBRSxDQUFDUCxJQUFyQixDQUFQLENBQWYsR0FBb0RPLEVBQTdEO0FBQUEsU0FBZCxDQURqQjtBQUFBLE9BQVosQ0FERztBQUFBO0FBTEEsR0FBUDtBQVVEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuaW1wb3J0IHtcbiAgQXBwbGljYXRpdmVDb21wb3NpdGlvbjEyQyxcbiAgQXBwbGljYXRpdmVDb21wb3NpdGlvbjIyQyxcbiAgQXBwbGljYXRpdmVDb21wb3NpdGlvbkhLVDJDLFxuICBnZXRBcHBsaWNhdGl2ZUNvbXBvc2l0aW9uXG59IGZyb20gJy4vQXBwbGljYXRpdmUnXG5pbXBvcnQgKiBhcyBFIGZyb20gJy4vRWl0aGVyJ1xuaW1wb3J0IHsgTGF6eSB9IGZyb20gJy4vZnVuY3Rpb24nXG5pbXBvcnQgeyBIS1QsIEtpbmQsIEtpbmQyLCBVUklTLCBVUklTMiB9IGZyb20gJy4vSEtUJ1xuaW1wb3J0ICogYXMgXyBmcm9tICcuL2ludGVybmFsJ1xuaW1wb3J0IHsgTW9uYWQsIE1vbmFkMSwgTW9uYWQyIH0gZnJvbSAnLi9Nb25hZCdcbmltcG9ydCB7IFNlbWlncm91cCB9IGZyb20gJy4vU2VtaWdyb3VwJ1xuXG5pbXBvcnQgRWl0aGVyID0gRS5FaXRoZXJcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb25cblxuLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmFsaWRhdGlvblQ8TSwgRSwgQT4gZXh0ZW5kcyBIS1Q8TSwgRWl0aGVyPEUsIEE+PiB7fVxuXG4vKipcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIFZhbGlkYXRpb25NPE0sIEU+IGV4dGVuZHMgQXBwbGljYXRpdmVDb21wb3NpdGlvbkhLVDJDPE0sIEUuVVJJLCBFPiB7XG4gIHJlYWRvbmx5IGNoYWluOiA8QSwgQj4obWE6IFZhbGlkYXRpb25UPE0sIEUsIEE+LCBmOiAoYTogQSkgPT4gVmFsaWRhdGlvblQ8TSwgRSwgQj4pID0+IFZhbGlkYXRpb25UPE0sIEUsIEI+XG5cbiAgcmVhZG9ubHkgYWx0OiA8QT4oZmE6IFZhbGlkYXRpb25UPE0sIEUsIEE+LCB0aGF0OiBMYXp5PFZhbGlkYXRpb25UPE0sIEUsIEE+PikgPT4gVmFsaWRhdGlvblQ8TSwgRSwgQT5cbn1cblxuLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCB0eXBlIFZhbGlkYXRpb25UMTxNIGV4dGVuZHMgVVJJUywgRSwgQT4gPSBLaW5kPE0sIEVpdGhlcjxFLCBBPj5cblxuLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uTTE8TSBleHRlbmRzIFVSSVMsIEU+IGV4dGVuZHMgQXBwbGljYXRpdmVDb21wb3NpdGlvbjEyQzxNLCBFLlVSSSwgRT4ge1xuICByZWFkb25seSBjaGFpbjogPEEsIEI+KG1hOiBWYWxpZGF0aW9uVDE8TSwgRSwgQT4sIGY6IChhOiBBKSA9PiBWYWxpZGF0aW9uVDE8TSwgRSwgQj4pID0+IFZhbGlkYXRpb25UMTxNLCBFLCBCPlxuXG4gIHJlYWRvbmx5IGFsdDogPEE+KGZhOiBWYWxpZGF0aW9uVDE8TSwgRSwgQT4sIHRoYXQ6IExhenk8VmFsaWRhdGlvblQxPE0sIEUsIEE+PikgPT4gVmFsaWRhdGlvblQxPE0sIEUsIEE+XG59XG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgdHlwZSBWYWxpZGF0aW9uVDI8TSBleHRlbmRzIFVSSVMyLCBSLCBFLCBBPiA9IEtpbmQyPE0sIFIsIEVpdGhlcjxFLCBBPj5cblxuLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBWYWxpZGF0aW9uTTI8TSBleHRlbmRzIFVSSVMyLCBFPiBleHRlbmRzIEFwcGxpY2F0aXZlQ29tcG9zaXRpb24yMkM8TSwgRS5VUkksIEU+IHtcbiAgcmVhZG9ubHkgY2hhaW46IDxSLCBBLCBCPihcbiAgICBtYTogVmFsaWRhdGlvblQyPE0sIFIsIEUsIEE+LFxuXG4gICAgZjogKGE6IEEpID0+IFZhbGlkYXRpb25UMjxNLCBSLCBFLCBCPlxuICApID0+IFZhbGlkYXRpb25UMjxNLCBSLCBFLCBCPlxuXG4gIHJlYWRvbmx5IGFsdDogPFIsIEE+KGZhOiBWYWxpZGF0aW9uVDI8TSwgUiwgRSwgQT4sIHRoYXQ6IExhenk8VmFsaWRhdGlvblQyPE0sIFIsIEUsIEE+PikgPT4gVmFsaWRhdGlvblQyPE0sIFIsIEUsIEE+XG59XG5cbi8qKlxuICogVXNlIGBFaXRoZXJUYCBpbnN0ZWFkLlxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbk08RSwgTSBleHRlbmRzIFVSSVMyPihTOiBTZW1pZ3JvdXA8RT4sIE06IE1vbmFkMjxNPik6IFZhbGlkYXRpb25NMjxNLCBFPlxuLyoqIEBkZXByZWNhdGVkICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZGF0aW9uTTxFLCBNIGV4dGVuZHMgVVJJUz4oUzogU2VtaWdyb3VwPEU+LCBNOiBNb25hZDE8TT4pOiBWYWxpZGF0aW9uTTE8TSwgRT5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbk08RSwgTT4oUzogU2VtaWdyb3VwPEU+LCBNOiBNb25hZDxNPik6IFZhbGlkYXRpb25NPE0sIEU+XG4vKiogQGRlcHJlY2F0ZWQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbGlkYXRpb25NPEUsIE0+KFM6IFNlbWlncm91cDxFPiwgTTogTW9uYWQ8TT4pOiBWYWxpZGF0aW9uTTxNLCBFPiB7XG4gIGNvbnN0IEEgPSBnZXRBcHBsaWNhdGl2ZUNvbXBvc2l0aW9uKE0sIEUuZ2V0QXBwbGljYXRpdmVWYWxpZGF0aW9uKFMpKVxuXG4gIHJldHVybiB7XG4gICAgbWFwOiBBLm1hcCxcbiAgICBhcDogQS5hcCxcbiAgICBvZjogQS5vZixcbiAgICBjaGFpbjogKG1hLCBmKSA9PiBNLmNoYWluKG1hLCAoZSkgPT4gKF8uaXNMZWZ0KGUpID8gTS5vZihfLmxlZnQoZS5sZWZ0KSkgOiBmKGUucmlnaHQpKSksXG4gICAgYWx0OiAobWUsIHRoYXQpID0+XG4gICAgICBNLmNoYWluKG1lLCAoZTEpID0+XG4gICAgICAgIF8uaXNSaWdodChlMSkgPyBNLm9mKGUxKSA6IE0ubWFwKHRoYXQoKSwgKGUyKSA9PiAoXy5pc0xlZnQoZTIpID8gXy5sZWZ0KFMuY29uY2F0KGUxLmxlZnQsIGUyLmxlZnQpKSA6IGUyKSlcbiAgICAgIClcbiAgfVxufVxuIl19
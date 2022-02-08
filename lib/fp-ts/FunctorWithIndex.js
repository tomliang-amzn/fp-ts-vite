"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFunctorWithIndexComposition = getFunctorWithIndexComposition;
exports.mapWithIndex = mapWithIndex;

var _function = require("./function");

var _Functor = require("./Functor");

/**
 * A `FunctorWithIndex` is a type constructor which supports a mapping operation `mapWithIndex`.
 *
 * `mapWithIndex` can be used to turn functions `i -> a -> b` into functions `f a -> f b` whose argument and return types use the type
 * constructor `f` to represent some computational context.
 *
 * Instances must satisfy the following laws:
 *
 * 1. Identity: `F.mapWithIndex(fa, (_i, a) => a) <-> fa`
 * 2. Composition: `F.mapWithIndex(fa, (_i, a) => bc(ab(a))) <-> F.mapWithIndex(F.mapWithIndex(fa, ab), bc)`
 *
 * @since 2.0.0
 */
function mapWithIndex(F, G) {
  return function (f) {
    return function (fa) {
      return F.mapWithIndex(fa, function (i, ga) {
        return G.mapWithIndex(ga, function (j, a) {
          return f([i, j], a);
        });
      });
    };
  };
} // -------------------------------------------------------------------------------------
// deprecated
// -------------------------------------------------------------------------------------
// tslint:disable: deprecation

/**
 * @since 2.0.0
 * @deprecated
 */


/** @deprecated */
function getFunctorWithIndexComposition(F, G) {
  var map = (0, _Functor.getFunctorComposition)(F, G).map;

  var _mapWithIndex = mapWithIndex(F, G);

  return {
    map: map,
    mapWithIndex: function mapWithIndex(fga, f) {
      return (0, _function.pipe)(fga, _mapWithIndex(f));
    }
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcC10cy9GdW5jdG9yV2l0aEluZGV4LnRzIl0sIm5hbWVzIjpbIm1hcFdpdGhJbmRleCIsIkYiLCJHIiwiZiIsImZhIiwiaSIsImdhIiwiaiIsImEiLCJnZXRGdW5jdG9yV2l0aEluZGV4Q29tcG9zaXRpb24iLCJtYXAiLCJfbWFwV2l0aEluZGV4IiwiZmdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQWFBOztBQUNBOztBQWRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBb0dPLFNBQVNBLFlBQVQsQ0FDTEMsQ0FESyxFQUVMQyxDQUZLLEVBR3dGO0FBQzdGLFNBQU8sVUFBQ0MsQ0FBRDtBQUFBLFdBQU8sVUFBQ0MsRUFBRDtBQUFBLGFBQVFILENBQUMsQ0FBQ0QsWUFBRixDQUFlSSxFQUFmLEVBQW1CLFVBQUNDLENBQUQsRUFBSUMsRUFBSjtBQUFBLGVBQVdKLENBQUMsQ0FBQ0YsWUFBRixDQUFlTSxFQUFmLEVBQW1CLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGlCQUFVTCxDQUFDLENBQUMsQ0FBQ0UsQ0FBRCxFQUFJRSxDQUFKLENBQUQsRUFBU0MsQ0FBVCxDQUFYO0FBQUEsU0FBbkIsQ0FBWDtBQUFBLE9BQW5CLENBQVI7QUFBQSxLQUFQO0FBQUEsR0FBUDtBQUNELEMsQ0FFRDtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBdUhBO0FBQ08sU0FBU0MsOEJBQVQsQ0FDTFIsQ0FESyxFQUVMQyxDQUZLLEVBR3NDO0FBQzNDLE1BQU1RLEdBQUcsR0FBRyxvQ0FBc0JULENBQXRCLEVBQXlCQyxDQUF6QixFQUE0QlEsR0FBeEM7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHWCxZQUFZLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUFsQzs7QUFDQSxTQUFPO0FBQ0xRLElBQUFBLEdBQUcsRUFBSEEsR0FESztBQUVMVixJQUFBQSxZQUFZLEVBQUUsc0JBQUNZLEdBQUQsRUFBTVQsQ0FBTjtBQUFBLGFBQWlCLG9CQUFLUyxHQUFMLEVBQVVELGFBQWEsQ0FBQ1IsQ0FBRCxDQUF2QixDQUFqQjtBQUFBO0FBRlQsR0FBUDtBQUlEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIGBGdW5jdG9yV2l0aEluZGV4YCBpcyBhIHR5cGUgY29uc3RydWN0b3Igd2hpY2ggc3VwcG9ydHMgYSBtYXBwaW5nIG9wZXJhdGlvbiBgbWFwV2l0aEluZGV4YC5cbiAqXG4gKiBgbWFwV2l0aEluZGV4YCBjYW4gYmUgdXNlZCB0byB0dXJuIGZ1bmN0aW9ucyBgaSAtPiBhIC0+IGJgIGludG8gZnVuY3Rpb25zIGBmIGEgLT4gZiBiYCB3aG9zZSBhcmd1bWVudCBhbmQgcmV0dXJuIHR5cGVzIHVzZSB0aGUgdHlwZVxuICogY29uc3RydWN0b3IgYGZgIHRvIHJlcHJlc2VudCBzb21lIGNvbXB1dGF0aW9uYWwgY29udGV4dC5cbiAqXG4gKiBJbnN0YW5jZXMgbXVzdCBzYXRpc2Z5IHRoZSBmb2xsb3dpbmcgbGF3czpcbiAqXG4gKiAxLiBJZGVudGl0eTogYEYubWFwV2l0aEluZGV4KGZhLCAoX2ksIGEpID0+IGEpIDwtPiBmYWBcbiAqIDIuIENvbXBvc2l0aW9uOiBgRi5tYXBXaXRoSW5kZXgoZmEsIChfaSwgYSkgPT4gYmMoYWIoYSkpKSA8LT4gRi5tYXBXaXRoSW5kZXgoRi5tYXBXaXRoSW5kZXgoZmEsIGFiKSwgYmMpYFxuICpcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5pbXBvcnQgeyBwaXBlIH0gZnJvbSAnLi9mdW5jdGlvbidcbmltcG9ydCB7XG4gIEZ1bmN0b3IsXG4gIEZ1bmN0b3IxLFxuICBGdW5jdG9yMixcbiAgRnVuY3RvcjJDLFxuICBGdW5jdG9yMyxcbiAgRnVuY3RvcjNDLFxuICBGdW5jdG9yNCxcbiAgRnVuY3RvckNvbXBvc2l0aW9uLFxuICBGdW5jdG9yQ29tcG9zaXRpb24xMSxcbiAgRnVuY3RvckNvbXBvc2l0aW9uMTIsXG4gIEZ1bmN0b3JDb21wb3NpdGlvbjEyQyxcbiAgRnVuY3RvckNvbXBvc2l0aW9uMjEsXG4gIEZ1bmN0b3JDb21wb3NpdGlvbjIyLFxuICBGdW5jdG9yQ29tcG9zaXRpb24yMkMsXG4gIEZ1bmN0b3JDb21wb3NpdGlvbjJDMSxcbiAgZ2V0RnVuY3RvckNvbXBvc2l0aW9uXG59IGZyb20gJy4vRnVuY3RvcidcbmltcG9ydCB7IEhLVCwgS2luZCwgS2luZDIsIEtpbmQzLCBLaW5kNCwgVVJJUywgVVJJUzIsIFVSSVMzLCBVUklTNCB9IGZyb20gJy4vSEtUJ1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBtb2RlbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEBjYXRlZ29yeSB0eXBlIGNsYXNzZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmN0b3JXaXRoSW5kZXg8RiwgST4gZXh0ZW5kcyBGdW5jdG9yPEY+IHtcbiAgcmVhZG9ubHkgbWFwV2l0aEluZGV4OiA8QSwgQj4oZmE6IEhLVDxGLCBBPiwgZjogKGk6IEksIGE6IEEpID0+IEIpID0+IEhLVDxGLCBCPlxufVxuXG4vKipcbiAqIEBjYXRlZ29yeSB0eXBlIGNsYXNzZXNcbiAqIEBzaW5jZSAyLjAuMFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmN0b3JXaXRoSW5kZXgxPEYgZXh0ZW5kcyBVUklTLCBJPiBleHRlbmRzIEZ1bmN0b3IxPEY+IHtcbiAgcmVhZG9ubHkgbWFwV2l0aEluZGV4OiA8QSwgQj4oZmE6IEtpbmQ8RiwgQT4sIGY6IChpOiBJLCBhOiBBKSA9PiBCKSA9PiBLaW5kPEYsIEI+XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IHR5cGUgY2xhc3Nlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRnVuY3RvcldpdGhJbmRleDI8RiBleHRlbmRzIFVSSVMyLCBJPiBleHRlbmRzIEZ1bmN0b3IyPEY+IHtcbiAgcmVhZG9ubHkgbWFwV2l0aEluZGV4OiA8RSwgQSwgQj4oZmE6IEtpbmQyPEYsIEUsIEE+LCBmOiAoaTogSSwgYTogQSkgPT4gQikgPT4gS2luZDI8RiwgRSwgQj5cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgdHlwZSBjbGFzc2VzXG4gKiBAc2luY2UgMi4wLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGdW5jdG9yV2l0aEluZGV4MkM8RiBleHRlbmRzIFVSSVMyLCBJLCBFPiBleHRlbmRzIEZ1bmN0b3IyQzxGLCBFPiB7XG4gIHJlYWRvbmx5IG1hcFdpdGhJbmRleDogPEEsIEI+KGZhOiBLaW5kMjxGLCBFLCBBPiwgZjogKGk6IEksIGE6IEEpID0+IEIpID0+IEtpbmQyPEYsIEUsIEI+XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IHR5cGUgY2xhc3Nlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRnVuY3RvcldpdGhJbmRleDM8RiBleHRlbmRzIFVSSVMzLCBJPiBleHRlbmRzIEZ1bmN0b3IzPEY+IHtcbiAgcmVhZG9ubHkgbWFwV2l0aEluZGV4OiA8UiwgRSwgQSwgQj4oZmE6IEtpbmQzPEYsIFIsIEUsIEE+LCBmOiAoaTogSSwgYTogQSkgPT4gQikgPT4gS2luZDM8RiwgUiwgRSwgQj5cbn1cblxuLyoqXG4gKiBAY2F0ZWdvcnkgdHlwZSBjbGFzc2VzXG4gKiBAc2luY2UgMi4yLjBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGdW5jdG9yV2l0aEluZGV4M0M8RiBleHRlbmRzIFVSSVMzLCBJLCBFPiBleHRlbmRzIEZ1bmN0b3IzQzxGLCBFPiB7XG4gIHJlYWRvbmx5IG1hcFdpdGhJbmRleDogPFIsIEEsIEI+KGZhOiBLaW5kMzxGLCBSLCBFLCBBPiwgZjogKGk6IEksIGE6IEEpID0+IEIpID0+IEtpbmQzPEYsIFIsIEUsIEI+XG59XG5cbi8qKlxuICogQGNhdGVnb3J5IHR5cGUgY2xhc3Nlc1xuICogQHNpbmNlIDIuMC4wXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRnVuY3RvcldpdGhJbmRleDQ8RiBleHRlbmRzIFVSSVM0LCBJPiBleHRlbmRzIEZ1bmN0b3I0PEY+IHtcbiAgcmVhZG9ubHkgbWFwV2l0aEluZGV4OiA8UywgUiwgRSwgQSwgQj4oZmE6IEtpbmQ0PEYsIFMsIFIsIEUsIEE+LCBmOiAoaTogSSwgYTogQSkgPT4gQikgPT4gS2luZDQ8RiwgUywgUiwgRSwgQj5cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY29tYmluYXRvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBgbWFwV2l0aEluZGV4YCBjb21wb3NpdGlvbi5cbiAqXG4gKiBAY2F0ZWdvcnkgY29tYmluYXRvcnNcbiAqIEBzaW5jZSAyLjEwLjBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcFdpdGhJbmRleDxGIGV4dGVuZHMgVVJJUywgSSwgRyBleHRlbmRzIFVSSVMsIEo+KFxuICBGOiBGdW5jdG9yV2l0aEluZGV4MTxGLCBJPixcbiAgRzogRnVuY3RvcldpdGhJbmRleDE8RywgSj5cbik6IDxBLCBCPihmOiAoaWo6IHJlYWRvbmx5IFtJLCBKXSwgYTogQSkgPT4gQikgPT4gKGZhOiBLaW5kPEYsIEtpbmQ8RywgQT4+KSA9PiBLaW5kPEYsIEtpbmQ8RywgQj4+XG5leHBvcnQgZnVuY3Rpb24gbWFwV2l0aEluZGV4PEYsIEksIEcsIEo+KFxuICBGOiBGdW5jdG9yV2l0aEluZGV4PEYsIEk+LFxuICBHOiBGdW5jdG9yV2l0aEluZGV4PEcsIEo+XG4pOiA8QSwgQj4oZjogKGlqOiByZWFkb25seSBbSSwgSl0sIGE6IEEpID0+IEIpID0+IChmYTogSEtUPEYsIEhLVDxHLCBBPj4pID0+IEhLVDxGLCBIS1Q8RywgQj4+XG5leHBvcnQgZnVuY3Rpb24gbWFwV2l0aEluZGV4PEYsIEksIEcsIEo+KFxuICBGOiBGdW5jdG9yV2l0aEluZGV4PEYsIEk+LFxuICBHOiBGdW5jdG9yV2l0aEluZGV4PEcsIEo+XG4pOiA8QSwgQj4oZjogKGlqOiByZWFkb25seSBbSSwgSl0sIGE6IEEpID0+IEIpID0+IChmYTogSEtUPEYsIEhLVDxHLCBBPj4pID0+IEhLVDxGLCBIS1Q8RywgQj4+IHtcbiAgcmV0dXJuIChmKSA9PiAoZmEpID0+IEYubWFwV2l0aEluZGV4KGZhLCAoaSwgZ2EpID0+IEcubWFwV2l0aEluZGV4KGdhLCAoaiwgYSkgPT4gZihbaSwgal0sIGEpKSlcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZGVwcmVjYXRlZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZTogZGVwcmVjYXRpb25cblxuLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRnVuY3RvcldpdGhJbmRleENvbXBvc2l0aW9uPEYsIEZJLCBHLCBHST4gZXh0ZW5kcyBGdW5jdG9yQ29tcG9zaXRpb248RiwgRz4ge1xuICByZWFkb25seSBtYXBXaXRoSW5kZXg6IDxBLCBCPihmZ2E6IEhLVDxGLCBIS1Q8RywgQT4+LCBmOiAoaTogW0ZJLCBHSV0sIGE6IEEpID0+IEIpID0+IEhLVDxGLCBIS1Q8RywgQj4+XG59XG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmN0b3JXaXRoSW5kZXhDb21wb3NpdGlvbjExPEYgZXh0ZW5kcyBVUklTLCBGSSwgRyBleHRlbmRzIFVSSVMsIEdJPlxuICBleHRlbmRzIEZ1bmN0b3JDb21wb3NpdGlvbjExPEYsIEc+IHtcbiAgcmVhZG9ubHkgbWFwV2l0aEluZGV4OiA8QSwgQj4oZmE6IEtpbmQ8RiwgS2luZDxHLCBBPj4sIGY6IChpOiBbRkksIEdJXSwgYTogQSkgPT4gQikgPT4gS2luZDxGLCBLaW5kPEcsIEI+PlxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGdW5jdG9yV2l0aEluZGV4Q29tcG9zaXRpb24xMjxGIGV4dGVuZHMgVVJJUywgRkksIEcgZXh0ZW5kcyBVUklTMiwgR0k+XG4gIGV4dGVuZHMgRnVuY3RvckNvbXBvc2l0aW9uMTI8RiwgRz4ge1xuICByZWFkb25seSBtYXBXaXRoSW5kZXg6IDxFLCBBLCBCPihmYTogS2luZDxGLCBLaW5kMjxHLCBFLCBBPj4sIGY6IChpOiBbRkksIEdJXSwgYTogQSkgPT4gQikgPT4gS2luZDxGLCBLaW5kMjxHLCBFLCBCPj5cbn1cblxuLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRnVuY3RvcldpdGhJbmRleENvbXBvc2l0aW9uMTJDPEYgZXh0ZW5kcyBVUklTLCBGSSwgRyBleHRlbmRzIFVSSVMyLCBHSSwgRT5cbiAgZXh0ZW5kcyBGdW5jdG9yQ29tcG9zaXRpb24xMkM8RiwgRywgRT4ge1xuICByZWFkb25seSBtYXBXaXRoSW5kZXg6IDxBLCBCPihmYTogS2luZDxGLCBLaW5kMjxHLCBFLCBBPj4sIGY6IChpOiBbRkksIEdJXSwgYTogQSkgPT4gQikgPT4gS2luZDxGLCBLaW5kMjxHLCBFLCBCPj5cbn1cblxuLyoqXG4gKiBAc2luY2UgMi4wLjBcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRnVuY3RvcldpdGhJbmRleENvbXBvc2l0aW9uMjE8RiBleHRlbmRzIFVSSVMyLCBGSSwgRyBleHRlbmRzIFVSSVMsIEdJPlxuICBleHRlbmRzIEZ1bmN0b3JDb21wb3NpdGlvbjIxPEYsIEc+IHtcbiAgcmVhZG9ubHkgbWFwV2l0aEluZGV4OiA8RSwgQSwgQj4oZmE6IEtpbmQyPEYsIEUsIEtpbmQ8RywgQT4+LCBmOiAoaTogW0ZJLCBHSV0sIGE6IEEpID0+IEIpID0+IEtpbmQyPEYsIEUsIEtpbmQ8RywgQj4+XG59XG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmN0b3JXaXRoSW5kZXhDb21wb3NpdGlvbjJDMTxGIGV4dGVuZHMgVVJJUzIsIEZJLCBHIGV4dGVuZHMgVVJJUywgR0ksIEU+XG4gIGV4dGVuZHMgRnVuY3RvckNvbXBvc2l0aW9uMkMxPEYsIEcsIEU+IHtcbiAgcmVhZG9ubHkgbWFwV2l0aEluZGV4OiA8QSwgQj4oZmE6IEtpbmQyPEYsIEUsIEtpbmQ8RywgQT4+LCBmOiAoaTogW0ZJLCBHSV0sIGE6IEEpID0+IEIpID0+IEtpbmQyPEYsIEUsIEtpbmQ8RywgQj4+XG59XG5cbi8qKlxuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZ1bmN0b3JXaXRoSW5kZXhDb21wb3NpdGlvbjIyPEYgZXh0ZW5kcyBVUklTMiwgRkksIEcgZXh0ZW5kcyBVUklTMiwgR0k+XG4gIGV4dGVuZHMgRnVuY3RvckNvbXBvc2l0aW9uMjI8RiwgRz4ge1xuICByZWFkb25seSBtYXBXaXRoSW5kZXg6IDxGRSwgR0UsIEEsIEI+KFxuICAgIGZhOiBLaW5kMjxGLCBGRSwgS2luZDI8RywgR0UsIEE+PixcbiAgICBmOiAoaTogW0ZJLCBHSV0sIGE6IEEpID0+IEJcbiAgKSA9PiBLaW5kMjxGLCBGRSwgS2luZDI8RywgR0UsIEI+PlxufVxuXG4vKipcbiAqIEBzaW5jZSAyLjAuMFxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGdW5jdG9yV2l0aEluZGV4Q29tcG9zaXRpb24yMkM8RiBleHRlbmRzIFVSSVMyLCBGSSwgRyBleHRlbmRzIFVSSVMyLCBHSSwgRT5cbiAgZXh0ZW5kcyBGdW5jdG9yQ29tcG9zaXRpb24yMkM8RiwgRywgRT4ge1xuICByZWFkb25seSBtYXBXaXRoSW5kZXg6IDxGRSwgQSwgQj4oXG4gICAgZmE6IEtpbmQyPEYsIEZFLCBLaW5kMjxHLCBFLCBBPj4sXG4gICAgZjogKGk6IFtGSSwgR0ldLCBhOiBBKSA9PiBCXG4gICkgPT4gS2luZDI8RiwgRkUsIEtpbmQyPEcsIEUsIEI+PlxufVxuXG4vKipcbiAqIFVzZSBbYG1hcFdpdGhJbmRleGBdKCNtYXB3aXRoaW5kZXgpIGluc3RlYWQuXG4gKlxuICogQHNpbmNlIDIuMC4wXG4gKiBAZGVwcmVjYXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVuY3RvcldpdGhJbmRleENvbXBvc2l0aW9uPEYgZXh0ZW5kcyBVUklTMiwgRkksIEcgZXh0ZW5kcyBVUklTMiwgR0ksIEU+KFxuICBGOiBGdW5jdG9yV2l0aEluZGV4MjxGLCBGST4sXG4gIEc6IEZ1bmN0b3JXaXRoSW5kZXgyQzxHLCBGSSwgRT5cbik6IEZ1bmN0b3JXaXRoSW5kZXhDb21wb3NpdGlvbjIyQzxGLCBGSSwgRywgR0ksIEU+XG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdW5jdG9yV2l0aEluZGV4Q29tcG9zaXRpb248RiBleHRlbmRzIFVSSVMyLCBGSSwgRyBleHRlbmRzIFVSSVMyLCBHST4oXG4gIEY6IEZ1bmN0b3JXaXRoSW5kZXgyPEYsIEZJPixcbiAgRzogRnVuY3RvcldpdGhJbmRleDI8RywgRkk+XG4pOiBGdW5jdG9yV2l0aEluZGV4Q29tcG9zaXRpb24yMjxGLCBGSSwgRywgR0k+XG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdW5jdG9yV2l0aEluZGV4Q29tcG9zaXRpb248RiBleHRlbmRzIFVSSVMyLCBGSSwgRyBleHRlbmRzIFVSSVMsIEdJLCBFPihcbiAgRjogRnVuY3RvcldpdGhJbmRleDJDPEYsIEZJLCBFPixcbiAgRzogRnVuY3RvcldpdGhJbmRleDE8RywgR0k+XG4pOiBGdW5jdG9yV2l0aEluZGV4Q29tcG9zaXRpb24yQzE8RiwgRkksIEcsIEdJLCBFPlxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVuY3RvcldpdGhJbmRleENvbXBvc2l0aW9uPEYgZXh0ZW5kcyBVUklTMiwgRkksIEcgZXh0ZW5kcyBVUklTLCBHST4oXG4gIEY6IEZ1bmN0b3JXaXRoSW5kZXgyPEYsIEZJPixcbiAgRzogRnVuY3RvcldpdGhJbmRleDE8RywgR0k+XG4pOiBGdW5jdG9yV2l0aEluZGV4Q29tcG9zaXRpb24yMTxGLCBGSSwgRywgR0k+XG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdW5jdG9yV2l0aEluZGV4Q29tcG9zaXRpb248RiBleHRlbmRzIFVSSVMsIEZJLCBHIGV4dGVuZHMgVVJJUzIsIEdJLCBFPihcbiAgRjogRnVuY3RvcldpdGhJbmRleDE8RiwgRkk+LFxuICBHOiBGdW5jdG9yV2l0aEluZGV4MkM8RywgR0ksIEU+XG4pOiBGdW5jdG9yV2l0aEluZGV4Q29tcG9zaXRpb24xMkM8RiwgRkksIEcsIEdJLCBFPlxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVuY3RvcldpdGhJbmRleENvbXBvc2l0aW9uPEYgZXh0ZW5kcyBVUklTLCBGSSwgRyBleHRlbmRzIFVSSVMyLCBHST4oXG4gIEY6IEZ1bmN0b3JXaXRoSW5kZXgxPEYsIEZJPixcbiAgRzogRnVuY3RvcldpdGhJbmRleDI8RywgR0k+XG4pOiBGdW5jdG9yV2l0aEluZGV4Q29tcG9zaXRpb24xMjxGLCBGSSwgRywgR0k+XG4vKiogQGRlcHJlY2F0ZWQgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdW5jdG9yV2l0aEluZGV4Q29tcG9zaXRpb248RiBleHRlbmRzIFVSSVMsIEZJLCBHIGV4dGVuZHMgVVJJUywgR0k+KFxuICBGOiBGdW5jdG9yV2l0aEluZGV4MTxGLCBGST4sXG4gIEc6IEZ1bmN0b3JXaXRoSW5kZXgxPEcsIEdJPlxuKTogRnVuY3RvcldpdGhJbmRleENvbXBvc2l0aW9uMTE8RiwgRkksIEcsIEdJPlxuLyoqIEBkZXByZWNhdGVkICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVuY3RvcldpdGhJbmRleENvbXBvc2l0aW9uPEYsIEZJLCBHLCBHST4oXG4gIEY6IEZ1bmN0b3JXaXRoSW5kZXg8RiwgRkk+LFxuICBHOiBGdW5jdG9yV2l0aEluZGV4PEcsIEdJPlxuKTogRnVuY3RvcldpdGhJbmRleENvbXBvc2l0aW9uPEYsIEZJLCBHLCBHST5cbi8qKiBAZGVwcmVjYXRlZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bmN0b3JXaXRoSW5kZXhDb21wb3NpdGlvbjxGLCBGSSwgRywgR0k+KFxuICBGOiBGdW5jdG9yV2l0aEluZGV4PEYsIEZJPixcbiAgRzogRnVuY3RvcldpdGhJbmRleDxHLCBHST5cbik6IEZ1bmN0b3JXaXRoSW5kZXhDb21wb3NpdGlvbjxGLCBGSSwgRywgR0k+IHtcbiAgY29uc3QgbWFwID0gZ2V0RnVuY3RvckNvbXBvc2l0aW9uKEYsIEcpLm1hcFxuICBjb25zdCBfbWFwV2l0aEluZGV4ID0gbWFwV2l0aEluZGV4KEYsIEcpXG4gIHJldHVybiB7XG4gICAgbWFwLFxuICAgIG1hcFdpdGhJbmRleDogKGZnYSwgZjogYW55KSA9PiBwaXBlKGZnYSwgX21hcFdpdGhJbmRleChmKSlcbiAgfVxufVxuIl19
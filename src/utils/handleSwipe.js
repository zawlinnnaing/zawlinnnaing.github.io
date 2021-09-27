import { navigate } from "gatsby-link";
import { isEmpty, throttle } from "lodash";
import { ROUTES } from "./constants";
import CyclicArray from "./cyclicArray";

let _privateHandler = null;

const throttledHandler = (function createHandler() {
  if (!_privateHandler) {
    _privateHandler = throttle(
      (event) => {
        const cyclicRoutes = new CyclicArray(ROUTES);
        const currentIdx = cyclicRoutes.array.findIndex(
          (routeObj) => routeObj.href === window.location.pathname
        );
        if (currentIdx > -1) {
          const hasOverflow = document.body.clientHeight > window.innerHeight;

          if (event.deltaY > 0) {
            const lastWindowPosition = window.innerHeight + window.pageYOffset;
            const shouldTransitRoute = hasOverflow
              ? lastWindowPosition >= document.body.clientHeight
              : true;
            if (shouldTransitRoute) {
              const nextRoute = cyclicRoutes.next(currentIdx);
              if (!isEmpty(nextRoute)) {
                navigate(nextRoute.href);
              }
            }
          } else if (event.deltaY < 0) {
            if (window.scrollY !== 0) {
              return;
            }
            const prevRoute = cyclicRoutes.previous(currentIdx);
            if (!isEmpty(prevRoute)) {
              navigate(prevRoute.href);
            }
          }
        }
      },
      1000,
      { trailing: false }
    );
  }
  return _privateHandler;
})();

export default throttledHandler;

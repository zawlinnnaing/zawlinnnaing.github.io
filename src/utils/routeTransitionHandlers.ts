import { navigate } from "gatsby-link";
import { first, isEmpty, throttle, trim } from "lodash";
import { ROUTES } from "./constants";
import CyclicArray from "./cyclicArray";
import Debug from "./logging";

let _privateHandler = null;

/**
 * @returns {{
 *  cyclicRoutes: CyclicArray,
 *  currentIdx: Number
 *
 * }}
 */
function processRoutes() {
  const cyclicRoutes = new CyclicArray(ROUTES);
  const currentIdx = cyclicRoutes.array.findIndex(
    (routeObj) =>
      trim(routeObj.href, "/") === trim(window.location.pathname, "/")
  );
  return {
    currentIdx,
    cyclicRoutes,
  };
}

function hasOverflow() {
  return document.body.clientHeight > window.innerHeight;
}

/**
 *
 * @param {String} direction
 * @returns
 */
function transitRoute(direction) {
  const { currentIdx, cyclicRoutes } = processRoutes();
  const lastWindowPosition = window.innerHeight + window.pageYOffset;
  if (direction === "next") {
    const shouldTransitRoute = hasOverflow()
      ? lastWindowPosition >= document.body.clientHeight - 10
      : true;
    Debug.log(
      "lastWindowPosition",
      lastWindowPosition,
      document.body.clientHeight
    );
    if (shouldTransitRoute) {
      const nextRoute = cyclicRoutes.next(currentIdx);
      if (!isEmpty(nextRoute)) {
        navigate(nextRoute.href);
      }
    }
    return;
  }
  if (window.scrollY !== 0) {
    return;
  }
  const prevRoute = cyclicRoutes.previous(currentIdx);
  if (!isEmpty(prevRoute)) {
    navigate(prevRoute.href);
  }
}

export const scrollWheelHandler = (function createHandler() {
  if (!_privateHandler) {
    _privateHandler = throttle(
      (event) => {
        const { currentIdx } = processRoutes();
        if (currentIdx > -1) {
          Debug.log("hasOverflow", hasOverflow());
          if (event.deltaY > 0) {
            transitRoute("next");
          } else if (event.deltaY < 0) {
            transitRoute("previous");
          }
        }
      },
      1000,
      { trailing: false }
    );
  }
  return _privateHandler;
})();

export const touchMoveHandler = (function touch() {
  return throttle(
    /**
     *
     * @param {*} event
     * @param {Number} yTouchStart
     * @returns
     */
    (event, yTouchStart) => {
      const { currentIdx } = processRoutes();
      if (currentIdx <= -1) {
        Debug.error("current index not found.");
        return;
      }
      const firstTouch = first(event.touches).clientY;
      const touchDirection = yTouchStart - firstTouch > 0 ? "down" : "up";
      Debug.log("touchMoveHandler", currentIdx);
      if (touchDirection === "down") {
        transitRoute("next");
      }
      if (touchDirection === "up") {
        transitRoute("previous");
      }
    },
    1000,
    { trailing: false }
  );
})();

import { first, max } from "lodash";
import Debug from "./logging";

export default class CyclicArray {
  /**
   *
   * @param {Array} array
   */
  constructor(array) {
    if (!(array instanceof Array)) {
      throw new Error("CyclicList must be array");
    }
    this._array = array;
    this._currentIdx = 0;
  }

  get array() {
    return this._array;
  }

  // eslint-disable-next-line class-methods-use-this
  set array(param) {
    throw new Error("Prevent setting array property.");
  }

  /**
   * @param {Number} currentIdx
   * @returns {any}
   */
  next(currentIdx) {
    const nextIdx = (currentIdx + 1) % max([1, this.array.length]);
    return this.array[nextIdx];
  }

  /**
   * @param {Number} currentIdx
   * @returns {any}
   */
  previous(currentIdx) {
    let prevIdx = currentIdx - 1;
    if (prevIdx < 0) {
      prevIdx = this.array.length - 1;
    }
    return this.array[prevIdx];
  }
}

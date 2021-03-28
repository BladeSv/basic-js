const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, level) {
    level = level || 1;
    if (arr.flat(level - 1).some((el) => Array.isArray(el))) {
      return this.calculateDepth(arr, level + 1);
    }
    return level;
  }
};

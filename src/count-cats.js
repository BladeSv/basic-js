const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.flat().reduce((acc, el) => {
    return "^^" === el ? acc + 1 : acc;
  }, 0);
};

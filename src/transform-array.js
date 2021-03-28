const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let worlArr = [...arr];
  // console.log("!!!worlArr", worlArr);
  for (let i = 0; i < worlArr.length; i++) {
    switch (worlArr[i]) {
      case "--discard-next":
        if (i < worlArr.length - 1) {
          worlArr.splice(i, 2);
          i--;
        } else {
          worlArr.splice(i, 1);
        }
        break;
      case "--discard-prev":
        if (i > 0) {
          worlArr.splice(i - 1, 2);
        } else {
          worlArr.splice(i, 1);
          i--;
        }
        break;
      case "--double-next":
        if (i < worlArr.length - 1) {
          worlArr.splice(i, 1, worlArr[i + 1]);
        } else {
          worlArr.splice(i, 1);
        }
        break;

      case "--double-prev":
        if (i > 0) {
          worlArr.splice(i, 1, worlArr[i - 1]);
        } else {
          worlArr.splice(i, 1);
          i--;
        }
        break;
    }
  }

  return worlArr;
};

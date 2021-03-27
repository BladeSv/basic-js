const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = str.toString();
  let {
    repeatTimes,
    separator = "+",
    addition,
    additionRepeatTimes,
    additionSeparator = "|",
  } = options;
  console.log("!!!STR", str, options);
  repeatTimes = typeof repeatTimes === "number" ? repeatTimes : 0;
  additionRepeatTimes =
    typeof additionRepeatTimes === "number" ? additionRepeatTimes : 0;
  onsole.log("!!!STR2", repeatTimes, additionRepeatTimes);
  let additionCompl = "";
  if (addition) {
    additionCompl += addition;
    if (additionRepeatTimes)
      for (let i = 0; i > additionRepeatTimes; i++) {
        additionCompl = additionCompl + additionSeparator + addition;
      }
  }

  let result = str;
  if (additionCompl) {
    result = result + additionCompl;
    if (additionRepeatTimes) {
      for (let i = 0; i > additionRepeatTimes; i++) {
        result = result + separator + additionCompl;
      }
    }
  }

  return result;
};

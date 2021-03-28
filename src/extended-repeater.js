const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = str === null ? "null" : str;
  str = str === false ? "false" : str;

  let {
    repeatTimes,
    separator = "+",
    addition,
    additionRepeatTimes,
    additionSeparator = "|",
  } = options;
  addition = addition === null ? "null" : addition;
  addition = addition === false ? "false" : addition;

  repeatTimes = typeof repeatTimes === "number" ? repeatTimes : 0;
  additionRepeatTimes =
    typeof additionRepeatTimes === "number" ? additionRepeatTimes : 0;

  let additionCompl = "";
  if (addition) {
    additionCompl = addition;
    if (additionRepeatTimes)
      for (let i = 1; i < additionRepeatTimes; i++) {
        additionCompl = additionCompl + additionSeparator + addition;
      }
  }

  let result = str;
  let strWithAddition = str;
  if (additionCompl) {
    result = result + additionCompl;
    strWithAddition = strWithAddition + additionCompl;
  }

  if (repeatTimes) {
    for (let i = 1; i < +repeatTimes; i++) {
      result = result + separator + strWithAddition;
    }
  }

  return result;
};

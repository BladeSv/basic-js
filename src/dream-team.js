const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return Array.isArray(members)
    ? members
        .filter((el) => typeof el === "string")
        .map((el) => el.trim().toUpperCase()[0])
        .sort((a, b) => a.localeCompare(b))
        .join("")
    : false;
};

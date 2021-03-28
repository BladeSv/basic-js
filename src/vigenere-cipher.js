const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction ?? true;
  }

  encrypt(string, key) {
    if (!string || !key) {
      throw new Error();
    }
    string = string.toUpperCase();

    console.log("input encrypt ", string, key);
    // console.log("input key", key);
    let keyArray = this.filterKey(key);
    // if (!this.direction) {
    //   for (let i = 0; i < keyArray.length; i++)
    //     keyArray[i] = (26 - keyArray[i]) % 26;
    // }
    // console.log("keyArray encrypt", keyArray);
    const result = this.crypt(string, keyArray);
    console.log("crypt result", result);
    return result;
  }

  decrypt(string, key) {
    if (!string || !key) {
      throw new Error();
    }
    string = string.toUpperCase();
    console.log("input decrypt ", string, key);
    let keyArray = this.filterKey(key);

    for (let i = 0; i < keyArray.length; i++)
      keyArray[i] = (26 - keyArray[i]) % 26;
    // return this.crypt(string, keyArray);

    const result = this.crypt(string, keyArray);
    // console.log("crypt result", result);
    return result;
  }

  filterKey(key) {
    // console.log("!!!!!filterKeyresultkey", key);
    let result = [];
    for (let i = 0; i < key.length; i++) {
      let c = key.charCodeAt(i);
      // console.log("!!!!!filterKeyresultC", c);
      if (!this.direction) {
        result.push((65 + 26 - c) % 32);
      } else {
        result.push((c - 65) % 32);
      }
      // if (65 <= c && c <= 122) result.push((c - 65) % 32);
    }
    // console.log("!!!!!filterKeyresult", result);
    return result;
  }

  crypt(string, key) {
    if (!string || !key) {
      throw new Error();
    }

    string = string.toUpperCase();
    // console.log("keyArray encrypt", key);

    let output = "";
    for (let i = 0, j = 0; i < string.length; i++) {
      let c = string.charCodeAt(i);
      if (65 <= c && c <= 90) {
        let symbolKey = key[j % key.length];
        console.log("1111direction", this);
        console.log("symbolKey", symbolKey);
        let symbol = String.fromCharCode(((c - 65 + symbolKey) % 26) + 65);
        // let symbol = this.direction
        //   ? String.fromCharCode(((c - 65 + symbolKey) % 26) + 65)
        //   : String.fromCharCode(c - 65 - symbolKey + 25 + 65);

        // console.log("1111symbol", symbol);
        output += symbol;
        j++;
      }
      // else if (isLowercase(c)) {
      //   output += String.fromCharCode(
      //     ((c - 97 + key[j % key.length]) % 26) + 97
      //   );
      //   j++;
      // }
      else {
        output += string.charAt(i);
      }
    }
    return output;
  }
}

module.exports = VigenereCipheringMachine;

const reverseString = require("./reversestring");

function isPalindrome(str) {
  return str === reverseString(str);
}

module.exports = isPalindrome;

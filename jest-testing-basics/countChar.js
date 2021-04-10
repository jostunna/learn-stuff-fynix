function countChar(str, char) {
  let counted = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      counted += 1;
    }
  }
  return counted;
}

module.exports = countChar;

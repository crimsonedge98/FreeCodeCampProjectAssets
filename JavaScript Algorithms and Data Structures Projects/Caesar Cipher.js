function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[^A-Z]/)) {
      newStr.push(str[i]);
    } else {
      newStr.push(alphabet[(alphabet.indexOf(str[i]) + 13) % 26]);
    }
  }
  return newStr.join("");
}

console.log(rot13("SERR PBQR PNZC"));
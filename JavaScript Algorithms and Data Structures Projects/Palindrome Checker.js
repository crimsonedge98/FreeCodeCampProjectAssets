function palindrome(str) {
  let newStr = str.replace(/[^0-9A-Za-z]/gi, "").toLowerCase();
  let reverseStr = newStr.split("").reverse().join("");
  return newStr == reverseStr;
}



console.log(palindrome("eye"));
function telephoneCheck(str) {
  let telFormat1 = /^\d{3}-\d{3}-\d{4}$/;
  let telFormat2 = /^\(\d{3}\)\d{3}-\d{4}$/;
  let telFormat3 = /^\(\d{3}\)\s\d{3}-\d{4}$/
  let telFormat4 = /^\d{3}\s\d{3}\s\d{4}$/;
  let telFormat5 = /^\d{10}$/;
  let telFormat6 = /^1\s^\d{3}\s\d{3}\s\d{4}$/;
  let telFormat7 = /^1\s\d{3}-\d{3}-\d{4}$/;
  let telFormat8 = /^1\s\(\d{3}\)\s\d{3}-\d{4}$/;
  let telFormat9 = /^1\(\d{3}\)\d{3}-\d{4}$/;
  let telFormat10 = /^1\s\d{3}\s\d{3}\s\d{4}$/;

  if (str.match(telFormat1)) return true;
  if (str.match(telFormat2)) return true;
  if (str.match(telFormat3)) return true;
  if (str.match(telFormat4)) return true;
  if (str.match(telFormat5)) return true;
  if (str.match(telFormat6)) return true;
  if (str.match(telFormat7)) return true;
  if (str.match(telFormat8)) return true;
  if (str.match(telFormat9)) return true;
  if (str.match(telFormat10)) return true;
  
  return false;
}

console.log(telephoneCheck("555-555-5555"));
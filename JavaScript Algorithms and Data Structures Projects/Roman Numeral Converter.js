function convertToRoman(num) {
    let romanResult = "";
    let integerNum = num;
    if (integerNum >= 1000) {
        romanResult += 'M';
        integerNum -= 1000;
        return romanResult + convertToRoman(integerNum);
    }
    if (integerNum >= 900) {
        romanResult += 'CM';
        integerNum -= 900;
        return romanResult + convertToRoman(integerNum);
    }
    if (integerNum >= 500) {
        romanResult += 'D';
        integerNum -= 500;
        return romanResult + convertToRoman(integerNum);
    }
    if (integerNum >= 400) {
        romanResult += 'CD';
        integerNum -= 400;
        return romanResult + convertToRoman(integerNum);
    }
    if (integerNum >= 100) {
        romanResult += 'C';
        integerNum -= 100;
        return romanResult + convertToRoman(integerNum);
    }
    if (integerNum >= 90) {
        romanResult += 'XC';
        integerNum -= 90;
        return romanResult + convertToRoman(integerNum);
    }
    if (integerNum >= 50) {
        romanResult += 'L';
        integerNum -= 50;
        return romanResult + convertToRoman(integerNum);
    }
    if (integerNum >= 40) {
        romanResult += 'XL';
        integerNum -= 40;
        return romanResult + convertToRoman(integerNum);
    }
    if (integerNum >= 10) {
        romanResult += 'X';
        integerNum -= 10;
        return romanResult + convertToRoman(integerNum);
    }
    if (integerNum == 9) {
        romanResult += 'IX';
        integerNum -= 9;
        return romanResult + convertToRoman(integerNum);
    }
    if (integerNum >= 5) {
        romanResult += 'V';
        integerNum -= 5;
        return romanResult + convertToRoman(integerNum);
    }
    if (integerNum == 4) {
        romanResult += 'IV';
        integerNum -= 4;
        return romanResult + convertToRoman(integerNum);
    }
    if (integerNum >= 1) {
        romanResult += 'I';
        integerNum -= 1;
        return romanResult + convertToRoman(integerNum);
    }
    if (integerNum <= 0) {
        return "";
    }
}

console.log(convertToRoman(36));
function convert(num) {
  var result = '',
      dec   = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
      i = 0;

  while (i < dec.length) {
    if (num >= dec[i]) {
      result += roman[i];
      num -= dec[i];
    } else {
      i++;
    }
  }

 return result;
}

convert(36);

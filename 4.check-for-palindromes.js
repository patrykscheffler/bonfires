function palindrome(str) {

  str = str.replace(/(\s+|,|\.)/g, '');
  str = str.toLowerCase();
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }

  return true;
}

palindrome("race car");

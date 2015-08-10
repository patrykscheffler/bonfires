function findLongestWord(str) {
  var maxLength = 0,
      maxString,
      strArray = str.split(' ');

  console.log(strArray);

  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i].length > maxLength) {
      maxString = strArray[i];
      maxLength = strArray[i].length;
    }
  }
  return maxString.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

function translate(str) {
  var index = 0;

  for (var i in str) {
    if (/[aeiouy]/.test(str[i])) break;
    index++;
  }

  if (/[aeiouy]/.test(str[0])) {
    str += 'way';
  } else {
    str = str.slice(index) + str.substr(0, index) + 'ay';
  }
 return str;
}

translate("consonant");

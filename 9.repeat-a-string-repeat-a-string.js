function repeat(str, num) {
  var strCopy = str;
  
  for (var i = 1; i < num; i++)
    str += strCopy;

  if (num < 0)
    str = '';

  return str;
}

repeat('abc', 3);

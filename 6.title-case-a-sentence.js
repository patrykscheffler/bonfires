function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(' ');

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }

  str = str.join(' ');

  console.log(str);
  return str;
}

titleCase("I'm a little tea pot");

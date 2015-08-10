function replace(str, before, after) {
  if (/[A-Z]/.test(before[0]))
    after = after.charAt(0).toUpperCase() + after.slice(1);

  str = str.replace(before, after);
  return str;
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

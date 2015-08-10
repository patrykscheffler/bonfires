function bouncer(arr) {
  function isTruthy(value) {
    return value;
  }
  return arr.filter(isTruthy);
}

bouncer([7, 'ate', '', false, 9]);

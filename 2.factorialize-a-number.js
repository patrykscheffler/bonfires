function factorialize(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else if (num > 1) {
    return num * factorialize(num-1);
  }
}

factorialize(5);

function sumFibs(num) {
  var fibArray = [0, 1];
  var sum = 0;

  for (var i = 1; fibArray[i] <= num; i++) {
    if (fibArray[i] % 2 === 1) sum += fibArray[i];
    fibArray.push(fibArray[i] + fibArray[i-1]);
  }
  
  return sum;
}

sumFibs(4);

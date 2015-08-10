function sumAll(arr) {
  var max = Math.max.apply(null, arr),
      min = Math.min.apply(null, arr),
      sum = 0;

  for (var i = min; i <= max; i++)
    sum += i;

  return sum;
}

sumAll([1, 4]);

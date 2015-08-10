function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++)
    if (num % i === 0) return false;

  return true;
}

function sumPrimes(num) {
  var sum = 0;

  for (var i = 0; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }

  return sum;
}

sumPrimes(10);

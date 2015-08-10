function find(arr, func) {
  var num;

  for (var i in arr) {
    if (func(arr[i])) return arr[i];
  }

  return num;
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });

function drop(arr, func) {
  var result = [];
  arr.forEach(function(item, index, array) {
    if (func(item))
      result.push(item);
  });
  return result;
}

drop([1, 2, 3], function(n) {return n < 3; });

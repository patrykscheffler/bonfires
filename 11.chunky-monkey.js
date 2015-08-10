function chunk(arr, size) {
  var i = 0,
      newArray = [],
      finalArray = [];

  while (i < arr.length) {
    newArray = arr.slice(i, i+size);
    finalArray.push(newArray);
    i += size;
  }

  return finalArray;
}

chunk(['a', 'b', 'c', 'd'], 2);

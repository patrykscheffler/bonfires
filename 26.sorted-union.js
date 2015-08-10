function unite(arr1, arr2, arr3) {
  for (var i in arr2) {
    if (arr1.indexOf(arr2[i]) === -1) arr1.push(arr2[i]);
  }
  for (i in arr3) {
    if (arr1.indexOf(arr3[i]) === -1) arr1.push(arr3[i]);
  }
  return arr1;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);

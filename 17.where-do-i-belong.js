function where(arr, num) {
  var insertIndex;
  
  arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < num) insertIndex = i+1;
  }
  return insertIndex;
}

where([40, 60], 50);

function smallestCommons(arr) {
  var max = Math.max.apply(null, arr),
      min = Math.min.apply(null, arr),
      rangeArray = createRange(min, max),
      verifyMultiple = [],
      next = true;

  rangeArray.multiple = max;

    while ( next ) {
      verifyMultiple = rangeArray.map(isMultiple);

      if ( verifyMultiple.indexOf( false ) >= 0 ) {
        rangeArray.multiple += min;
      } else {
        next = false;
      }
    }

  return rangeArray.multiple;

}

function createRange(min, max) {
  var arr = [];
  for ( ; min <= max; min++)
    arr.push(min);

  return arr;
}

function isMultiple(item, index, array) {
  if (array.multiple % item === 0)
    return true;

  return false;
}

smallestCommons([1,5]);

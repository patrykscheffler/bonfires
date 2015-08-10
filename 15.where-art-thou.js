function where(collection, source) {
  var arr = [],
      key = Object.keys(source),
      value = source[key];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i].hasOwnProperty(key) && collection[i][key] == value)
      arr.push(collection[i]);
  }
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });

function every(collection, pre) {
  var result = true;
  
  collection.forEach(function(item, index, array) {
    if (typeof pre === 'string') {
      if (!item[pre])
        result = false;
    } else {
      for (var key in pre) {
        if (!item[key]) {
          result = false;
        } else if (item[key] !== pre[key])  {
          result = false;
        }
      }
    }
  });
  return result;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], {'sex': 'male'});

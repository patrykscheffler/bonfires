function flatten(args, res) {
  if (res === undefined)
    res = [];

  if (Array.isArray(args)) {
    args.forEach(function(arg) {
      flatten(arg, res);
    });
  } else {
    res.push(args);
  }

  return res;
}

function steamroller(arr) {
  var args = Array.prototype.slice.call(arguments);
  arr = flatten(args);
  return arr;
}

steamroller([1, [2], [3, [[4]]]]);

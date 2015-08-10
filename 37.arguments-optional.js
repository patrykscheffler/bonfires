function add() {
  var args = Array.prototype.slice.call(arguments);
  var nonNumber = args.some(function(arg) {
    if (typeof arg !== 'number' || !args.length)
      return true;

    return false;
  });
  if (nonNumber)
    return undefined;

  if (args.length > 1)
    return args[0] + args[1];

  if (args.length === 1)
    return function(value) {
      if (typeof value !== 'number')
        return undefined;

      return args[0] + value;
    };
}

add(2,3);

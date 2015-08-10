function pair(str) {
  var newArray = str.split(''),
      dna = [];

  for (var i in newArray) {
    switch (newArray[i]) {
      case 'G':
        dna.push([newArray[i], 'C']);
        break;
      case 'C':
        dna.push([newArray[i], 'G']);
        break;
      case 'A':
        dna.push([newArray[i], 'T']);
        break;
      case 'T':
        dna.push([newArray[i], 'A']);
        break;
    }
  }

  return dna;
}

pair("GCG");

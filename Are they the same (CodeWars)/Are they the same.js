function comp(array1, array2) {
  if (array2 == null || array1 == null) {
    console.log(false);
    return false;
  } else if (array1.length == 0 && array2.length == 0) {
    console.log(true);
    return true;
  }

  var sortedArray1 = array1.sort(function(a, b) {
    return a - b
  });
  var rootedArray2 = [];

  for (var i = 0; i < array2.length; i++) {
    rootedArray2.push(Math.sqrt(array2[i]));
  }

  var sortedRootedArray2 = rootedArray2.sort(function(a, b) {
    return a - b
  });

  for (var k = 0; k < sortedArray1.length; k++) {
    if (sortedArray1[k] != sortedRootedArray2[k]) {
      console.log(false);
      return false;
    } else if (k == sortedArray1.length - 1) {
      console.log(true);
      return true;
    }
  }
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];

comp(a1, a2) //should return true);

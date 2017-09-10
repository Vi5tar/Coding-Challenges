var isPP = function(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    for (var k = 1; Math.pow(i, k) <= n; k++) {
      if (Math.pow(i, k) == n) {
        console.log([i, k]);
        return [i, k];
      }
    }
  }
  console.log(null);
  return null;
}

isPP(4) //should return [2,2], "4 = 2^2");
isPP(9) //should return [3,2], "9 = 3^2");
isPP(5) //should return null, "5 isn't a perfect number");

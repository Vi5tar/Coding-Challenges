var nbrOfLaps = function(x, y) {
  var xDivisors = [];
  var yDivisors = [];
  var gcd = "start";

  for (var i = 1; i <= Math.sqrt(x); i++) {
    if (x % i == 0) {
      xDivisors.push(x / i, i);
    }
  }

  for (var k = 1; k <= Math.sqrt(y); k++) {
    if (y % k == 0) {
      yDivisors.push(y / k, k);
    }
  }

  xDivisors.sort(function(a, b) {
    return a - b;
  });

  yDivisors.sort(function(a, b) {
    return a - b;
  });

  if (xDivisors.length >= yDivisors.length) {
    for (var n = 0; n < yDivisors.length; n++) {
      for (var p = 0; p < xDivisors.length; p++) {
        if (xDivisors[p] == yDivisors[n]) {
          gcd = xDivisors[p];
        }
      }
    }
  } else {
    for (var n = 0; n < xDivisors.length; n++) {
      for (var p = 0; p < yDivisors.length; p++) {
        if (xDivisors[n] == yDivisors[p]) {
          gcd = xDivisors[n];
        }
      }
    }
  }

  var lcm = (x / gcd) * y;

  console.log([lcm / x, lcm / y]);
  return [lcm / x, lcm / y];
}

//nbrOfLaps(5, 3); // returns [3, 5]
//nbrOfLaps(4, 6); // returns [3, 2]
nbrOfLaps(9070, 7722); // returns [3, 2]

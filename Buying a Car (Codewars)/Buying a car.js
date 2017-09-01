function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
  //console.log(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth);
  var saved = 0;
  var months = 0;

  while (startPriceOld + saved < startPriceNew) {
    if (months % 2 == 0 && months > 0) {
      percentLossByMonth += .5;
    }
    saved += savingperMonth;
    var oldCarPriceReduction = startPriceOld * (percentLossByMonth / 100);
    startPriceOld = startPriceOld - oldCarPriceReduction;
    var newCarPriceReduction = startPriceNew * (percentLossByMonth / 100);
    startPriceNew = startPriceNew - newCarPriceReduction;
    months++;
  }

  var leftover = Math.round((startPriceOld + saved) - startPriceNew);

  console.log(months, leftover);
}

nbMonths(2000, 8000, 1000, 1.5) // should return [6, 766])
nbMonths(12000, 8000, 1000, 1.5) // should return [0, 4000])


function pieChart(percent, values) {
  // Percent is an array of percentages corresponding to the values
  var canvas = document.getElementById("pieChartTel");
  var ctx = canvas.getContext("2d");

  var orderedPercent = [];
  var orderedValues = [];

  for (var i = 0; i < percent.length; i++) {
    var ind = minIndex(percent);
    orderedPercent.unshift(percent[ind]);
    orderedValues.unshift(values[ind]);
    percent[ind] = Number.MAX_VALUE;
    values[ind] = Number.MAX_VALUE;
  }

  percent = orderedPercent;
  values = orderedValues;

  function minIndex(arr) {
    var min = Number.MAX_VALUE;
    var minIndex = null;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
    }
    return (minIndex)
  }



  // Test if sum is 100%
  var sum = 0;
  for (var i = 0; i < percent.length; i++) {
    sum += percent[i]
  }

  if (sum < 100) {
    percent.push(100-sum)
    values.push('Reste')
  }
  if (sum > 100) {
    console.log("Error : more than 100%");
    return 0;
  }

  var r = canvas.width/2 - 10;
  var centerX = canvas.width/2;
  var centerY = canvas.height/2;

  var angles = [0];
  for (var i = 0; i < percent.length; i++) {
    var degrees = percent[i] * Math.PI * 2 / 100;
    angles.push(angles[i] + degrees)
  }
  console.log(angles);


  for (var i = 0; i < angles.length - 1; i++) {
    var color = 'rgb(' + String(70 + i*30) + ',150,150)';
    ctx.fillStyle = color;
    var halfPi = Math.PI / 2;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, r, angles[i]-halfPi, angles[i+1]-halfPi);
    ctx.closePath();
    ctx.fill();
  }





/*
  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, r, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();

*/
  //ctx.lineTo(centerX + Math.sin(angle) * r, centerY + Math.cos(angle) * r);
  //ctx.stroke();
}


function pieChart(percent, values) {
  // Percent is an array of percentages corresponding to the values
  var canvas = document.getElementById("pieChartTel");
  var ctx = canvas.getContext("2d");



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

  // Just for testing
  for (var i = 0; i < angles.length; i++) {
    console.log(angles[i] * 180 / Math.PI);
  }
  console.log('');

  for (var i = 0; i < angles.length - 1; i++) {
    var color = 'rgb(' + String(70 + i*30) + ',100,100)';
    ctx.fillStyle = color;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, r, angles[i], angles[i+1]);
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

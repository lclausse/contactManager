function importJson() {
  console.log('ok');

  var mydata = JSON.parse(tel);
  alert(mydata[0].name);
  alert(mydata[0].age);
  alert(mydata[1].name);
  alert(mydata[1].age);
}

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}


function readCSV(){
  var file = document.querySelector('#myFile').files[0];
  var reader = new FileReader();
  reader.readAsText(file);

  //if you need to read a csv file with a 'ISO-8859-1' encoding
  /*reader.readAsText(file,'ISO-8859-1');*/

  //When the file finish load
  reader.onload = function(event) {

    //get the file.
    var csv = event.target.result;

    //split and get the rows in an array
    var rows = csv.split('\n');

    colsNames = rows[0].split(',');

    //move line by line
    for (var i = 1; i < rows.length; i++) {
      //split by separator (,) and get the columns
      cols = rows[i].split(',');
      console.log(cols);
      //move column by column
      for (var j = 0; j < cols.length; j++) {
        /*the value of the current column.
        Do whatever you want with the value*/
        var value = cols[j];
      }
    }
  }
  return ('ok');
}

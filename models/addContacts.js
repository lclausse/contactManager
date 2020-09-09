
// Multiple contacts
module.exports = (db, data, callback) => {

  keys = Object.keys(data);
  values = Object.values(data);

  var sqlMessage = "INSERT INTO `carnet` (id,"
  for (var i = 0; i < keys.length; i++) {
    sqlMessage = sqlMessage.concat(String(keys[i]) + ",");
  }
  sqlMessage = sqlMessage.substring(0, sqlMessage.length - 1);
  sqlMessage = sqlMessage.concat(") VALUES (NULL,");
  for (var i = 0; i < values.length; i++) {
    sqlMessage = sqlMessage.concat("'" + String(values[i]) + "',");
  }
  sqlMessage = sqlMessage.substring(0, sqlMessage.length - 1);
  sqlMessage = sqlMessage.concat(")");

  db.query(sqlMessage, (err, data) => {
    if (err) {
      console.log(err);
      callback(false);
    } else {
      callback(true);
    }
  })
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
}

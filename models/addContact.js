
// One contact at a time
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

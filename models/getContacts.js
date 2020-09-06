
module.exports = (db, orderBy, callback) => {
  var sqlMessage1 = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA='people' AND TABLE_NAME='carnet' ORDER BY ORDINAL_POSITION";
  var sqlMessage2 = "SELECT * FROM carnet ORDER BY " + orderBy;
  db.query(sqlMessage1, (err, data1) => {
    if (err) {
      console.log(err);
    } else {
      db.query(sqlMessage2, (err, data2) => {
        if (err) {
          console.log(err);
        } else {
          callback(data1, data2);
        }
      })
    }
  })
}


module.exports = (db, data, callback) => {
  //String(Object.values(data))
  sqlMessage = "DELETE FROM carnet WHERE id = " + data
  console.log(data);
  db.query(sqlMessage, (err, data) => {
    if (err) {
      console.log(err);
      callback(false);
    } else {
      callback(true);
    }
  })
}

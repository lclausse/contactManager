
module.exports = (db, data, callback) => {
  sqlMessage = "DELETE FROM events WHERE idEvent = " + data
  db.query(sqlMessage, (err, data) => {
    if (err) {
      console.log(err);
      callback(false);
    } else {
      callback(true);
    }
  })
}

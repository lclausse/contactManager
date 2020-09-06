const mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'people'
});
db.connect((err) => {
  if (err) {
    console.log(new Date() + ' Echec de la connexion à la base de données')
  } else {
    console.log(new Date() + ' Connexion à la base de données réussie')
  }
})

// Permet de faire un export. Très important!
module.exports = db;
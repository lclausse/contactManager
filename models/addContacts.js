



// Multiple contacts
module.exports = (db, file, callback) => {
  var fs = require('fs');

  filePath = './public/import/' + String(file.fileInput);
  sqlCategories = file.columnsHidden.split(",");

  fs.readFile(filePath, 'utf8', function(err, data) {
      if (err) throw err;
      lines = data.split("\n");
      categories = lines[0].split(",");

      // Review style of categories for correct SQL injection
      for (var i = 0; i < categories.length; i++) {
        categories[i] = categories[i].toLowerCase();
        if (categories[i] === 'last name') {
          categories[i] = 'nom';
        }
        else if (categories[i] === 'first name') {
          categories[i] = 'prenom';
        }
        else if (categories[i] === 'notes') {
          categories[i] = 'surnom';
        }
        else if (categories[i].includes('phone')) {
          categories[i] = 'tel';
        }
        else if (categories[i].includes('e-mail address')) {
          categories[i] = 'email';
        }
        else if (categories[i] === 'birthday') {
          categories[i] = 'naissance';
        }
        else if (categories[i] === 'company') {
          categories[i] = 'origine';
        }
        else {
          categories[i] = "";
        }
      }

      // Start of SQL message
      var sqlMessage = "INSERT INTO `carnet` (id,"
      for (var i = 0; i < sqlCategories.length; i++) {
        sqlMessage = sqlMessage.concat(String(sqlCategories[i]) + ",");
      }
      sqlMessage = sqlMessage.substring(0, sqlMessage.length - 1);
      sqlMessage = sqlMessage.concat(") VALUES ");

      // Loop through the contacts
      for (var i = 1; i < lines.length; i++) {
        contactData = lines[i].split(",");
        orderedData = Array(sqlCategories.length).fill(null);

        for (var j = 0; j < contactData.length; j++) {
          if (contactData[j] != "") {
            for (var k = 0; k < sqlCategories.length; k++) {
              if (categories[j] == sqlCategories[k]) {
                orderedData[k] = contactData[j];
              }
            }
          }
        }
        // SQL message for each contact
        sqlMessage = sqlMessage.concat("(NULL,");
        for (var j = 0; j < orderedData.length; j++) {
          if (orderedData[j] == null) {
            sqlMessage = sqlMessage.concat('NULL,');
          } else {
            sqlMessage = sqlMessage.concat("'" + String(orderedData[j]) + "',");
          }
        }
        sqlMessage = sqlMessage.substring(0, sqlMessage.length - 1);
        sqlMessage = sqlMessage.concat("),");
      }

      // To remove the last coma
      sqlMessage = sqlMessage.substring(0, sqlMessage.length - 1);

      console.log(sqlMessage);





      db.query(sqlMessage, (err, data) => {
        if (err) {
          console.log(err);
          callback(false);
        } else {
          callback(true);
        }
      })

  });
}

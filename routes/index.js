// Dépendances
const express = require('express');
const router = express.Router();
const db = require("../models/db.js");



// Permet de trier par...
router.get('/accueil/orderBy=:id', (req, res) => {
  var model = require('../models/getContacts.js');
  model(db, req.params.id, (data1, data2) => {
    res.render('accueil.ejs', {
      columnNames: data1,
      peopleNames: data2
    });
  })
})

// Permet d'afficher les infos à remplir pour nouveau contact
router.get('/addContact', (req, res) => {
  var model = require('../models/getContacts.js');
  model(db, "nom", (data1, data2) => {
    res.render('addContact.ejs', {
      columnNames: data1,
      peopleNames: data2
    });
  })
})

router.get('/agenda/orderBy=:id', (req, res) => {
  var model = require('../models/getEvents.js');
  model(db, req.params.id, (data1, data2) => {
    res.render('agenda.ejs', {
      columnNames: data1,
      eventInfos: data2
    });
  })
})

// Permet d'afficher les infos à remplir pour nouveau event
router.get('/addEvent', (req, res) => {
  var modelEvents = require('../models/getEvents.js');
  var modelContacts = require('../models/getContacts.js');
  modelEvents(db, "date", (data1, data2) => {
    modelContacts(db, "nom", (data3, data4) => {
      res.render('addEvent.ejs', {
        columnNamesEvents: data1,
        eventInfos: data2,
        columnNamesContacts: data3,
        contactInfos: data4
      });
    })
  })
})


router.get('/statistiques', (req, res) => {
  res.render('statistiques.ejs');
})

router.get('/importer', (req, res) => {
  res.render('importer.ejs');
})

router.get('/parametres', (req, res) => {
  res.render('parametres.ejs');
})




// Permet d'ajouter un nom dans la liste
router.post('/addContact', (req, res) => {
  var model = require('../models/addContact.js');
  model(db, req.body, (succes) => {
    if (succes) {
      res.redirect('/accueil/orderBy=nom');
    } else {
      res.send('Erreur dans l\'ajout de contact');
    }
  })
})

// Permet d'ajouter des noms dans la liste
router.post('/addContacts', (req, res) => {
  var model = require('../models/addContacts.js');
  model(db, req.body, (succes) => {
    if (succes) {
      res.redirect('/importer');
    } else {
      res.send('Erreur dans l\'ajout de contact');
    }
  })
})

// Permet d'ajouter un event dans la liste
router.post('/addEvent', (req, res) => {
  var model = require('../models/addEvent.js');
  model(db, req.body, (succes) => {
    if (succes) {
      res.redirect('/agenda/orderBy=date');
    } else {
      res.send('Erreur dans l\'ajout de contact');
    }
  })
})

// Permet d'enlever un nom de la liste
router.get('/:id/removeContact', (req, res) => {
  var model = require('../models/removeContact.js');
  model(db, req.params.id, (succes) => {
    if (succes) {
      res.redirect('/accueil/orderBy=nom');
    } else {
      res.send('Erreur dans le retrait du contact');
    }
  })
})

// Permet d'enlever un nom de la liste
router.get('/:id/removeEvent', (req, res) => {
  var model = require('../models/removeEvent.js');
  model(db, req.params.id, (succes) => {
    if (succes) {
      res.redirect('/agenda/orderBy=date');
    } else {
      res.send('Erreur dans le retrait de l\'événement');
    }
  })
})




// Export
module.exports = router;

/*

columnNames[j].COLUMN_NAME
*/

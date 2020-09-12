// Dépendances
require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/index.js');
const mid = require('./middlewares.js');


// Routes et middlewares
app.use(express.urlencoded({
  extended: false
}));

// Utiliser multer pour les fichiers
app.use(express.json());
app.use(mid.logging);

app.use(routes);

app.use(express.static('public'));

// Initialisation
app.listen(process.env.PORT);

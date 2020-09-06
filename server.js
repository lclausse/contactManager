// Dépendances
const express = require('express');
const app = express();
const routes = require('./routes/index.js');
const mid = require('./middlewares.js');
require('dotenv').config();

// Routes et middlewares
app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());
app.use(mid.logging);
app.use(mid.setHeaders);

app.use(routes);

app.use(express.static('public'));

// Initialisation
app.listen(process.env.PORT);

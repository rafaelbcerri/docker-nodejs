'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const db = require("./models");
db.sequelize.sync();

// App
const app = express();
// const Counter = require('./models/counter');

app.use(express.json());

app.get('/', (req, res) => {
  db.Counter
    .create({ texto: "texto"})
    .then((counter) => {
      console.log(counter.dataValues.id)
      res.send(`${counter.dataValues.id}`)
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
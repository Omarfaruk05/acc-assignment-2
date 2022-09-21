const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');


app.use(cors());
app.use(express.json());

//routes
const tourRoute = require('./routes/tour.route.js')


  app.use('/tours', tourRoute)
  app.use('/tour', tourRoute)

  app.get('/', (req, res)=> {
    res.send('route is working')
  })


  app.all("*", (req, res) => {
    res.send("No route found.");
  });

  module.exports = app;
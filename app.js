const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");

// require database connection 
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");

// execute database connection 
dbConnect();

// body parser configuration
app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

app.post("/register", (request, response) => {
  // The code below is telling bcrypt to hash the password received from request body 10 times or 10 salt rounds.
  bcrypt.hash(request.body.password, 10)
  .then()
  .catch()
});

module.exports = app;

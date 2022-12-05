const express = require("express");
const mongoose = require("mongoose");

const username = "root";
const password = "root";
const cluster = "cluster0.e5lwfyp";
const dbname = "insta";

const connection = mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

module.exports = connection;

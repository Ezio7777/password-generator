const express = require("express");
const bodyPraser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(bodyPraser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.listen(3000, function () {
    console.log("Port Started 3000");
  });
  
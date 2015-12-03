var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
//may need to rename this database!!!
mongoose.connect("mongodb://localhost/users");
var app = express();
app.use(Express.statis(path.join(__disname, "/public")));
app.use(bodyParser.json());


app.get("/", function(req,res) {
  res.send("Dope ass Project 3");
});

app.listen(3000, function() {
  console.log("Got this blicky up and running!");
});

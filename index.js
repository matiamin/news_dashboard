var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
//loads module containing all users controller actions.
var usersController = require("./controllers/usersController");
//may need to rename this database!!!
mongoose.connect("mongodb://localhost/users");
var app = express();
//hanlebars for view
app.set("view engine", "hbs");
// app.use(express.static(__dirname, "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));


app.get("/", function(req,res) {
  res.send("Dope ass Project 3");
});

//routes for all requests to this express app that map to
//an action/function in our authorsController
app.get("/users", usersController.index);


app.listen(3000, function() {
  console.log("Got this blicky up and running!");
});

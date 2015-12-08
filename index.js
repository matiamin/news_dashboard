// modules
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var passport = require("passport");
var flash = require("connect-flash");
var session = require("express-session");
//loads module containing all users controller actions.
var topicsController = require("./controllers/topicsController");
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

// allow public files
app.use(express.static(__dirname + '/public'));

app.get("/signup", usersController.getSignup);
app.post("/signup", usersController.postSignup);

app.use(session({ secret: 'PROJECT-3' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require("./config/passport")(passport);

//routes for all requests to this express app that map to
//an action/function in our authorsController
app.get("/topics", topicsController.index);

app.get('/topics/new', topicsController.new );

app.listen(3000, function() {
  console.log("Got this blicky up and running!");
});

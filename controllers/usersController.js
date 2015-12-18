var passport = require("passport");
var flash = require("connect-flash");

//GET /signup
// function getSignup(request, response){
//   response.render("sign.hbs", {message: request.flash("signupMessage")});
// }

var usersController = {

  getLogin: function(req, res){
    res.render("users/login");
  },
  postLogin: function(req, res){
    var loginProperty = passport.authenticate("local-login", {
      successRedirect : "/topics",
      failureRedirect : "/login",
      // failureFlash : true // jsm: no need for this if you aren't using a flash notification for login
    });
    return loginProperty(req, res);
  },
  getSignup: function(req, res){
    res.render("users/signup", {message: req.flash('signupMessage')});
  },
  postSignup: function(req, res){
    var signupStrategy = passport.authenticate("local-signup", {
      successRedirect : "/topics/new",
      failureRedirect : "/signup",
      failureFlash : true
    });
    return signupStrategy(req, res);
  },
  getLogout: function(req, res){
    req.logout();
    res.redirect("/login");
  }
};

module.exports = usersController;

// jsm: these look good!

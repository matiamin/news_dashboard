var passport = require("passport");
var flash = require("connect-flash");

//GET /signup
// function getSignup(request, response){
//   response.render("sign.hbs", {message: request.flash("signupMessage")});
// }

var usersController = {
  getSignup: function(req, res){
    res.render("users/signup");
  },
  postSignup: function(req, res){
    var signupStrategy = passport.authenticate("local-signup", {
      successRedirect : "/topics/new",
      failureRedirect : "/signup",
      failureFlash : true
    });
    return signupStrategy(req, res);
  },
  getLogin: function(req, res){
    res.render("users/login");
  },
  postLogin: function(req, res){
    var loginProperty = passport.authenticate("local-login", {
      successRedirect : "/topics",
      failureRedirect : "/login",
      failureFlash : true
    });
    return loginProperty(req, res);
  },
  getLogout: function(req, res){
    req.logout();
    res.redirect("/login");
  }
};

module.exports = usersController;

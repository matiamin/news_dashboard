var passport = require("passport");

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
      failureRedirect : "/",
      failureFalsh : true
    });
    return signupStrategy(req, res);
  }
};

module.exports = usersController;

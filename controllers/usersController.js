//requires our model definitions
var UserModel = require("../models/user");
var TopicModel = require("../models/topic");
// var ArticleModel = require("../models/article");

//instantiates a usersController which will contain all of our controller actions
var usersController = {
  index: function(req, res){
    UserModel.find({}, function(err, docs){
      res.render("users/index", {users: docs});
    });
  }
};

module.exports = usersController;

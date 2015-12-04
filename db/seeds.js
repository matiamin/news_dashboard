//requires mongoose dependencies
var mongoose = require("mongoose");
//connects us to the users database in mongo
//is that the url? Ask John.
var conn = mongoose.connect("mongodb://localhost/users");
//require our model definitions we defined earlier
var UserModel = require("../models/user");
var TopicModel = require("../models/topic");
var ArticleModel = require("../models/article");
//removes any existing users, topics, and articles from our database
UserModel.remove({}, function(err){

});
TopicModel.remove({}, function(err){

});
ArticleModel.remove({}, function(err){

});

//instantiates 3 users and  6 topics
//add them into arrays

var bob = new UserModel({name: "bob"});
var john = new UserModel({name: "john"});
var andy = new UserModel({name: "andy"});


var syria = new TopicModel({keyword: "syria"});
var gop = new TopicModel({keyword: "gop"});
var india = new TopicModel({keyword: "india"});
var donald = new TopicModel({keyword: "donald"});
var obama = new TopicModel({keyword: "obama"});
var politics = new TopicModel({keyword: "politics"});

var users = [bob, john, andy];
var topics = [syria, gop, india, donald, obama, politics];

//iterate through the users to save them to the database after 2 topics
//have been added as subdocuments to the user
for(var i = 0; i < users.length; i++){
  users[i].topics.push(topics[i], topics[i+3]);
  users[i].save(function(err){
    if (err){
      console.log(err);
    } else {
      console.log("user is saved");
    }
  });
}

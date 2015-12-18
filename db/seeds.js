// var env = require("../env");
//requires mongoose dependencies
var mongoose = require("mongoose");
//connects us to the users database in mongo
//is that the url? Ask John.  // jsm: yes, lines below connect to the daily database
// var conn = mongoose.connect(env.mongolab_url);
if (process.env.NODE_ENV === 'development') {
  mongoose.connect('mongodb://localhost/daily');
}
else {
  mongoose.connect('mongodb://'+ process.env.MONGOLAB_USER +':'+ process.env.MONGOLAB_PASS +'@ds027295.mongolab.com:27295/daily');
}
var db = mongoose.connection;
// TODO: this is from mongoose quickstart -- look into exactly what it does (the console.error bit)
db.on('error', console.error.bind(console, 'connection error:'));


//require our model definitions we defined earlier
var UserModel = require("../models/user");
var TopicModel = require("../models/topic");
////Add article model later
// var ArticleModel = require("../models/article");
//removes any existing users, topics, and articles from our database
UserModel.remove({}, function(err){

});
TopicModel.remove({}, function(err){

});

//Add for article model later
// ArticleModel.remove({}, function(err){
//
// });

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

// jsm: Great comments on what's going on here

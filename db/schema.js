// requiring mongoose dependency
var mongoose = require('mongoose');
// instantiate a name space for our Schema constructor defined by mongoose.
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
//will add later
// var ArticleSchema = new Schema({
//   title: String,
//   url: String,
//   body: String,
//   source: String,
//   date: String
// });

// defining schema for topics
var Topic = new Schema({
  keyword: String,
  //Add this to schema upon twitter api integration
  // source: String
  // articles: [ArticleSchema]
});

// defining schema for users.
var User = new Schema({
  local : {
    email: String,
    password: String,
  },
  topics: [Topic]
});

// setting models in mongoose utilizing schemas defined above, we'll be using
// these frequently throughout our app
mongoose.model("User", User);
mongoose.model("Topic", Topic);
//add later
// mongoose.model("Article", ArticleSchema);
User.methods.encrypt = function(password) {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
 };

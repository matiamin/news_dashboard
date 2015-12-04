// requiring mongoose dependency
var mongoose = require('mongoose');
// instantiate a name space for our Schema constructor defined by mongoose.
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// defining schema for users.
var UserSchema = new Schema({
  name: String,
  password: String,
  topics: [TopicSchema]
});

// defining schema for topics
var TopicSchema = new Schema({
  keyword: String,
  //Add this to schema upon twitter api integration
  // source: String
  articles: [ArticleSchema]
});

var ArticleSchema = new Schema({
  title: String,
  url: String,
  body: String,
  source: String,
  date: String
});
// setting models in mongoose utilizing schemas defined above, we'll be using
// these frequently throughout our app
mongoose.model("User", UserSchema);
mongoose.model("Topic", TopicSchema);
mongoose.model("Article", ArticleSchema);

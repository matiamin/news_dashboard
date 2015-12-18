require("../db/schema");
var mongoose = require("mongoose");

var TopicModel = mongoose.model("Topic");
module.exports = TopicModel;

// jsm: see note in article.js

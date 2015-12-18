require("../db/schema");
var mongoose = require("mongoose");

var ArticleModel = mongoose.model("Article");
module.exports = ArticleModel;

// jsm: With mongoose, our schema and models become a bit interwoven. It would be alright to move schema for Articles here and import this file to the schema

require("../db/schema");
var mongoose = require("mongoose");

var ArticleModel = mongoose.model("Article");
module.exports = ArticleModel;

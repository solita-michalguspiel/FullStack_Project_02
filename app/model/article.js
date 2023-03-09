const mongoose = require('mongoose');

const article = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  });

  // Create the article model
const Article = mongoose.model('Article', article);

module.exports = Article;
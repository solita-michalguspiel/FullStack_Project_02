const mongoose = require('mongoose');

const comment = new mongoose.Schema({
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    articleId: {
        type: String,
        required: true
    },
    created_at: {
      type: Date,
      default: null,
    },
    edited_at: {
      type: Date,
      default: null,
    },
    likes: {
      type: Number,
      default: 0
    }
  });

const Comment = mongoose.model('Comment', comment);
module.exports = Comment;
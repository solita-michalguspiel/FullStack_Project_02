const Comment = require("../model/comment.js");

async function getComment(id) {
    const articles = await Comment.find({articleId: id});
    console.log(articles);
    return articles;
  }
  
  async function addComment(comment) {
    const newComment = new Comment({
      author: comment.author,
      body: comment.body,
      articleId: comment.articleId,
      created_at: comment.created_at,
    });
    const result = await newComment.save();
    return result;
  }
  
  async function updateComment(comment) {
    const result = await Comment.updateOne(
      { _id: comment.id },
      {
        body: comment.body,
        edited_at: new Date()
      }
    );
    return result;
  }
  
  async function deleteComment(id) {
    const result = await Comment.deleteOne({"_id": id});
    return result;
  }
  
  module.exports = {
    getComment: getComment,
    addComment: addComment,
    updateComment: updateComment,
    deleteComment: deleteComment,
  };
  
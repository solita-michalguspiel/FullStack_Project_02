const comment = require("../data/comment.js");

exports.getComments = async (req, res) => {
  try {
    console.log("getComment called");
    const id = req.params.id;
    let data = await comment.getComments(id);
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.addComment = async (req, res) => {
  try {
    console.log("addComment called");
    console.log(req.body);
    const { author, body, articleId } = req.body;
    // Create a new article object
    const newComment = {
      author: author,
      body: body,
      articleId: articleId,
      created_at: new Date(),
    };
    console.log(newComment);

    const result = await comment.addComment(newComment);
    res.status(201).json(result); // Send back the result
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add comment." });
  }
};

exports.updateComment = async (req, res) => {
  try {
    console.log("updateComment called");
    const id = req.params.id;
    const result = await comment.findCommentById(id);
    console.log(result);
    if (!result) {
      res.status(404).json({ error: "Comment not found." });
      return;
    }    
    console.log("Likes: ", result.likes)
    const updatedLikes = result.likes + 1;
    console.log("Updated likes: ",updatedLikes)
    const updatedComment = {
      id,
      likes: updatedLikes
    };
    const updateResult = await comment.updateComment(updatedComment);
    if (!result) {
      res.status(404).json({ error: "Comment not found." });
    } else {
      res.status(200).json(updateResult);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update comment." });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    console.log("deleteComment called!");
    const id = req.params.id;
    const result = await comment.deleteComment(id);
  if (!result) {
      res.status(404).json({ error: "comment not found." });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete comment." });
  }
};
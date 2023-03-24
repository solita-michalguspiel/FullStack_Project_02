const controller = require("../controllers/comment.js");

module.exports = function (app) {
    app.get("/api/getcomments/:id",(req, res) => {
      controller.getComments(req,res)
    });
  
    app.post("/api/addcomment",(req, res) => {
      controller.addComment(req,res)
    });
    
    app.put("/api/updatecomment/:id",(req, res) => {
      controller.updateComment(req,res)
    });
  
    app.delete("/api/deletecomment/:id",(req, res) => {
      controller.deleteComment(req,res)
    });
  };
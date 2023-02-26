const controller = require("../controllers/controller.js");

module.exports = function (app) {
  app.get("/api/getall", function (req, res) {
    controller.getArticles(req, res);
  });

  app.get("/api/:id", (req, res) => {
    controller.getArticleById(req, res);
  });

  app.post("/api/add", (req, res) => {
    controller.addArticle(req,res);
  });

  app.put("/api/update/:id", (req, res) => {
    controller.updateArticle(req,res);
  });

  app.delete("/api/delete/:id", (req, res) => {
    controller.deleteArticle(req,res);
  });
};

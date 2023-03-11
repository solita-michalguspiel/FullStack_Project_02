// Make sure you don’t pass any web layer objects (i.e. req, res, headers, etc)
// into your services. Instead, unwrap any values like URL parameters, header values,
// body data, etc before dispatching to the service layer.

const articles = require("../data/articles.js");

exports.getArticles = async (req, res) => {
  try {
    console.log("getArticles called");
    let data = await articles.getAllArticles();
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    console.log("getArticleById called");
    const id = req.params.id;
    let data = await articles.getArticleById(id);
    console.log(data);
    if (!data) {
      res.status(404).json({ error: "Article not found." });
    } else {
      res.status(200).json(data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve article." });
  }
};

exports.addArticle = async (req, res) => {
  try {
    console.log("addArticle called");
    console.log(req.body);
    const { title, author, body, tags } = req.body;
    // Create a new article object
    const newArticle = {
      title: title,
      author: author,
      body: body,
      tags: tags,
      created_at: new Date(),
    };

    console.log(newArticle);

    const result = await articles.addArticle(newArticle);
    res.status(201).json(result); // Send back the result
  
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add article." });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    console.log("updateArticle called");
    const id = req.params.id;
    const { title, author, body, tags } = req.body;
    const article = {
      id,
      title,
      author,
      body,
      tags
    };
    const result = await articles.updateArticle(article);
    if (!result) {
      res.status(404).json({ error: "Article not found." });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update article." });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    console.log("deleteArticle called!");
    const id = req.params.id;
    const result = await articles.deleteArticle(id);
  if (!result) {
      res.status(404).json({ error: "Article not found." });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete article." });
  }
};

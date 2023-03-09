const Article = require("../model/article.js");

async function getAllArticles() {
  // Retrieve all articles from the database
  const articles = await Article.find({});
  console.log(articles);
  return articles;
}

async function getArticleById(id) {
    // Retrieve all articles from the database
    const article = await Article.findById(id).exec();
    return article;
  }

  async function addArticle(article) {
    // Create a new article object
    const newArticle = new Article({
      title: article.title,
      body: article.body,
      author: article.author,
      date: article.date
    });
  
    // Save the new article to the database
    const result = await newArticle.save();
  
    return result;
  }
  
  

module.exports = {
  getAllArticles: getAllArticles,
  getArticleById: getArticleById,
  addArticle: addArticle,
//   updateArticle: updateArticle,
//   deleteArticle: deleteArticle
};

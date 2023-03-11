const Article = require("../model/article.js");

async function getAllArticles() {
  const articles = await Article.find({});
  console.log(articles);
  return articles;
}

async function getArticleById(id) {
  const article = await Article.findById(id).exec();
  return article;
}

async function addArticle(article) {
  const newArticle = new Article({
    title: article.title,
    body: article.body,
    author: article.author,
    tags: article.tags,
    created_at: article.created_at,
  });
  const result = await newArticle.save();
  return result;
}

async function updateArticle(article) {
  const result = await Article.updateOne(
    { _id: article.id },
    {
      title: article.title,
      body: article.body,
      author: article.author,
      tags: article.tags,
      edited_at: new Date()
    }
  );
  return result;
}

async function deleteArticle(id) {
  const article = await Article.findById(id).exec();
  return article;
}

module.exports = {
  getAllArticles: getAllArticles,
  getArticleById: getArticleById,
  addArticle: addArticle,
  updateArticle: updateArticle,
  deleteArticle: deleteArticle,
};

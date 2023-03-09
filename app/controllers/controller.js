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
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getArticleById = async (req, res) => {
  try {
    console.log("getArticleById called");
    const id = req.params.id;
    let data = articles.getArticleById(id);
    res.send(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.addArticle = async (req, res) => {
  try {
    console.log("addArticle called");
    console.log(req.body);
    const { title, author, body } = req.body;
    // Create a new article object
    const newArticle = {
      title: title,
      author: author,
      body: body,
      date: new Date(), // Set date to current time
    };

    console.log(newArticle);

    const result = await articles.addArticle(newArticle);
    res.send(result); // Send back the result
  
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    console.log("Hello from controller!");
    res.send("Hello from controller!");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    console.log("Hello from controller!");
    res.send("Hello from controller!");
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

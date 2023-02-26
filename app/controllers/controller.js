
exports.getArticles = async (req, res) => {
    try {
      console.log("Hello from controller!");
      res.send("Hello from controller!");
    } catch (error) {
        console.log(error);
    }
  };

  exports.getArticleById = async (req, res) => {
    try {
      console.log("Hello from controller!");
      const id = req.params.id;
      res.send("Hello from controller! Passed id: " + id);
    } catch (error) {
        console.log(error);
    }
  };

  exports.addArticle = async (req, res) => {
    try {
      console.log("Hello from controller!");
      res.send("Hello from controller!");
    } catch (error) {
        console.log(error);
    }
  };

  exports.updateArticle = async (req, res) => {
    try {
      console.log("Hello from controller!");
      res.send("Hello from controller!");
    } catch (error) {
        console.log(error);
    }
  };

  exports.deleteArticle = async (req, res) => {
    try {
      console.log("Hello from controller!");
      res.send("Hello from controller!");
    } catch (error) {
        console.log(error);
    }
  };
const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
app.use(cors());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  
app.use(bodyParser.json());
require("./routes/articles.js")(app);
require("./routes/comment.js")(app)


module.exports = app



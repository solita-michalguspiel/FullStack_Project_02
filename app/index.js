const express = require("express");
const app = express();
require("./routes/articles.js")(app);

module.exports = app



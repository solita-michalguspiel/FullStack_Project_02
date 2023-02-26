const express = require("express");
const fs = require("fs");
var bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static("public"));








app.listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
  });
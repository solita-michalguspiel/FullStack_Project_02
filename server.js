const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const app = express();
app.use(express.static("public"));
const password = process.env.PW;

const dbUrl = `mongodb+srv://guspielmichal:${password}@cluster0.xtcvhy9.mongodb.net/?retryWrites=true&w=majority`
 mongoose.connect(dbUrl)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://guspielmichal:"+password+"@cluster0.xtcvhy9.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log("Connected I guess?")
//   // perform actions on the collection object
//   client.close();
// });


app.get("/api/getall", (req, res) => {
  res.sendFile(path.join(__dirname + ""));
});

app.get("/api/:id", (req, res) => {
  res.sendFile(path.join(__dirname + ""));
});

app.post("/api/add", (req, res) => {
  res.sendFile(path.join(__dirname + ""));
});

app.put("/api/update/:ud", (req, res) => {
  res.sendFile(path.join(__dirname + ""));
});

app.delete("/api/delete/:ud", (req, res) => {
  res.sendFile(path.join(__dirname + ""));
});

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});

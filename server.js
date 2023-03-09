require("dotenv").config();

const app = require("./app");
const mongoose = require("mongoose");
const password = process.env.PW;
const dbUrl = `mongodb+srv://guspielmichal:${password}@cluster0.xtcvhy9.mongodb.net/?retryWrites=true&w=majority`;


connect();

app.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});

function connect() {
  mongoose
    .connect(dbUrl)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));
}

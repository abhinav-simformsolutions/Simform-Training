const express = require("express");
const app = express();
require("./db/conn");
const path = require("path");
const port = process.env.PORT || 3000;
const hbs = require("hbs");
const template_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

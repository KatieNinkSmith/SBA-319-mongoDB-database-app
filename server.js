const express = require("express");
const app = express();
const PORT = process.env.PORT || 5052;
const dotenv = require("dotenv");
dotenv.config();
const db = require("./db/conn");
const jsxViewEngine = require("jsx-view-engine");
const fs = require("fs");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

const treeRouter = require("./routes/trees");
const annualRouter = require("./routes/annuals");
const perennialRouter = require("./routes/perennials");
const errRouter = require("./routes/404");

app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// middleware
app.use((req, res, next) => {
  const time = new Date();
  console.log(`${time.toLocaleString()}: ${req.method} at ${req.url}`);
  next();
});

app.use("/trees", treeRouter);
app.use("/annuals", annualRouter);
app.use("/perennials", perennialRouter);
app.use("/404", errRouter);

app.get("/", (req, res) => {
  res.send("Hey hey hey, there's like plants and stuff, feels like HOME");
});
// 404 error
app.use((req, res) => {
  console.log("Error: Oh no my table its broken!");
  res.status(404).render("404", { error: "Resource not found" });
});
app.listen(PORT, () => {
  console.log(`Listen, Linda listen we're on port: ${PORT} `);
});

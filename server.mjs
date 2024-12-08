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

const treeRouter = require("./routes/trees");
const annualRouter = require("./routes/annuals");
const perennialRouter = require("./routes/perennials");
const errRouter = require("./routes/404");
app.use("/api/trees", treeRouter);
app.use("/api/annuals", annualRouter);
app.use("/api/perennials", perennialRouter);
app.use("/api/404", errRouter);

// 404 error
app.use((req, res) => {
  console.log("Error: Oh no my table its broken!");
  res.status(404).render("404", { error: "Resource not found" });
});
app.listen(PORT, () => {
  console.log("Listen, Linda listen");
});

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
const Tree = require("./models/trees");

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

app.use("/api/trees", treeRouter);
app.use("/api/annuals", annualRouter);
app.use("/api/perennials", perennialRouter);
app.use("/404", errRouter);

// allows you to see the create page
app.get("/", async (req, res) => {
  try {
    const foundTrees = await Tree.find({});
    res.render("Create", { foundTrees }).status(201);
  } catch (error) {
    res.status(400);
  }
});

app.patch("/trees/:id/edit", async (req, res) => {
  try {
    const updatedTree = await Tree.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedTree);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete("/trees/:id/delete", async (req, res) => {
  try {
    const deletedTree = await Tree.findByIdAndDelete(req.params.id);
    if (!deletedTree) return res.status(404).send("Tree not found");
    res.json(deletedTree);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// 404 error
app.use((req, res) => {
  console.log("Error: Oh no my table its broken!");
  res.status(404).render("404", { error: "Resource not found" });
});
app.listen(PORT, () => {
  console.log(`Listen, Linda listen we're on port: ${PORT} `);
});

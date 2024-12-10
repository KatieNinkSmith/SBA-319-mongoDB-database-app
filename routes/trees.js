const express = require("express");
const router = express.Router();
const Tree = require("../models/trees");

// INDEX Get all trees
// localhost:5052/api/trees THIS ROUTE WORKS!
router.get("/", async (req, res) => {
  try {
    const foundTrees = await Tree.find({});
    res.status(200).json(foundTrees);
  } catch (err) {
    res.status(400).send(err);
  }
});

// // SHOW just one tree
// // localhost:5052/api/trees/:id THIS ROUTE WORKS!
router.get("/:id", async (req, res) => {
  try {
    const foundTrees = await Tree.findById(req.params.id);
    res.json(foundTrees).status(200);
  } catch (err) {
    res.status(400).send(err);
  }
});

// CREATE a new tree
// localhost:5052/api/trees NEED TO TEST IN POSTMAN
router.post("/create", async (req, res) => {
  console.log(req.body);
  try {
    const createdTree = await Tree.create(req.body);
    res.status(200).redirect("/");
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE a tree
// localhost:5052/api/trees/:id/delete NEED TO TEST IN POSTMAN
router.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const deletedTree = await Tree.findByIdAndDelete(req.params.id);
    console.log(deletedTree);
    res.status(200).redirect("/");
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = router;

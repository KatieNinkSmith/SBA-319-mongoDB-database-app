const express = require("express");
const router = express.Router();
const Tree = require("../models/trees");

// INDEX Get all trees
// localhost:5052/trees THIS ROUTE WORKS!
router.get("/", async (req, res) => {
  try {
    const foundTrees = await Tree.find({});
    res.status(200).json(foundTrees);
  } catch (err) {
    res.status(400).send(err);
  }
});

// SHOW just one tree
// localhost:5052/trees/:id THIS ROUTE WORKS!
router.get("/:id", async (req, res) => {
  try {
    const foundTrees = await Tree.findById(req.params.id);
    res.json(foundTrees).status(200);
  } catch (err) {
    res.status(400).send(err);
  }
});

// CREATE a new tree
// localhost:5052/trees NEED TO TEST IN POSTMAN
router.post("/create", async (req, res) => {
  try {
    const createdTree = await Tree.create(req.body);
    res.status(200).redirect("/trees");
  } catch (err) {
    res.status(400).send(err);
  }
});

// UPDATE a tree
// localhost:5052/trees/:id/edit NEED TO TEST IN POSTMAN
router.put("/:id/edit", async (req, res) => {
  try {
    const updatedTree = await Tree.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    console.log(updatedTree);
    res.redirect(`/trees/${req.params.id}`).status(200);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE a tree
// localhost:5052/trees/:id/delete NEED TO TEST IN POSTMAN
router.delete("/:id/delete", async (req, res) => {
  try {
    const deletedTree = await Tree.findByIdAndDelete(req.params.id);
    console.log(deletedTree);
    res.status(200).send("Tree deleted successfully.");
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

//-------USED TO SEED NOW COMMENTED OUT-----

// Database is seeded
// router.get("/seed", async (req, res) => {
//   try {
//     await Tree.create([
//       {
//         name: "Lemon (Meyer)",
//         purpose: "Fruiting",
//         height: 10,
//         diameter: 10,
//         ageOfTree: 15,
//         leaves: "Coniferous",
//         waterRequirements: "Weekly Deep Watering",
//         fertilizer: "Biannual",
//         datePlanted: Date.now,
//       },
//       {
//         name: "Pomogranate (Wonderful)",
//         purpose: "Fruiting",
//         height: 8,
//         diameter: 6,
//         ageOfTree: 2,
//         leaves: "Deciduous",
//         waterRequirements: "Occasinal, Drought Tollerent",
//         fertilizer: "none",
//         datePlanted: Date.now,
//       },
//       {
//         name: "Pomogranate (Eversweet)",
//         purpose: "Fruiting",
//         height: 8,
//         diameter: 6,
//         ageOfTree: 2,
//         leaves: "Deciduous",
//         waterRequirements: "Occasinal, Drought Tollerent",
//         fertilizer: "none",
//         datePlanted: Date.now,
//       },
//       {
//         name: "Chinese Elm",
//         purpose: "Canopy",
//         height: 15,
//         diameter: 18,
//         ageOfTree: 15,
//         leaves: "Deciduous",
//         waterRequirements: "Weekly Deep Watering",
//         fertilizer: "none",
//         datePlanted: Date.now,
//       },
//       {
//         name: "Desert Willow",
//         purpose: "Canopy",
//         height: 20,
//         diameter: 10,
//         ageOfTree: 4,
//         leaves: "Coniferous",
//         waterRequirements: "None Drought Tollerent",
//         fertilizer: "none",
//         datePlanted: Date.now,
//       },
//     ]);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

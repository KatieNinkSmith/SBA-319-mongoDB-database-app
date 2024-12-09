const express = require("express");
const router = express.Router();
const Perennial = require("../models/perennials");

// GET all perennials in the database
// localhost:5050/perennials THIS ROUTE WORKS!!
router.get("/", async (req, res) => {
  try {
    const foundPerennials = await Perennial.find({});
    res.status(200).json(foundPerennials);
  } catch (err) {
    res.status(400).send(err);
  }
});

// it planted well!!
// router.get("/seed", async (req, res) => {
//   try {
//     await Perennial.create([
//       {
//         name: "Tomato",
//         purpose: "Fruiting",
//         size: "Indeterminate",
//         lightAndWater: "8 hours Sun, Water Twice Daily",
//         fertilizer: "Every other week",
//         notes: "Process seeds by fermenting and drying them",
//         datePlanted: Date.now,
//       },
//     ]);
//   } catch (err) {
//     res.send(err).status(400);
//   }
// });

module.exports = router;

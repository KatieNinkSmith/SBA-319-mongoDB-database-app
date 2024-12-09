const express = require("express");
const router = express.Router();
const Annual = require("../models/annuals");

// get all annuals from the database
// localhost:5052/annuals THIS ROUTE WORKS!
router.get("/", async (req, res) => {
  try {
    const foundAnnuals = await Annual.find({});
    res.status(200).json(foundAnnuals);
  } catch (err) {
    res.status(400).send(err);
  }
});

// it works!! no need now
// router.get("/seed", async (req, res) => {
//   try {
//     await Annual.create([
//       {
//         name: "Peas",
//         purpose: "Fruiting",
//         size: "Bush",
//         selfReseed: false,
//         lightAndWater: "6 hours Sun, Water Twice Daily",
//         germinationHelp: false,
//         soilType: "Loamy, with lots of compost",
//         fertilizer: "Every other week",
//         saveSeeds: true,
//         notes: "dry on view for seeds",
//         datePlanted: Date.now,
//       },
//     ]);
//   } catch (err) {
//     res.send(err).status(400);
//   }
// });

module.exports = router;

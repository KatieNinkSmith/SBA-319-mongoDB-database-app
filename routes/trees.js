const express = require("express");
const router = express.Router();
const Tree = require("../models/trees");

router.get("/seed", async (req, res) => {
  try {
    await Tree.create([
      {
        name: "Lemon (Meyer)",
        purpose: "Fruiting",
        height: 10,
        diameter: 10,
        ageOfTree: 15,
        leaves: "Coniferous",
        waterRequirements: "Weekly Deep Watering",
        fertilizer: "Biannual",
        datePlanted: Date.now,
      },
      {
        name: "Pomogranate (Wonderful)",
        purpose: "Fruiting",
        height: 8,
        diameter: 6,
        ageOfTree: 2,
        leaves: "Deciduous",
        waterRequirements: "Occasinal, Drought Tollerent",
        fertilizer: "none",
        datePlanted: Date.now,
      },
      {
        name: "Pomogranate (Eversweet)",
        purpose: "Fruiting",
        height: 8,
        diameter: 6,
        ageOfTree: 2,
        leaves: "Deciduous",
        waterRequirements: "Occasinal, Drought Tollerent",
        fertilizer: "none",
        datePlanted: Date.now,
      },
      {
        name: "Chinese Elm",
        purpose: "Canopy",
        height: 15,
        diameter: 18,
        ageOfTree: 15,
        leaves: "Deciduous",
        waterRequirements: "Weekly Deep Watering",
        fertilizer: "none",
        datePlanted: Date.now,
      },
      {
        name: "Desert Willow",
        purpose: "Canopy",
        height: 20,
        diameter: 10,
        ageOfTree: 4,
        leaves: "Coniferous",
        waterRequirements: "None Drought Tollerent",
        fertilizer: "none",
        datePlanted: Date.now,
      },
    ]);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const foundTrees = await Tree.find({});
    res.status(200).json(foundTrees);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

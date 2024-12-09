const mongoose = require("mongoose");

const treeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  purpose: {
    type: String,
    enum: ["Fruiting", "Canopy", "Flowering", "Perimiter", "Shrub"],
    required: true,
  },
  height: { type: Number },
  diameter: { type: Number },
  ageOfTree: { type: Number },
  leaves: { type: String, enum: ["Deciduous", "Coniferous"] },
  waterRequirements: { type: String },
  fertilizer: { type: String },
  datePlanted: { type: String, default: Date.now, required: true },
});
const Tree = mongoose.model("Tree", treeSchema);

module.exports = Tree;

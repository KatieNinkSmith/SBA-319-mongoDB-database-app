const mongoose = require("mongoose");

const annualsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  purpose: {
    type: String,
    enum: ["Fruiting", "Herb", "Flowering", "Pollinating", "Catch crop"],
    required: true,
  },
  size: { type: String },
  selfReseed: { type: Boolean },
  lightAndWater: { type: String, required: true },
  germinationHelp: { type: Boolean },
  soilType: { type: String },
  fertilizer: { type: String },
  saveSeeds: { type: Boolean },
  notes: { type: String },
  datePlanted: { type: String, default: Date.now, required: true },
});
const Annuals = mongoose.model("Annuals", annualsSchema);

module.exports = Annuals;

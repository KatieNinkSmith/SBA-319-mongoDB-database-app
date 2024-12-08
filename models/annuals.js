const mongoose = require("mongoose");

const annualsSchema = new mongoose.Shema({
  name: { type: String, required: true },
  purpose: {
    type: String,
    enum: ["Fruiting", "Herb", "Flowering", "Pollinating", "Catch crop"],
    required: true,
  },
  size: { type: Number },
  selfReseed: { type: Boolean },
  lightAndWater: { type: String, required: true },
  germinationHelp: { type: Boolean },
  soilType: { type: String },
  fertilizer: { type: String },
  saveSeeds: { type: Boolean },
  notes: { type: String },
  datePlanted: { type: Date, default: Date.now, required: true },
});
const Annuals = mongoose.model("Annuals", annualsSchema);

module.exports = Annuals;

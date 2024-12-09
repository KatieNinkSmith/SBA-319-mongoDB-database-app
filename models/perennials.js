const mongoose = require("mongoose");

const perennialsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  purpose: {
    type: String,
    enum: [
      "Fruiting",
      "Herb",
      "Flowering",
      "Root",
      "Pollinating",
      "Catch crop",
    ],
    required: true,
  },
  size: { type: String },
  lightAndWater: { type: String, required: true },
  fertilizer: { type: String },
  notes: { type: String },
  datePlanted: { type: String, default: Date.now, required: true },
});
const Perennial = mongoose.model("Perennial", perennialsSchema);

module.exports = Perennial;

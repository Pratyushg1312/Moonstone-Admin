const mongoose = require("mongoose");

const countSchema = new mongoose.Schema({
  user: { type: Number, required: true },
  registration : { type: Number, required: false },
});

const Count = mongoose.model("count", countSchema);

module.exports = Count
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  event: { type: String, required: true },
  fees: { type: Number, required: false },
  status: { type: String, required: false },
});

const Event = mongoose.model("event", eventSchema);

module.exports = Event
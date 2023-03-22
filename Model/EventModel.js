const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  event: { type: String, required: true },
  instructions: { type: String, required: false },
  event_category: { type: String, required: false },
  max_team_size: { type: Number, required: false },
  min_team_size: { type: Number, required: false },
  fees: { type: Number, required: false },
  status: { type: String, required: false },
  date_of_event: { type: String, required: false },
});

const Event = mongoose.model("event", eventSchema);

module.exports = Event
const mongoose = require("mongoose");

const countSchema = new mongoose.Schema({
  visitor: { type: Number, required: true },
  registration : { type: Number, required: false },
  cultural_registration: { type: Number, required: false },
  sports_registration: { type: Number, required: false },
  techno_registration: { type: Number, required: false },
  nights_registration: { type: Number, required: false },
  single_event: [{
    event_name:String,
    single_count:Number,
  }]
});

const Count = mongoose.model("count", countSchema);

module.exports = Count
const mongoose = require("mongoose");

const earningSchema = new mongoose.Schema({
  total: { type: Number, required: true },
  cultural_registration:{ type: Number, required: false },
  sports_registration:{ type: Number, required: false },
  Techno_registration:{ type: Number, required: false },
  nights_registration:{ type: Number, required: false },
  single_event:[{
    event_name:String,
    single_count:Number,
  }]
});

const Earning = mongoose.model("earning", earningSchema);

module.exports = Earning
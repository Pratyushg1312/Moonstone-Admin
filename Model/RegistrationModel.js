const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  reg_id: {  type: Number,required: true},
  name: { type: String, required: true },
  phoneno: { type: String, required: false },
  email: { type: String, required: false },
  date_of_birth: { type: String, required: false },
  gender: { type: String, required: false },
  event: { type: String, required: false },
  college: { type: String, required: false },
  fees: {type:Number,required: true},
  utr: { type: String, required: false },
  payment_status: { type: String, default: "Pending" },
  date_added: {  type: Date,default: Date.now},
});

const Registration = mongoose.model("registration", registrationSchema);

module.exports = Registration
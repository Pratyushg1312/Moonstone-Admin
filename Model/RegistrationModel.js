const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  reg_id: {  type: Number,required: true},
  receipt_id: { type: String, required: true },
  name: { type: String, required: true },
  auth_name: { type: String, required: false },
  phoneno: { type: String, required: false },
  email: { type: String, required: false },
  auth_email: { type: String, required: false },
  gender: { type: String, required: false },
  event_category: { type: String, required: false },
  team:[{
    name: String,
    enrollment_no: String,
    gender:String,
    college:String,
    phoneno:String,
    email:String,
    }
  ],
  team_name: {type: String, required: false },
  enrollment_no: {type: String, required: false },
  event: { type: String, required: false },
  college: { type: String, required: false },
  fees: {type:Number,required: true},
  participant_status:{type:String,required: false},
  payment_status: { type: String, default: "Pending" },
  date_of_registration: {  type: Date,default: Date.now},
});

const Registration = mongoose.model("registration", registrationSchema);

module.exports = Registration
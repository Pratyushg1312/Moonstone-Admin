const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  admin_id: { type: String, required: true },
  password : { type: String, required: false },
  privileges : [{
     type: String 
    }],
});

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin
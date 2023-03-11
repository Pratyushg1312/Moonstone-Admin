const router = require("express").Router();
const Registration = require("../Model/RegistrationModel");
const Count = require("../Model/CountModel");
const Event = require("../Model/EventModel");
const Admin = require("../Model/AdminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/allcount", async (req, res) => {
  try {
        Count.find().then((cnt) => res.json(cnt))
        .catch((err) => res.status(400).json("Error: " + err));
  } catch (err) {
    console.error(err);
    res.status(200).send("Error: "+err);
  }
});

router.get("/allregistration", async (req, res) => {
    try {
      const token = req.cookies.token;
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      const existingAdmin = await Admin.findOne({ _id:verified.admin });
        // console.log(existingAdmin);
      
      if(existingAdmin.privileges[0]==="Superadmin"||existingAdmin.privileges[0]==="Accounts"){
        Registration.find().then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
      }
      else{
        Registration.find({ "event" : { $in : existingAdmin.privileges } })
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
      }
    } catch (err) {
        console.error(err);
        res.status(200).send("Error: "+err);
      }
});

router.get("/paymentcompleted/:id", async (req, res) => {
    const Id= req.params.id;
    const token = req.cookies.token;
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      const existingAdmin = await Admin.findOne({ _id:verified.admin });
    // console.log(Id)
    try {
      if(existingAdmin.privileges[0]==="Superadmin"||existingAdmin.privileges[0]==="Accounts"){
        let registrationStatus=await Registration.findOneAndUpdate({_id:Id},{payment_status:"Confirm"});
        res.status(200).send(registrationStatus);
      }
      else{
        res.status(200).send("INVALID USER");        
      }
        } catch (err) {
        console.error(err);
        res.status(200).send("Error: "+err);
      }
});

router.get("/paymentfailed/:id", async (req, res) => {
    const Id= req.params.id;
    const token = req.cookies.token;
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      const existingAdmin = await Admin.findOne({ _id:verified.admin });
    // console.log(Id)
    try {
      if(existingAdmin.privileges[0]==="Superadmin"||existingAdmin.privileges[0]==="Accounts"){
        let registrationStatus=await Registration.findOneAndUpdate({_id:Id},{payment_status:"Failed"});
        res.status(200).send(registrationStatus);
      }
      else{
        res.status(200).send("INVALID USER");       
      } 
      } catch (err) {
        console.error(err);
        res.status(200).send("Error: "+err);
      }
});

router.post("/addevent", async (req, res) => {
    try {
      // const token = req.cookies.token;
      // const verified = jwt.verify(token, process.env.JWT_SECRET);
      // const existingAdmin = await Admin.findOne({ _id:verified.admin });
      //   // console.log(existingAdmin);

      // if(existingAdmin.privileges[0]==="Superadmin"){
        const token = req.cookies.token;
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      const existingAdmin = await Admin.findOne({ _id:verified.admin });
      if(existingAdmin.privileges[0]==="Superadmin"){
        const {event,fees,status}=req.body;
        const newEvent = new Event({event,fees,status});
        newEvent.save().then(() => res.json("Event Added!"))
            .catch((err) => res.status(400).json("Error: " + err));  
      }
      else{
        res.status(200).send("INVALID USER");
      // }
      // else{
      //   res.status(400).json("Error: Not Super Admin");
      // }
      }
      } catch (err) {
        console.error(err);
        res.status(200).send("Successfully Registered");
      }
});

router.post("/changeeventstatus/:id", async (req, res) => {
    const Id= req.params.id;
    try {
      const token = req.cookies.token;
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      const existingAdmin = await Admin.findOne({ _id:verified.admin });
      if(existingAdmin.privileges[0]==="Superadmin"){
        const {status}=req.body;
        let eventStatus=await Event.findOneAndUpdate({_id:Id},{status});
        res.status(200).send(eventStatus);
      }
      else{
        res.status(200).send("INVALID USER");
      }
      } catch (err) {
        console.error(err);
        res.status(200).send(err);
      }
});

router.post("/createadmin", async (req, res) => {
  try {
    const token = req.cookies.token;
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    const existingAdmin = await Admin.findOne({ _id:verified.admin });
    if(existingAdmin.privileges[0]==="Superadmin"){
      const {admin_id, password,privileges}=req.body;
          // hash the password
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      const newAdmin = new Admin({admin_id, password:passwordHash,privileges});
      newAdmin.save().then(() => res.json("Admin Added!"))
      .catch((err) => res.status(400).json("Error: " + err));  
    }
    else{
      res.status(200).send("INVALID USER");     
    }
    } catch (err) {
      console.error(err);
      res.status(200).send(err);
    }
});

module.exports = router;
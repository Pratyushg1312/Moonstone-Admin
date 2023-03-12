const router = require("express").Router();
const Registration = require("../Model/RegistrationModel");
const Count = require("../Model/CountModel");
const Event = require("../Model/EventModel");
const Admin = require("../Model/AdminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const createandsendpass=(props)=>{
let pdfDoc = new PDFDocument;
pdfDoc.pipe(fs.createWriteStream('Passfolder/eventpass.pdf'));
pdfDoc.image('Passfolder/medicaps.png', 50, 45, { width: 50 })
		.fillColor('#444444')
		.fontSize(20)
		.text('Medi-Caps', 110, 57)
		.fontSize(10)
		.text('A.B. Road, Pigdamber,', 200, 65, { align: 'right' })
		.text(' Rau Indore - 453331', 200, 80, { align: 'right' })
		.moveDown();
pdfDoc.image('Passfolder/logomoon.png', 30, 00, { width: 500 })
		.moveDown();
pdfDoc.fontSize(20)
    .text("This is a pass for Moonstone", 450, 150);
// pdfDoc
//     .fillColor('red')
//     .fontSize(17)
//     .text("20%", 305, 150);
pdfDoc.end();


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'info.xtrimcoder@gmail.com',
      pass: 'xftqqyoquxloqkkl'
  }
});


var mailOptions = {
  from: 'info.xtrimcoder@gmail.com',
  to:  props.email,
  subject: `Pass For MOONSTONE | Software Cell Medicaps`,
  text:
`Dear ${props.name},
Your Registration was be confirm 
Your MoonStone Pass was in Attachment.

Thanks & Regards
Software cell
`,
attachments: [
  {   
    path: 'Passfolder/eventpass.pdf',
  },
]
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
      console.log(error);
      // console.log(error);
  } else {
      console.log('Email sent: ' + info.response);
      // return res.json('Email sent: ' + info.response);
  }
});

}

// createandsendpass();




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
        let oldreg=await Registration.findOne({_id:Id});
        // console.log(oldreg)
        createandsendpass(oldreg);
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
        let oldreg=await Registration.findOne({_id:Id});
        var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'info.xtrimcoder@gmail.com',
              pass: 'xftqqyoquxloqkkl'
          }
        });
        
        
        var mailOptions = {
          from: 'info.xtrimcoder@gmail.com',
          to:  oldreg.email,
          subject: `Pass For MOONSTONE | Software Cell Medicaps`,
          text:
        `Dear ${oldreg.name},
Your Registration was be Failed 

Thanks & Regards
Software cell
        `,
        };
        
        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
              console.log(error);
              // console.log(error);
          } else {
              console.log('Email sent: ' + info.response);
              // return res.json('Email sent: ' + info.response);
          }
        });
        
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
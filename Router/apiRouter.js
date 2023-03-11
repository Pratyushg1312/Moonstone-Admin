const router = require("express").Router();
const Admin = require("../Model/AdminModel");
const Registration = require("../Model/RegistrationModel");
const Count = require("../Model/CountModel");
const Event = require("../Model/EventModel");
var nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");

const mailtouser=(props)=>{
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
        subject: `Registration For ${props.event} Event | Software Cell Medicaps`,
        text:
`Dear ${props.name},
Your Registration will be confirm after checking Transaction
Your Registration id : ${props.reg_id}
After confirmation Pass was sended on this Email.

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
}

router.post("/registeruser", async (req, res) => {
    try {
        const {name, phoneno, email,date_of_birth, gender,event,college} = req.body;
        console.log(req.body)
        let utrstatus=[]
        if(!name||!phoneno||!email||!event||!college){
            res.status(400).json("Error: Invalid Input");
        }
        else{
        const token = req.cookies.token;
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        const existingAdmin = await Admin.findOne({ _id:verified.admin });
        //increase Registration count
        const oldcnt= await Count.find();
        let cntstatus=await Count.findOneAndUpdate({_id:oldcnt[0]._id},{user:oldcnt[0].user,registration:oldcnt[0].registration+1});
        
        let eventstatus = await Event.findOne({event});
        
        const reg_id=oldcnt[0].registration+1;
        const newRegistration = new Registration({reg_id,name,auth_name:existingAdmin.admin_id,auth_email:existingAdmin.admin_id, phoneno,email,date_of_birth, gender, event,college,date_added:new Date(),utr:"By Admin",payment_status:"Confirm",fees:eventstatus.fees});
        // console.log("MAIL Send");
        mailtouser({reg_id,name,email,event});
        // console.log("User Saved");
        newRegistration .save()
            .then(() => res.json(reg_id))
            .catch((err) => res.status(400).json("Error: " + err));            
    
        }
    } catch (err) {
        console.error(err);
        res.status(200).send("Error: "+err);
      }
});

router.get("/allevent", async (req, res) => {
    try {
        Event.find()
        .then((event) => res.send(event))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
        console.error(err);
        res.status(200).send("Error: "+err);
      }
});

router.get("/count", async (req, res) => {
    try {
        Count.find()
        .then((cnt) => res.json(cnt))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
        console.error(err);
        res.status(200).send("Error: "+err);
      }
});


module.exports = router;




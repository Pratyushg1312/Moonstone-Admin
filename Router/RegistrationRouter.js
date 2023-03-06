const router = require("express").Router();
const Registration = require("../Model/RegistrationModel");
const Count = require("../Model/CountModel");
const Event = require("../Model/EventModel");
var nodemailer = require('nodemailer');

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
        const {name, phoneno, email,date_of_birth, gender,utr,event,college} = req.body;
        let utrstatus=[]
        if(!name||!phoneno||!email||!event||!college||!utr){
            res.status(400).json("Error: Invalid Input");
        }
        // else if(utr==="NA"||utr==="N/A"||utr==="Na"||utr==="na"){
        //     //nothing to check
        // }
        // else{
        //    utrstatus = await Registration.findOne({utr});            
        // }
        // if(utrstatus.length!==0){
        //     res.status(200).send("Already Present");
        // }        
        else{
        //increase Registration count
        const oldcnt= await Count.find();
        let cntstatus=await Count.findOneAndUpdate({_id:oldcnt[0]._id},{user:oldcnt[0].user,registration:oldcnt[0].registration+1});
        
        let eventstatus = await Event.findOne({event});
        if(eventstatus.status==="open"){
            const reg_id=oldcnt[0].registration+1;
            const newRegistration = new Registration({reg_id,name, phoneno, email,date_of_birth, gender, event,college,date_added:new Date(),utr,payment_status:"Pending",fees:eventstatus.fees});
            mailtouser({reg_id,name,email,event});
            newRegistration .save()
                .then(() => res.json(reg_id))
                .catch((err) => res.status(400).json("Error: " + err));            
        }
        else{
            res.status(200).send("Event Was closed");
        }
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


module.exports = router;
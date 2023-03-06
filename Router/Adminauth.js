const router = require("express").Router();
const jwt = require("jsonwebtoken");
// const jwt_decode=require("jwt-decode")
const bcrypt = require("bcryptjs");
const Admin=require("../Model/AdminModel");

router.post("/", async (req, res) => {
    try {
      // console.log(req.body)
      const { admin_id, password } = req.body;
      // validate
      if (!admin_id || !password)
        return res.status(400).json({ errorMessage: "Please enter all required fields." });
  
      const existingAdmin = await Admin.findOne({ admin_id });
      if (!existingAdmin)
        return res.status(401).json({ errorMessage: "Wrong email or password." });
  
      const passwordCorrect = await bcrypt.compare(password, existingAdmin.password);

      if (!passwordCorrect)
        return res.status(401).json({ errorMessage: "Wrong email or password." });
      // sign the token

      const token = jwt.sign(
        {
          admin: existingAdmin._id,
          privileges:existingAdmin.privileges,
        },
        process.env.JWT_SECRET
      );
  
      // send the token in a HTTP-only cookie

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        })
        .send();
        
    } catch (err) {
      // console.error(err);
      res.status(200).send(err);
    }
  });


  module.exports = router;
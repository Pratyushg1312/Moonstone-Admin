const jwt = require("jsonwebtoken");

function adminauth(req, res, next) {
    try {
      const token = req.cookies.token;
      // console.log(token)
      // console.log("middleware call")
      if (!token) return res.status(401).json({ errorMessage: "Unauthorized" });
      const verified = jwt.verify(token, process.env.JWT_SECRET);
    //   console.log(verified);
    //   req.admin = verified.admin;
    // console.log("middleware was working")
      next();
    } catch (err) {
      console.error(err);
      res.status(401).json({ errorMessage: "Unauthorized" });
    }
  }
  
  module.exports = adminauth;
const router = require("express").Router();
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

router.use(
    session({
      secret: process.env.SESSIONSECRET,
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
);

//change cookie true

// Initialize passport
router.use(passport.initialize());
router.use(passport.session());

passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.clientID,
        clientSecret: process.env.clientSecret,
        callbackURL: `${process.env.BaseUrl}/auth/google/callback`,
      },
      function (accessToken, refreshToken, profile, cb) {
        // Use the profile information to authenticate the user
        // ...
        cb(null, profile);
      }
    )
  );
  
  passport.serializeUser(function (user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
  });

  router.get("/google",passport.authenticate("google", { scope: ["profile", "email"] })
  );
  
  router.get("/google/callback",    passport.authenticate("google", { failureRedirect: "/login" }),
    function (req, res) {
      res.redirect(process.env.BaseUrl+"/registration");
    }
  );
  
// for production "http://localhost:3000"+ on redirect

  router.get("/isauthenticated",async (req,res)=>{
    if (req.isAuthenticated()) {
      // console.log(req.user._json.name);
      // console.log(req.user._json.email);
      res.send({status:true,auth_name:req.user._json.name,auth_email:req.user._json.email})
    }
    else{
        res.send(false)
    }
    // console.log("no req")
    // res.send("done")
  })  

module.exports = router;
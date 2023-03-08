const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const adminauth=require("./Middleware/adminauth");

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [
      "http://localhost:3000",
    ],
    credentials: true,
  })
);

// connect to mongoDB
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://moonstone:asdfghjkl@cluster0.atygi5j.mongodb.net/?retryWrites=true&w=majority") 
.then(()=>{console.log('Mongodb connected')})

// set up routes
app.use("/login", require("./Router/Adminauth"));
app.use("/admin" ,adminauth, require("./Router/AdminRouter"));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
const path=require("path");

app.use(express.static('client/build'));
 app.get('*', (req, res) => {
    res.sendFile(path.resolve('client','build','index.html'));
});
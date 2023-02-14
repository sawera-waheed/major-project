require("../db/conn");
const jwt = require("jsonwebtoken");
const User = require("../models/userschema");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const authenticate = require("../Authentication/Authentication");
const nodemailer = require("nodemailer");

//secret key
const key = process.env.SECRET_KEY;

//sign up user
router.post("/signup", async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  if (!name || !email || !password || !cpassword) {
    res.status(422).json({ error: "All fields required" });
  } else if (password != cpassword) {
    res.status(409).json({ error: "password does not match" });
  } else {
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        res.status(406).json({
          message:
            "This email is already registered . Please enter an new email",
        });
      } else {
        try {
          const user = new User({ name, email, password });
          user.save();
          res.status(200).json({ message: "Data sent" });
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
});

//sign in
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ error: "All fields required" });
  } else {
    try {
      const Email = await User.findOne({ email: email });
      if (Email) {
        const isMatch = await bcrypt.compare(password, Email.password);
        if (isMatch) {
          //token generation
          const token = await Email.generateAuthtoken();

          // generate cookie
          res.cookie("userCookie", token, {
            expires: new Date(Date.now() + 9000000),
            httpOnly: true,
          });

          const result = {
            token,
            Email,
          };
          res.status(200).json({ message: "Data sent successfully", result });
        } else {
          res.status(401).json({ error: "Invalid Credential" });
        }
      } else {
        res.status(401).json({ error: "Invalid Credential" });
      }
    } catch (err) {
      console.log(err);
    }
  }
});

//validate
router.get("/validUser", authenticate, async (req, res) => {
  try {
    const verifyUser = await User.findOne({ _id: req.id });
    if (verifyUser) {
      res.status(200).json({ message: "User Validate", verifyUser });
    }
  } catch (err) {
    console.log(err);
  }
});
// seting email setup
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL, // generated ethereal user
    pass: process.env.PASSWORD, // generated ethereal password
  },
});
// send email link to rest password
router.post("/sendPasswordLink", async (req, res) => {
  const { email } = req.body;
  // console.log(email);
  if (!email) {
    res.status(422).json({ error: "Please enter Email" });
  } else {
    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        res.status(401).json({ error: "Invalid Email" });
      } else {
        let token = jwt.sign({ _id: user._id }, key, { expiresIn: "120s" });

        const setToken = await User.findByIdAndUpdate(
          { _id: user._id },
          { verifytoken: token },
          { new: true }
        );
        if (setToken) {
          let info = await transporter.sendMail({
            from: `"Sawera Waheed"  <process.env.EMAIL>`,
            to: email,
            subject: "Password Reset LINK",
            text: `"This link will be valid for 2 minutes. Click on the link to reset your password : " 
            http://localhost:3000/resetpassword/${user._id}/${setToken.verifytoken}`,
          });
          res.status(200).json({ message: "Email sent" });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
});

router.get("/resetpassword/:id/:token", async (req, res) => {
  const { id, token } = req.params;

  try {
    const user = await User.findOne({ _id: id, verifytoken: token });
    const verifyToken = jwt.verify(token, key);

    if (user && verifyToken._id) {
      res.status(200).json({ message: "Valid User" });
    } else {
      res.status(401).json({ error: "Invalid User" });
    }
  } catch (err) {
    res.status(401).json({ error: "Inavlid User", err });
  }
});

//set new password

router.post("/:id/:token", async (req, res) => {
  const { id , token } = req.params;
  const { password } = req.body;
  if (!password) {
    res.status(422).json({ message: "Please enter a new password" });
  } else {
    try {
      
      const validUser = await User.findOne({ _id: id, verifytoken: token });
      const verifyToken = jwt.verify(token, key);
      if (validUser && verifyToken) {

        const newpassword = await bcrypt.hash(password, 12);
        const user = await User.findByIdAndUpdate(
          { _id: id },
          { password: newpassword },
          { new: true }
        );
        user.save();
        res.status(200).json({ message: "Password Updated" });
      } else {
        res.status(401).json({ error: "Invalid User" });
      }
    } catch (err) {
      console.log(err);
    }
  }
});
module.exports = router;

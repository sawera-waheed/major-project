require("../db/conn");
const User = require("../models/userschema");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

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
        res
          .status(406)
          .json({
            message:
              "This email is already registered . Please enter an new email",
          });
      }else{
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

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ error: "All fields required" });
  }
  try {
    const Email = await User.findOne({ email: email });
    if (Email) {
      const isMatch = await bcrypt.compare(password, Email.password);
      if (isMatch) {
        res.status(200).json({ message: " Login Successfully" });
      } else {
        res.status(401).json({ error: "Invalid Credential" });
      }
    } else {
      res.status(401).json({ error: "Invalid Credential" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

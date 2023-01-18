const express= require("express");
const router = express.Router();
const nodemailer =require("nodemailer");
router.get("/sendmail", async(req, res)=>{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'sawerawaheed.dn@gmail.com',
            pass: 'jtkcxhwquoozpenr'
        },
      });
      let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <safanoorfsc24@gmail.com>', // sender address
        to: "saverawaheed59@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      console.log(info.messageId);
      res.json(info)

});

module.exports =  router;
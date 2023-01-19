const express= require("express");
const router = express.Router();
const nodemailer =require("nodemailer");
router.post("/sendmail", async(req, res)=>{
  console.log(req.body);
     const{name , email , subject , message}=req.body;
     console.log(name);
     if(name || email || subject || message){
      res.status(422).json({error: "Please Fill all Details"});
     }
     try{
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
        from: `"${name}" `, // sender address
        to: `${email}`, // list of receivers
        subject: `${subject}`, // Subject line
        text: `${message}`, // plain text body
        // html: "<b>Hello world?</b>", // html body
      });
      console.log(info.messageId);
      res.json(info)
     }catch(err){
      console.log(err);
     }
   

});

module.exports =  router;
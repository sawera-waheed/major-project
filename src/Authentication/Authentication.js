const jwt = require("jsonwebtoken");
const User = require("../models/userschema");
const key = process.env.SECRET_KEY;



const Authentication = async(req, res, next) => {
 try{
    
    const token = req.headers.authorization;
    const verifyToken = jwt.verify(token, key);
    const user = await User.findOne({_id:verifyToken._id});
    
    if(!user){
       console.log("user not found")
    }else{
        req.token= token
    req.user = user
    req.id= user._id
  next();
    }
    
 }catch(err){
    res.status(401).json({ error: "user not found"});
 }
}
module.exports= Authentication;




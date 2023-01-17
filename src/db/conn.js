const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "H:/React Projects/nodemailer/.env" });
const DB = process.env.DATABASE;
const dbconnection = mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = dbconnection;

const express = require("express");
const app = express();
const cors = require("cors");
require("./src/db/conn");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cookie = require("cookie-parser")
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./src/routes/productroutes"));
app.use(require("./src/routes/sendmail"));
app.use(require("./src/routes/userrouter"));
app.use(express.json());
app.use(cookie());
app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});

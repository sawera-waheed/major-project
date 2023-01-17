const express = require("express");
const app = express();
const cors = require("cors");
require("./src/db/conn");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("./src/routes/productroutes"));
app.use(express.json());
app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});

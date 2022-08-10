const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const app = express();
app.use(cors());
app.use(bodyParser.json());





mongoose.connect("mongodb://localhost:27017/shoppingApp");

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("errror in creating db", err);
});
db.once("open", () => {
  console.log("Succesfully connected to the database");
});





app.use("/user", require("./routes/user"));



app.listen(8000, () => {
  console.log("Server is running on port:8000");
});

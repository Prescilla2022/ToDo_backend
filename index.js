const http = require("http");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const ToDo = require("./model/ToDo");
const cors = require("cors");

const app = express();
require("dotenv").config();
const connectDB = require("./config/dbConn");
connectDB();
const PORT = process.env.port || 10000;
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
  res.setHeader("Access-Control-Allow-Credentials","true"),
    res.send("Api running");
}
  

app.use("/show", require("./routes/showToDo"));
app.use("/add", require("./routes/addToDo"));
app.use("/delete", require("./routes/deleteToDo"));
app.use("/deleteOne", require("./routes/deleteOne"));

mongoose.connection.once("open", () => {
  console.log("connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
});

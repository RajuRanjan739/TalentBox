const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

//Middleware
app.use(cors({ "origin": "*",
"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
"preflightContinue": false,
"optionsSuccessStatus": 204,}));
app.use(express.json());
app.use(cookieParser());
app.use("/", router);

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials","true");
  res.send("API is running..");
});

mongoose
  .connect(
    "mongodb+srv://rajuranjan739:CkDVhNm7AyAQBoA1@cluster0.2xi6wmp.mongodb.net/talent-box?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
    console.log("Database is connected on 5000 port");
  })
  .catch((err) => console.log(err));

//CkDVhNm7AyAQBoA1

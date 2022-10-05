import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import getInterview from "./controllers/getInterview.js"
import createInterview from "./controllers/createInterview.js"
import addUser from "./controllers/addUser.js"
import getUser from "./controllers/getUser.js"
import updateInterview from "./controllers/updateInterview.js"

dotenv.config();

//const mongodb_url = `mongodb+srv://${process.env.mongo_details}@cluster0.93fyzrm.mongodb.net/?retryWrites=true&w=majority`;

const mongodb_url='mongodb://127.0.0.1:27017/abcddata'
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.use("/getinterviews", getInterview)
app.use("/createInterview", createInterview)
app.use("/adduser", addUser) 
app.use("/getuser", getUser)
app.use("/updateInterview",updateInterview)

app.listen(PORT, () => {
  console.log(`Server Running on Port:${PORT}`);
});

mongoose.connect(mongodb_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to mongodb"); 
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
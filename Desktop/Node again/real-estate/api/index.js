import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch((err) => {
    console.log("Something went wrong" + err);
  });

app.get((req, res) => {
  res.json("hello");
});

app.listen(8007, () => console.log("Server started at 8007"));

// mittalji1020
// EdBwZ5j4JxodvUx5
// mongodb+srv://mittalji1020:EdBwZ5j4JxodvUx5@real-estate.ychmaol.mongodb.net/?retryWrites=true&w=majority&appName=real-estate

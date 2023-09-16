const express = require("express");
const app = express();
const cors = require('cors')

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/expres-exercise");
app.use(express.json());
app.use(cors())

const ExerciseApiRouter = require("./router/exerciseApiRouter");

//router api
app.use("/exercise", ExerciseApiRouter);

app.listen(3030, function () {
  console.log("Serwer śmiga");
});

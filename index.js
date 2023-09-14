const express = require('express')
const app = express()


const mongoose = require('mongoose')

app.get('/',function(req,res){
res.send("ja  ja jh")
});

mongoose.connect('mongodb://127.0.0.1:27017/expres-exercise')

const ExerciseModel = require('./models/ExerciseModel')

// app.get("/mongoose", async function (req, res) {
//   const exerciseModels = await ExerciseModel.find().exec();
//   //async await znaczy ze mamy poczekac na te dane ktore otrzymay z serwera
//   res.send(exerciseModels)
// });


app.get("/mongoose", function (req, res) {
  ExerciseModel.find().then((exercises) => {
    res.send(exercises)
  })
  //async await znaczy ze mamy poczekac na te dane ktore otrzymay z serwera

});



app.listen(3030, function () {
  console.log("serwer dziala");
});
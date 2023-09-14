const express = require('express')
const app = express()


const mongoose = require('mongoose')

// app.get('/',function(req,res){
// res.send("ja  ja jh")
// });

mongoose.connect('mongodb://127.0.0.1:27017/expres-exercise')

const ExcerciseRecord = require('./models/ExcerciseRecord ')
const excerciseRecordControler = require('./controler/ExcerciseRecordControler')
// app.get("/mongoose", async function (req, res) {
//   const ExcerciseRecord  = await ExcerciseRecord .find().exec();
//   //async await znaczy ze mamy poczekac na te dane ktore otrzymay z serwera
//   res.send(ExcerciseRecord )
// });




app.use(express.json());
app.get("/mongoose", function (req, res) {
    ExcerciseRecord.find().then((exercises) => {
        res.send(exercises)
    }).catch((err) => {
        res.send(err)
    })
    //async await znaczy ze mamy poczekac na te dane ktore otrzymay z serwera

});



app.get('/exercise', excerciseRecordControler.index)
	
app.get('/ExcerciseRecord/:id', excerciseRecordControler.post)

app.listen(3030, function () {
    console.log("Serwer śmiga");
});
const express = require('express')
const app = express()


const mongoose = require('mongoose')

// app.get('/',function(req,res){
// res.send("ja  ja jh")
// });

mongoose.connect('mongodb://127.0.0.1:27017/expres-exercise')

const ExcerciseRecordModel = require('./models/ExcerciseRecordModel')

const ExcerciseRecordControler = require('./controllers/ExcerciseRecordControler')

const ExerciseApiRouter = require('./router/exerciseApiRouter.');



app.use(express.json());

app.get("/mongoose", function (req, res) {
    ExcerciseRecordModel.find().then((exercises) => {
        res.send(exercises)
    }).catch((err) => {
        res.send(err)
    })
    //async await znaczy ze mamy poczekac na te dane ktore otrzymay z serwera

});



app.get('/exercise', ExcerciseRecordControler.index)
//router api
app.use('/exercise', ExerciseApiRouter)




app.listen(3030, function () {
    console.log("Serwer śmiga");
});
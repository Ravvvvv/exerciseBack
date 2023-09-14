
const mongoose = require('mongoose')


const ExerciseModel = new mongoose.Schema(
    {
        name: String,
        weight: String,
        repeatsNumber: String,

    },
    { timestamps: true }
    //data utworzenia 
)

module.exports = mongoose.model('ExerciseModel', ExerciseModel)
// nazwa naszej kolekcj ExerciseModel(liczbapojdyncza) a po prfzecinki schemat naszje kolekcji 
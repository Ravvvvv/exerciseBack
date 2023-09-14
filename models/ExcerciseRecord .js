
const mongoose = require('mongoose')


const ExcerciseRecord  = new mongoose.Schema(
    {
        name: String,
        weight: String,
        repeatsNumber: String,

    },
    { timestamps: true }
    //data utworzenia 
)

module.exports = mongoose.model('ExcerciseRecord ', ExcerciseRecord )
// nazwa naszej kolekcj ExerciseModel(liczbapojdyncza) a po prfzecinki schemat naszje kolekcji 
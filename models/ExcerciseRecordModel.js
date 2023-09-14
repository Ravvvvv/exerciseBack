
const mongoose = require('mongoose')


const ExcerciseRecordModel = new mongoose.Schema(
    {
        name: String,
        weight: Number,
        repeatsNumber: Number,

    },
    { timestamps: true }
    //data utworzenia 
)

module.exports = mongoose.model('ExcerciseRecordModel ', ExcerciseRecordModel)
// nazwa naszej kolekcj ExerciseModel(liczbapojdyncza) a po prfzecinki schemat naszje kolekcji 
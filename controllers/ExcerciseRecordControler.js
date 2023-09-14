
const ExcerciseRecord = require('../models/ExcerciseRecordModel')

module.exports = {
  index: (req, res) => {
    ExcerciseRecord.find({})
      .lean()
      .then((exercises) => {
        res.render('exerciseViews', exercises, exercises)
      })
      .catch((err) => {
        res.send(err)
      })

  },

};

//eksportujemy obiket ktory sklada sie z metod
//lean zamienia kolekcje mongo na tablice js
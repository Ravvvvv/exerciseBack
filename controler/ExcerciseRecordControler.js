
const ExcerciseRecord = require('../models/ExcerciseRecord ')

module.exports = {
    index: (req, res) => {
        ExcerciseRecord.find({}).lean().then((exercises) => {
            res.render('exercise', exercises)
        }).catch((err) => {
            res.send(err)
        })

    },
      
    post: (req, res) => {
        Post.findById(req.params.id)
          .then((post) => {
            res.render("excercise/single", post)
          })
          .catch((err) => {
            res.send(err);
          });
        }
};
//eksportujemy obiket ktory sklada sie z metod
//lean zamienia kolekcje mongo na tablice js
const ExcerciseRecordControler = require('../controllers/ExcerciseRecordControler')


module.exports = {
    index: (req, res) => {
        ExcerciseRecord.find({})
            .lean()
            .then((exercises) => {
                res.satus(200).json(exercises)
            })
            .catch((err) => {
                res.satus(500).json({ error: err });
            });


    },
    create: (req, res) => {
        ExcerciseRecord.find({})
            .lean()
            .then((exercises) => {
                res.satus(200).json(exercises)
            })
            .catch((err) => {
                res.satus(404).json({ error: 'error 404' });
            });


    },
    create: (req, res) => {
        const newExercise = new ExcerciseRecord({
            name: req.body.name,
            weight: req.body.weight,
            repeatsNumber: req.body.repeatsNumber,
        });
        newExercise.save()
            .then((exercise) => {
                res.status(201).json(exercise); // Zwróć utworzony obiekt
            })
            .catch((err) => {
                res.status(400).json({ error: 'nie dziala' }); // Obsłuż błąd i zwróć błąd 400
            });

    }



};
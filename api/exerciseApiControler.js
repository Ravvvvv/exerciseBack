const ExcerciseRecord = require("../models/ExerciseModel");

module.exports = {
  index: (req, res) => {

    const query = req.body.name ? { name: req.body.name } : {}

    ExcerciseRecord.find(query)
      .lean()
      .then((exercises) => {
        res.status(200).json(exercises);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  },

  create: (req, res) => {
    const newExercise = new ExcerciseRecord({
      name: req.body.name,
      weight: req.body.weight,
      repeatsNumber: req.body.repeatsNumber,
    });
    
    newExercise
      .save()
      .then((exercise) => {
        res.status(201).json(exercise); // Zwróć utworzony obiekt
      })
      .catch((err) => {
        res.status(400).json({ error: "nie dziala" }); // Obsłuż błąd i zwróć błąd 400
      });
  },
};

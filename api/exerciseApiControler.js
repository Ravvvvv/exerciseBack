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

  delete: (req, res) => {
    const id = req.params.id;

    ExcerciseRecord.findByIdAndRemove(id)
      .then((exercise) => {
        res.status(200).json({
          message: 'Ćwiczenie zostało usunięte pomyślnie',
          id: id,
          deletedExercise: exercise,
        });
      })
      .catch((err) => {
        console.error('Błąd podczas usuwania:', err);
        res.status(500).json({
          message: 'Wystąpił błąd podczas usuwania ćwiczenia',
          error: err.message,
        });
      });
  },
};

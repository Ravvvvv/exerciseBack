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
    create:(req,res)=>{
        const newExercises= new Exercises({...})
    }



};
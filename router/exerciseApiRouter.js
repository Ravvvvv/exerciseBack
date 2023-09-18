
const express = require('express')
const router = express.Router();

const exerciseApiController = require('../api/exerciseApiControler');

//pobierz get
router.get('/', exerciseApiController.index);
///dodaj post
router.post('/', exerciseApiController.create)
//delete 
router.delete('/delete/:id', exerciseApiController.delete)

module.exports = router
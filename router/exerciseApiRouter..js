
const express = require('express')
const router = express.Router();

const exerciseApiControler   = require('../api/exerciseApiControler');

router.get('/', exerciseApiControler.index);
router.post('/',exerciseApiControler.create)


module.exports = router
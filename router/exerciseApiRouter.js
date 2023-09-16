
const express = require('express')
const router = express.Router();

const exerciseApiController   = require('../api/exerciseApiControler');

router.get('/', exerciseApiController.index);
router.post('/',exerciseApiController.create)


module.exports = router
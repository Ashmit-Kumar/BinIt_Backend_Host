const express = require('express');
const router = express.Router();
const {getNGo, registerNGO} = require('../controllers/ngoController')
router.get('/', getNGo);
router.post('/', registerNGO);

module.exports=router;
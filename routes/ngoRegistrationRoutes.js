const express = require('express');
const router = express.Router();
const {getNGOs, registerNGO} = require('../controllers/ngoController')
router.get('/', getNGOs);
router.post('/', registerNGO);

module.exports=router;
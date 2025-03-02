const express = require('express');
const router = express.Router();
const {getReports, postReports} = require('../controllers/reportController')

router.get('/',getReports);
router.post('/',postReports);

module.exports=router;
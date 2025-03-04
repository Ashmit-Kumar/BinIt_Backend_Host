const express = require('express');
const router = express.Router();
const {subscribe,getSubscribe} = require('../controllers/subscribeController')

// Route to handle subscribing to news
router.post('/', subscribe);
router.get('/',getSubscribe);
module.exports = router;

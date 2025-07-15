const express = require('express');
const { claimPoints } = require('../controllers/claimController');
const router = express.Router();

router.post('/', claimPoints);

module.exports = router;
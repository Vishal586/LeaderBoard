const express = require('express');
const { getUsers, addUser, getLeaderboard, getUserHistory } = require('../controllers/userController');
const router = express.Router();

router.get('/', getUsers);
router.post('/', addUser);
router.get('/leaderboard', getLeaderboard);
router.get('/history/:userId', getUserHistory);

module.exports = router;
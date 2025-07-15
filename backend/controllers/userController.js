const User = require('../models/User');
const History = require('../models/History');

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.addUser = async (req, res) => {
  const { name } = req.body;
  const newUser = new User({ name });
  await newUser.save();
  res.json(newUser);
};

exports.getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
};

exports.getUserHistory = async (req, res) => {
  const { userId } = req.params;
  const history = await History.find({ userId }).sort({ timestamp: -1 });
  res.json(history);
};
const User = require('../models/User');
const History = require('../models/History');

exports.claimPoints = async (req, res) => {
  const { userId } = req.body;
  const points = Math.floor(Math.random() * 100) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.totalPoints += points;
  await user.save();

  const history = new History({ userId, points });
  await history.save();

  res.json({ user, points });
};
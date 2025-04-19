const User = require("./user-schema");

exports.createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

exports.getAllUsers = async () => {
  return await User.find();
};

exports.getUserById = async (id) => {
  return await User.findById(id);
};

exports.updateUser = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

exports.getUserByUserId = async (user_id) => {
  return await User.findOne({ user_id });
};

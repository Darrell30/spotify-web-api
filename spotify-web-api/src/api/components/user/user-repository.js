const User = require("./user-schema");

exports.create = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

exports.getAll = async () => {
  return await User.find();
};

exports.getById = async (id) => {
  return await User.findById(id);
};

exports.getByUserId = async (user_id) => {
  return await User.findOne({ user_id });
};

exports.update = async (id, userData) => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

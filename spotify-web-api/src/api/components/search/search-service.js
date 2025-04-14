const { Users } = require('../../../models');

async function getUsers() {
  return Users.find({});
}

async function getUser(id) {
  return Users.findById(id);
}

async function getUserByEmail(email) {
  return Users.findOne({ email });
}

async function createUser(email, password, fullName) {
  return Users.create({ email, password, fullName });
}

async function updateUser(id, email, fullName) {
  return Users.updateOne({ _id: id }, { $set: { email, fullName } });
}

async function changePassword(id, password) {
  return Users.updateOne({ _id: id }, { $set: { password } });
}

async function deleteUser(id) {
  return Users.deleteOne({ _id: id });
}

async function loginUser(email, password) {
  // Sesuaikan dengan implementasi login, misal menggunakan method statis pada model Users
  return Users.loginUser({ email, password });
}

// Fungsi untuk mencari user berdasarkan keyword (misal, cocok pada email atau fullName)
async function searchUsers(keyword) {
  const regex = new RegExp(keyword, 'i'); // case-insensitive
  return Users.find({
    $or: [
      { email: regex },
      { fullName: regex }
    ],
  });
}

module.exports = {
  getUsers,
  getUser,
  getUserByEmail,
  createUser,
  updateUser,
  changePassword,
  deleteUser,
  loginUser,
  searchUsers, // ekspor fungsi search
};

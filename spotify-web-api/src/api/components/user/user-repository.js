const { Users } = require('../../../models'); // sesuaikan dengan model yang kamu pakai

async function fetchProfileFromSpotify(token) {
  // ... sudah ada sebelumnya
}

// Tambah user ke DB internal
async function createUser(userData) {
  return Users.create(userData);
}

// Ambil semua user
async function getUsers() {
  return Users.find({});
}

// Ambil user by ID
async function getUserById(id) {
  return Users.findById(id);
}

// Hapus user by ID
async function deleteUser(id) {
  return Users.findByIdAndDelete(id);
}

module.exports = {
  fetchProfileFromSpotify,
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};

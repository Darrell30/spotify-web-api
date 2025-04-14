const userRepository = require('./user-repository');

// Spotify Profile
async function getUserProfile(token) {
  return userRepository.fetchProfileFromSpotify(token);
}

// DB: Tambah user
async function createUser(userData) {
  return userRepository.createUser(userData);
}

// DB: Ambil semua user
async function getUsers() {
  return userRepository.getUsers();
}

// DB: Ambil satu user
async function getUserById(id) {
  return userRepository.getUserById(id);
}

// DB: Hapus user
async function deleteUser(id) {
  return userRepository.deleteUser(id);
}

module.exports = {
  getUserProfile,
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};

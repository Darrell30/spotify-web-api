async function searchUsers(keyword) {
  const regex = new RegExp(keyword, 'i'); // 'i' untuk case-insensitive
  return Users.find({
    $or: [
      { email: regex },
      { fullName: regex },
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
  searchUsers, // ← ini penting
};

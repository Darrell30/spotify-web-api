
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  display_name: String,
  user_id: String,
  followed_artist: String,
  playlist: String
});

module.exports = mongoose.model('User', userSchema);

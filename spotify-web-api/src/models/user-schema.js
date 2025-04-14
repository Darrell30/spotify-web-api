const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  display_name: {
    type: String,
    required: false, // Optional sesuai dokumentasi Spotify
  },
  id: {
    type: String,
    required: true, // Spotify user ID biasanya unik dan penting
  }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

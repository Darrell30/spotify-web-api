const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  display_name: {
    type: String,
    required: true
  },
  playlist_id: {
    type: String,
    required: true,
    unique: true
  },
  playlist_name: {
    type: String,
    required: true
  },
  tracks: {
    type: [String],
    default: []
  },
  user_id: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Playlist', playlistSchema);

const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  playlist_name: {
    type: String,
    required: true,
  },
  tracks: [
    {
      type: String, // bisa jadi ID track Spotify
    }
  ]
}, {
  timestamps: true,
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;

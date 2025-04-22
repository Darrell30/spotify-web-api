const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  song_id: { type: String, required: true, unique: true },
  song_name: { type: String, required: true },
  artist: { type: String, required: true },
  genre: { type: String },
  available_markets: [String]
}, {
  collection: 'Tracks'
});

module.exports = mongoose.model('Tracks', trackSchema);
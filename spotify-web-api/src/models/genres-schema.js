const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  genre_id:   String,
  genre_name: String
}, { collection: 'genres' });

module.exports = mongoose.model('Genres', genreSchema, 'genres');
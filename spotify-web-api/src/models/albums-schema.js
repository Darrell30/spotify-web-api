const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  album_id:   String,
  album_name: String,
  track_id : Array,
  track_name : Array
}, { collection: 'albums' });

module.exports = mongoose.model('Album', albumSchema, 'albums');
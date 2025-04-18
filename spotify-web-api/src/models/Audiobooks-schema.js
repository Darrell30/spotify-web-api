const mongoose = require('mongoose');

const AudiobookSchema = new mongoose.Schema({
  audiobook_id: String,
  market: String,
});

module.exports = mongoose.model('Audiobook', AudiobookSchema, 'audiobooks');


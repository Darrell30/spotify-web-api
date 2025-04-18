/*const express = require('express');
const audiobooksController = require('./Audiobooks-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/audiobooks', route);

  // Simpan audiobook_id dan market
  route.post('/save-market', audiobooksController.saveAudiobookMarket);

  // Ambil semua audiobook dari MongoDB
  route.get('/all', audiobooksController.getAudiobooks);
};*/

const express = require('express');
const AudiobooksController = require('./Audiobooks-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/Audiobooks', route);

  // Pagination middleware
  route.use((req, res, next) => {
    let { offset, limit } = req.query;
    req.offset = parseInt(offset) || 0;
    req.limit = parseInt(limit) || 10;
    next();
  });

  route.get('/', AudiobooksController.GetAllAudiobooks);
  route.get('/:id', AudiobooksController.GetAudiobooksById);
  route.post('/', AudiobooksController.createAudiobooks);
  route.delete('/:id', AudiobooksController.deleteAudiobooks);
};

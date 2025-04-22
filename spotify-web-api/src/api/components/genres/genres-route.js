const express = require('express');
const route = express.Router();

const genresController = require('./genres-controller');

module.exports = (app) => {
  app.use('/genres', route);

  //Get available Genres
  route.get('/', genresController.getAvailableGenres);

  //Get Genre by ID
  route.get('/:id', genresController.getGenreById);
};

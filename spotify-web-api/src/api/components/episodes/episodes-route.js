const express = require('express');
const episodesController = require('./episodes-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/episodes', route);

  // Search episodes
  route.get('/search', episodesController.searchEpisodes);

  // Get user's saved episodes
  route.get('/me', episodesController.getSavedEpisodes);

  // Get several episodes by IDs (pakai query ?ids=)
  route.get('/', episodesController.getSeveralEpisodes);

  // Get one episode by ID
  route.get('/:id', episodesController.getEpisode);
};
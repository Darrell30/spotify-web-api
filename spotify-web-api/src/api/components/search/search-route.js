const express = require('express');
const searchController = require('./search-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/search', route);

  // Search episodes from Spotify
  route.get('/episodes', searchController.searchEpisodes);

  // Search shows (podcast show)
  route.get('/shows', searchController.searchShows);

  // Search all types
  route.get('/', searchController.searchAll); // q=...&type=episode,show,...
};

const express = require('express');
const playlistController = require('./playlist-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/playlist', route);

  // GET /playlist/me
  route.get('/me', playlistController.getMyPlaylists);
};

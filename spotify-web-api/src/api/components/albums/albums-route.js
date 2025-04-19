const express = require('express');
const route = express.Router();

const albumsController = require('./albums-controller');



module.exports = (app) => {
  app.use('/albums', route);

  // Get all albums
  route.get('/', albumsController.getAllAlbums);

  // Get album by ID
  route.get('/:id', albumsController.getAlbumById);

  // Get tracks from a specific album
  // Example: GET /albums/3KuXEGcqLcnEYWnn3OEGy0/tracks
  route.get('/:id/tracks', albumsController.getAlbumTracks);
};

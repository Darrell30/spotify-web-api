const express = require('express');
const route = express.Router();

const albumsController = require('./albums-controller');



module.exports = (app) => {
  app.use('/albums', route);

  // Get multiple albums by IDs (comma-separated string)
  // Example: GET /albums?ids=3KuXEGcqLcnEYWnn3OEGy0,6akEvsycLGftJxYudPjmqK
  route.get('/', albumsController.getMultipleAlbums);

  // Get a single album by ID
  // Example: GET /albums/3KuXEGcqLcnEYWnn3OEGy0
  route.get('/:id', albumsController.getAlbumById);

  // Get tracks from a specific album
  // Example: GET /albums/3KuXEGcqLcnEYWnn3OEGy0/tracks
  route.get('/:id/tracks', albumsController.getAlbumTracks);
};

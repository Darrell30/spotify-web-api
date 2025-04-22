const express = require('express');
const artistController = require('./artist-Controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/artist', route);

  // Get all artists
  route.get('/', artistController.getAllArtists);

  // Get artist by ID
  route.get('/:id', artistController.getArtistById);

  // Create new artist
  route.post('/', artistController.createArtist);

  // Delete artist by ID
  route.delete('/:id', artistController.deleteArtist);

  // Update artist by ID
  route.put('/:id', artistController.updateArtist);
};

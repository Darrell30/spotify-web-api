const express = require('express');
const artistController = require('./artist-Controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/artist', route);

  route.get('/', artistController.getAllArtists);

  route.get('/:id', artistController.getArtistById);

  route.post('/', artistController.createArtist);

  route.delete('/:id', artistController.deleteArtist);

  route.put('/:id', artistController.updateArtist);
};

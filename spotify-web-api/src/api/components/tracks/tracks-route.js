const express = require('express');
const tracksController = require('./tracks-controller');

module.exports = (app) => {
  app.get('/tracks/:id', tracksController.getTrack);
  app.get('/tracks', tracksController.getSeveralTracks);
  app.get('/search', tracksController.searchTracks);
};
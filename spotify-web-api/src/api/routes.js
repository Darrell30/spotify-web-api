const express = require('express');

const albums = require('./components/albums/albums-route');
//const users = require('./components/genres/genres-route');

module.exports = () => {
  const app = express.Router();

  albums(app);
  //users(app);

  return app;
};

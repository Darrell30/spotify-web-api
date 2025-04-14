const express = require('express');
const userController = require('./user-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/user', route);

  // Spotify profile
  route.get('/profile', userController.getProfile);

  // DB user management
  route.post('/', userController.createUser);
  route.get('/', userController.getUsers);
  route.get('/:id', userController.getUserById);
  route.delete('/:id', userController.deleteUser);
};

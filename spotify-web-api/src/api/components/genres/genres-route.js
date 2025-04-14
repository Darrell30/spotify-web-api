const express = require('express');

const usersController = require('./users-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/users', route);

  route.get('/', (request, response) => {
  let {offset,limit} = req.query;

  offset = parseInt(offset) || 0;
  limit = parseInt(limit) || 10;
  });
  
  // Post Login of Users
  route.post('/authentication/login', usersController.loginUser);

  // Get list of users
  route.get('/', usersController.getUsers);

  // Create a new user
  route.post('/', usersController.createUser);

  // Get user detail
  route.get('/:id', usersController.getUser);

  // Update user
  route.put('/:id', usersController.updateUser);

  // Change password
  route.put('/:id/change-password', usersController.changePassword);

  // Delete user
  route.delete('/:id', usersController.deleteUser);
};

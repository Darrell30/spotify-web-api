const express = require('express');
const route = express.Router();

const userController = require('./user-controller');

module.exports = (app) => {
  app.use('/users', route);

  // Get all users
  route.get('/', userController.getAllUsers);

  // Get user by ID
  route.get('/:id', userController.getUserById);

  // Create a new user
  route.post('/', userController.createUser);

  // Update a user
  route.put('/:id', userController.updateUser);

  // Delete a user
  route.delete('/:id', userController.deleteUser);
};
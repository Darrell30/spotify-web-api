const express = require('express');
const categoryController = require('./category-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/category', route);

  // Get all categories
  route.get('/', categoryController.getCategory);

  // Create new category
  route.post('/', categoryController.createCategory);

  // Update category
  route.put('/:id', categoryController.updateCategory); 
};

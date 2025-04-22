const express = require('express');
const categoryController = require('./category-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/category', route);
  
  route.get('/', categoryController.getCategory);

  route.post('/', categoryController.createCategory);

  route.put('/:id', categoryController.updateCategory); 
};

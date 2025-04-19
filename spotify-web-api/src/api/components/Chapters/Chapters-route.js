const express = require('express');
const chaptersController = require('./Chapters-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/Chapters', route);

  // Pagination middleware
  route.use((req, res, next) => {
    let { offset, limit } = req.query;
    req.offset = parseInt(offset) || 0;
    req.limit = parseInt(limit) || 10;
    next();
  });

  route.get('/', chaptersController.GetAllChapters);
  route.get('/:id', chaptersController.GetChapterById);
  route.post('/', chaptersController.createChapters);
  route.delete('/:id', chaptersController.deleteChapters);
};

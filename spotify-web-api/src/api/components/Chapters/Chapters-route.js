const express = require('express');
const chaptersController = require('./Chapters-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/chapters', route);

  // Middleware untuk parsing offset dan limit
  route.use((req, res, next) => {
    let { offset, limit } = req.query;

    req.offset = parseInt(offset) || 0;
    req.limit = parseInt(limit) || 10;

    next();
  });

  // Get all chapters (with pagination)
  route.get('/', chaptersController.GetAllChapters);

  // Get a chapter by ID
  route.get('/:id', chaptersController.GetChapterById);
};

/*const express = require('express');
const chaptersController = require('./Chapters-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/chapters', route);

  // Middleware untuk parsing offset dan limit
  route.use((req, res, next) => {
    let { offset, limit } = req.query;

    req.offset = parseInt(offset) || 0;
    req.limit = parseInt(limit) || 10;

    next();
  });

  // Get all chapters (with pagination)
  route.get('/', chaptersController.GetAllChapters);

  // Get a chapter by ID
  route.get('/:id', chaptersController.GetChapterById);

  // Create a new chapter
  route.post('/', chaptersController.CreateChapter);

  // Delete a chapter by ID
  route.delete('/:id', chaptersController.DeleteChapter);
};*/

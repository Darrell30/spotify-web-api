const chaptersRepository = require('./Chapters-repository');

async function getAllChapters(offset = 0, limit = 10) {
  return chaptersRepository.getAllChapters(offset, limit);
}

async function getChapterById(id) {
  return chaptersRepository.getChapterById(id);
}

module.exports = {
  getAllChapters,
  getChapterById,
};

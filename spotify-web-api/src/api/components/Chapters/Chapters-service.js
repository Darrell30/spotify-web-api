const chaptersRepository = require('./Chapters-repository');

async function getAllChapters(offset = 0, limit = 10) {
  return chaptersRepository.getAllChapters(offset, limit);
}

async function getChapterById(id) {
  return chaptersRepository.getChapterById(id);
}

const createChapters = async (data) => {
  return await chaptersRepository.createChapters(data);
};

const deleteChaptersById = async (id) => {
  return await chaptersRepository.deleteChaptersById(id);
};

module.exports = {
  getAllChapters,
  getChapterById,
  createChapters,
  deleteChaptersById,
};

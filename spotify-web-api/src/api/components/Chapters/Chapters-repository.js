const { Chapters } = require('../../../models');

async function getAllChapters() {
  return Chapters.find({});
}

async function getChapterById(id) {
  return Chapters.findById(id);
}

module.exports = {
  getAllChapters,
  getChapterById,
};

/*const { Chapters } = require('../../../models');

async function getAllChapters() {
  return Chapters.find({});
}

async function getChapterById(id) {
  return Chapters.findById(id);
}

async function createChapter({ title, description, language, audio_preview_url }) {
  return Chapters.create({
    title,
    description,
    language,
    audio_preview_url,
  });
}

async function deleteChapter(id) {
  const result = await Chapters.findByIdAndDelete(id);
  return result;
}

module.exports = {
  getAllChapters,
  getChapterById,
  createChapter,
  deleteChapter,
};*/

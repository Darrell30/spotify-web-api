const db = require('../../../models'); // Pastikan ini mengarah ke index.js di folder models
const ChaptersModel = db.Chapters;     // Harus cocok dengan nama model yang diekspor

async function getAllChapters(offset = 0, limit = 10) {
  return ChaptersModel.find().skip(offset).limit(limit);
}

async function getChapterById(id) {
  return ChaptersModel.findOne({ chapter_id: id });
}

module.exports = {
  getAllChapters,
  getChapterById,
};

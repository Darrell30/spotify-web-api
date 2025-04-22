const db = require('../../../models'); 
const ChaptersModel = db.Chapters;

async function getAllChapters(offset = 0, limit = 10) {
  return ChaptersModel.find().skip(offset).limit(limit);
}

async function getChapterById(id) {
  return ChaptersModel.findOne({ chapter_id: id });
}

const createChapters = async (data) => {
  const newChapters = new ChaptersModel(data);
  return await newChapters.save();
};


const deleteChaptersById = async (id) => {
  return await ChaptersModel.findByIdAndDelete(id);
};

module.exports = {
  getAllChapters,
  getChapterById,
  createChapters,
  deleteChaptersById,
};
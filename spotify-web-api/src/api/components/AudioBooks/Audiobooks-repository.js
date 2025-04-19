const AudiobooksModel = require('../../../models/Audiobooks-schema');

async function GetAllAudiobooks() {
  const audiobooks = await AudiobooksModel.find();
  return audiobooks;
}

async function getAudiobooksById(id) {
  return AudiobooksModel.findOne({ id });
}

const createAudiobooks = async (data) => {
  const newAudiobook = new AudiobooksModel(data);
  return await newAudiobook.save();
};


const deleteAudiobooksById = async (id) => {
  return await AudiobooksModel.findByIdAndDelete(id);
};


module.exports = {
  GetAllAudiobooks,
  getAudiobooksById,
  createAudiobooks,
  deleteAudiobooksById,
};

const AudiobooksRepository = require('./Audiobooks-repository');

async function GetAllAudiobooks(/*offset = 0, limit = 10*/) {
  return AudiobooksRepository.GetAllAudiobooks(/*offset, limit*/);
}

async function getAudiobooksById(id) {
  return AudiobooksRepository.getAudiobooksById(id);
}

const createAudiobooks = async (id) => {
  return await AudiobooksRepository.createAudiobooks(id);
};

const deleteAudiobooksById = async (id) => {
  return await AudiobooksRepository.deleteAudiobooksById(id);
};

module.exports = {
  GetAllAudiobooks,
  getAudiobooksById,
  createAudiobooks,
  deleteAudiobooksById,
};
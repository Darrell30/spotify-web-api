const audiobooksRepository = require('./Audiobooks-repository');

async function getAudiobookById(id) {
  return await audiobooksRepository.getAudiobookById(id);
}

async function getUserSavedAudiobooks() {
  return await audiobooksRepository.getUserSavedAudiobooks();
}

module.exports = {
  getAudiobookById,
  getUserSavedAudiobooks,
};

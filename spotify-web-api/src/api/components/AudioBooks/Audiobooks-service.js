/*const Audiobooks = require('./Audiobooks-repository');

// ✅ Simpan audiobook_id dan market
async function saveAudiobookMarket({ audiobook_id, market }) {
  const existing = await Audiobooks.findOne({ audiobook_id, market });

  if (existing) {
    return existing; // sudah ada, tidak usah insert ulang
  }

  const newAudiobook = new Audiobooks({ audiobook_id, market });
  return await newAudiobook.save();
}

// ✅ Ambil semua audiobook dari MongoDB
async function getUserSavedAudiobooks() {
  return await Audiobooks.find({});
}

// ✅ Cari berdasarkan ID MongoDB
async function getAudiobookById(id) {
  return await Audiobooks.findById(id);
}

module.exports = {
  saveAudiobookMarket,
  getUserSavedAudiobooks,
  getAudiobookById,
};*/

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

/*const audiobooksService = require('./Audiobooks-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

// Simpan audiobook_id dan market ke MongoDB
const saveAudiobookMarket = async (req, res) => {
  const { audiobook_id, market } = req.body;

  if (!audiobook_id || !market) {
    return res.status(400).json({ message: 'Missing audiobook_id or market' });
  }

  try {
    const result = await audiobooksService.saveAudiobookMarket({ audiobook_id, market });
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to save market', error: err.message });
  }
};

// Ambil semua audiobook dari MongoDB
const getAudiobooks = async (req, res) => {
  try {
    const audiobooks = await audiobooksService.getUserSavedAudiobooks();
    return res.status(200).json(audiobooks);
  } catch (err) {
    return res.status(500).json({ message: 'Failed to get audiobooks', error: err.message });
  }
};

module.exports = {
  saveAudiobookMarket,
  getAudiobooks,
};*/

const AudiobooksService = require('./Audiobooks-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function GetAllAudiobooks(request, response, next) {
  try {
    const Audiobooks = await AudiobooksService.GetAllAudiobooks(
      // request.offset,
      // request.limit
    );
    return response.status(200).json(Audiobooks);
  } catch (error) {
    return next(error);
  }
}

async function GetAudiobooksById(request, response, next) {
  try {
    const { id } = request.params;

    const Audiobooks = await AudiobooksService.getAudiobooksById(id);

    if (!Audiobooks) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Audiobooks not found');
    }

    return response.status(200).json(Audiobooks);
  } catch (error) {
    return next(error);
  }
}

async function createAudiobooks(req, res, next) {
  try {
    const newAudiobook = await AudiobooksService.createAudiobooks(req.body);
    res.status(201).json(newAudiobook);
  } catch (err) {
    next(err);
  }
}

async function deleteAudiobooks(req, res, next) {
  try {
    const result = await AudiobooksService.deleteAudiobooksById(req.params.id);
    if (!result) return res.status(404).json({ message: "Audiobooks not found" });
    res.status(200).json({ message: "Audiobooks deleted successfully" });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  GetAllAudiobooks,
  GetAudiobooksById,
  createAudiobooks,
  deleteAudiobooks,
};

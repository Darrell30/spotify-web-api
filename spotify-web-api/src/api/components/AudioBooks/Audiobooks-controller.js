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
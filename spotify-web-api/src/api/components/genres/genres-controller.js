const genresService = require('./genres-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getAvailableGenres(req, res, next) { 
  try {
    const albums = await genresService.getAvailableGenres();
    res.json(albums);
  }
  catch(err) {
    next(err);
  }
}

async function getGenreById(request, response, next) {
  try {
    const { id } = request.params;

    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Genre ID is required');
    }

    const album = await genresService.getGenreById(id);

    return response.status(200).json(album);
  } catch (error) {
    return next(error);
  }
}


module.exports = {
  getAvailableGenres,
  getGenreById,
};
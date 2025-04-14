const albumsService = require('./albums-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getAlbumById(request, response, next) {
  try {
    const { id } = request.params;

    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Album ID is required');
    }

    const album = await albumsService.getAlbumById(id);

    return response.status(200).json(album);
  } catch (error) {
    return next(error);
  }
}

async function getMultipleAlbums(request, response, next) {
  try {
    const { ids } = request.query;

    if (!ids) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Album IDs are required (comma-separated)');
    }

    const albums = await albumsService.getMultipleAlbums(ids.split(','));

    return response.status(200).json(albums);
  } catch (error) {
    return next(error);
  }
}

async function getAlbumTracks(request, response, next) {
  try {
    const { id } = request.params;

    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Album ID is required');
    }

    const tracks = await albumsService.getAlbumTracks(id);

    return response.status(200).json(tracks);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAlbumById,
  getMultipleAlbums,
  getAlbumTracks,
};

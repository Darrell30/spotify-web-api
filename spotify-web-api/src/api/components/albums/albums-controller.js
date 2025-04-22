const albumsService = require('./albums-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getAllAlbums(req, res, next) { 
  try {
    const albums = await albumsService.getAllAlbums();
    res.json(albums);
  }
  catch(err) {
    next(err);
  }
}

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
  getAllAlbums,
  getAlbumById,
  getAlbumTracks,
};
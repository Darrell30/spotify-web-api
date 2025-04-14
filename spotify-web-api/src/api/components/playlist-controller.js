const playlistService = require('./playlist-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getMyPlaylists(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw errorResponder(errorTypes.AUTHORIZATION_ERROR, 'Authorization token required');
    }

    const playlists = await playlistService.getUserPlaylists(token);
    return res.status(200).json(playlists);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getMyPlaylists,
};

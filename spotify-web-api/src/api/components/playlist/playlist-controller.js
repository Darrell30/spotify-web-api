const playlistService = require('./playlist-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getAllPlaylists(req, res, next) {
  try {
    const playlists = await playlistService.getAllPlaylists();
    res.json(playlists);
  } catch (err) {
    next(err);
  }
}

async function getPlaylistById(req, res, next) {
  try {
    const { playlist_id } = req.params;

    if (!playlist_id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Playlist ID is required');
    }

    const playlist = await playlistService.getPlaylistById(playlist_id);
    return res.status(200).json(playlist);
  } catch (error) {
    return next(error);
  }
}

async function createPlaylist(req, res, next) {
  try {
    const playlistData = req.body;

    if (!playlistData) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Playlist data is required');
    }

    const newPlaylist = await playlistService.createPlaylist(playlistData);
    return res.status(201).json(newPlaylist);
  } catch (error) {
    return next(error);
  }
}

async function updatePlaylist(req, res, next) {
  try {
    const { playlist_id } = req.params;
    const playlistData = req.body;

    if (!playlist_id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Playlist ID is required');
    }

    if (!playlistData) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Playlist data is required');
    }

    const updatedPlaylist = await playlistService.updatePlaylist(playlist_id, playlistData);
    return res.status(200).json(updatedPlaylist);
  } catch (error) {
    return next(error);
  }
}

async function deletePlaylist(req, res, next) {
  try {
    const { playlist_id } = req.params;

    if (!playlist_id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Playlist ID is required');
    }

    await playlistService.deletePlaylist(playlist_id);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
}

async function getPlaylistTracks(req, res, next) {
  try {
    const { playlist_id } = req.params;

    if (!playlist_id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Playlist ID is required');
    }

    const tracks = await playlistService.getPlaylistTracks(playlist_id);
    return res.status(200).json(tracks);
  } catch (error) {
    return next(error);
  }
}

async function addTrackToPlaylist(req, res, next) {
  try {
    const { playlist_id } = req.params;
    const { uris } = req.body;

    if (!playlist_id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Playlist ID is required');
    }

    const result = await playlistService.addTrackToPlaylist(playlist_id, uris);
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
}

async function deleteTrackFromPlaylist(req, res, next) {
  try {
    const { playlist_id } = req.params;
    const { tracks } = req.body;

    if (!playlist_id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Playlist ID is required');
    }

    const result = await playlistService.deleteTrackFromPlaylist(playlist_id, tracks);
    return res.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAllPlaylists,
  getPlaylistById,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
  getPlaylistTracks,
  addTrackToPlaylist,
  deleteTrackFromPlaylist
};

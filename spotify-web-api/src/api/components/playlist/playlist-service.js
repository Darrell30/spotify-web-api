const Playlist = require('../../../models/playlist-schema');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getAllPlaylists() {
  try {
    return await Playlist.find();
  } catch (error) {
    throw errorResponder(errorTypes.DATABASE_ERROR, 'Failed to fetch playlists', error);
  }
}

async function getPlaylistById(playlist_id) {
  try {
    const playlist = await Playlist.findById(playlist_id);
    
    if (!playlist) {
      throw errorResponder(errorTypes.NOT_FOUND, `Playlist with ID ${playlist_id} not found`);
    }
    
    return playlist;
  } catch (error) {
    if (error.name === 'CastError') {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Invalid playlist ID format');
    }
    throw error.type ? error : errorResponder(errorTypes.DATABASE_ERROR, 'Failed to fetch playlist', error);
  }
}

async function createPlaylist(playlistData) {
  try {
    return await Playlist.create(playlistData);
  } catch (error) {
    throw errorResponder(errorTypes.DATABASE_ERROR, 'Failed to create playlist', error);
  }
}

async function updatePlaylist(playlist_id, playlistData) {
  try {
    const playlist = await Playlist.findByIdAndUpdate(playlist_id, playlistData, { new: true, runValidators: true });
    
    if (!playlist) {
      throw errorResponder(errorTypes.NOT_FOUND, `Playlist with ID ${playlist_id} not found`);
    }
    
    return playlist;
  } catch (error) {
    if (error.name === 'CastError') {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Invalid playlist ID format');
    }
    throw error.type ? error : errorResponder(errorTypes.DATABASE_ERROR, 'Failed to update playlist', error);
  }
}

async function deletePlaylist(playlist_id) {
  try {
    const playlist = await Playlist.findByIdAndDelete(playlist_id);
    
    if (!playlist) {
      throw errorResponder(errorTypes.NOT_FOUND, `Playlist with ID ${playlist_id} not found`);
    }
    
    return;
  } catch (error) {
    if (error.name === 'CastError') {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Invalid playlist ID format');
    }
    throw error.type ? error : errorResponder(errorTypes.DATABASE_ERROR, 'Failed to delete playlist', error);
  }
}

async function getPlaylistTracks(playlist_id) {
  try {
    const playlist = await Playlist.findOne({ playlist_id });
    
    if (!playlist) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Playlist not found');
    }
    
    return { tracks: playlist.tracks };
  } catch (error) {
    throw errorResponder(errorTypes.DATABASE_ERROR, 'Failed to fetch playlist tracks', error);
  }
}

async function addTrackToPlaylist(playlist_id, uris) {
  try {
    const playlist = await Playlist.findOne({ playlist_id });
    
    if (!playlist) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Playlist not found');
    }
    
    playlist.tracks.push(...uris);
    await playlist.save();
    
    return { message: 'Tracks added successfully', tracks: playlist.tracks };
  } catch (error) {
    throw errorResponder(errorTypes.DATABASE_ERROR, 'Failed to add tracks to playlist', error);
  }
}

async function deleteTrackFromPlaylist(playlist_id, tracksToRemove) {
  try {
    const playlist = await Playlist.findOne({ playlist_id });
    
    if (!playlist) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Playlist not found');
    }
    
    const urisToRemove = tracksToRemove.map(track => track.uri);
    playlist.tracks = playlist.tracks.filter(uri => !urisToRemove.includes(uri));
    await playlist.save();
    
    return { message: 'Tracks deleted successfully', tracks: playlist.tracks };
  } catch (error) {
    throw errorResponder(errorTypes.DATABASE_ERROR, 'Failed to delete tracks from playlist', error);
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

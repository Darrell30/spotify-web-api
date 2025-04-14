const Albums = require('../../../models/albums-schema');

// Get an album by its ID
async function getAlbumById(id) {
  return Albums.findById(id);
}

// Get multiple albums by their IDs
async function getMultipleAlbums(ids) {
  return Albums.find({ _id: { $in: ids } });
}

// Get tracks for an album (assuming the `tracks` field is stored in the album schema)
async function getAlbumTracks(id) {
  const album = await Albums.findById(id);
  if (album && album.tracks) {
    return album.tracks;
  } else {
    throw new Error('Tracks not found for this album');
  }
}

module.exports = {
  getAlbumById,
  getMultipleAlbums,
  getAlbumTracks,
};

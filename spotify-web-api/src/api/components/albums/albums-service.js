const albumsRepository = require('./albums-repository');

async function getAlbumById(id) {
  return albumsRepository.getAlbumById(id);
}

async function getMultipleAlbums(idsArray) {
  return albumsRepository.getMultipleAlbums(idsArray);
}

async function getAlbumTracks(id) {
  return albumsRepository.getAlbumTracks(id);
}

module.exports = {
  getAlbumById,
  getMultipleAlbums,
  getAlbumTracks,
};

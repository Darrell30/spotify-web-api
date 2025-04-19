const albumsRepository = require('./albums-repository');

async function getAllAlbums() {
  return await albumsRepository.getAllAlbums();
}

async function getAlbumById(id) {
  return albumsRepository.getAlbumById(id);
}

async function getAlbumTracks(id) {
  return albumsRepository.getAlbumTracks(id);
}

module.exports = {
  getAllAlbums,
  getAlbumById,
  getAlbumTracks,
};

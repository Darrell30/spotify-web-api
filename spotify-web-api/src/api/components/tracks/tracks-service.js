const tracksRepository = require('./tracks-repository');

async function getAllTracks() {
  return tracksRepository.getAllTracks();
}

async function searchTracks({ q, market, limit, offset }) {
  return tracksRepository.searchTracks({ q, market, limit, offset });
}

async function getTrack(id) {
  return tracksRepository.getTrack(id);
}

async function getSeveralTracks({ ids, market }) {
  return tracksRepository.getSeveralTracks({ ids, market });
}

module.exports = {
  getAllTracks,
  searchTracks,
  getTrack,
  getSeveralTracks
};
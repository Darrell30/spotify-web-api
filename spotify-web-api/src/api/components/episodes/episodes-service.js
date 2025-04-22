const episodesRepository = require('./episodes-repository');

async function getEpisode(id) {
  return episodesRepository.getEpisode(id);  // Pastikan ini sesuai
}

async function getSeveralEpisodes({ ids }) {
  const idArray = ids.split(',').map((id) => id.trim());
  return episodesRepository.getEpisodesByIds(idArray);
}

async function getAllEpisodes() {
  return episodesRepository.getAllEpisodes();
}

module.exports = {
  getSeveralEpisodes,
  getAllEpisodes,
  getEpisode,
};

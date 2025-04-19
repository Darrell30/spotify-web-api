const episodesRepository = require('./episodes-repository');

async function getEpisode() {
  return episodesRepository.getEpisode();
}

module.exports = {
  getEpisode
};

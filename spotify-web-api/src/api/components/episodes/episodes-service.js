const episodesRepository = require('./episodes-repository');

async function getEpisodes() {
  return episodesRepository.getEpisodes();
}

module.exports = {
  getEpisodes
};

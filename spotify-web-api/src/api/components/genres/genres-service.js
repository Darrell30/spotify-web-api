const genresRepository = require('./genres-repository');

async function getAvailableGenres() {
  return await genresRepository.getAvailableGenres();
}

async function getGenreById(id) {
  return await genresRepository.getGenreById(id);
}

module.exports = {
  getAvailableGenres,
  getGenreById,
};
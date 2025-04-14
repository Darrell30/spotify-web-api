const { Episodes } = require('../../../models');

// Get all episodes from the database
async function getEpisodes() {
  return Episodes.find({});
}

module.exports = {
  getEpisodes
};

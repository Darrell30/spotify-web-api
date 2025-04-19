const { Episodes } = require('../../../models');

// Get all episodes from the database
async function getEpisode() {
  return Episodes.find({});
}

module.exports = {
  getEpisode
};

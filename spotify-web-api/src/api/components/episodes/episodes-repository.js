const { Episodes } = require('../../../models/');

async function getEpisode(id) {
  return Episodes.findById(id);
}

async function getEpisodesByIds(ids) {
  return Episodes.find({ _id: { $in: ids } });
}

async function getAllEpisodes() {
  return Episodes.find({});
}

module.exports = {
  getEpisode,
  getEpisodesByIds,
  getAllEpisodes,
};

const Tracks = require('../../../models/tracks-schema');

async function getAllTracks() {
  return Tracks.find();
}

async function searchTracks({ q, market, limit, offset }) {
  const query = { song_name: new RegExp(q, 'i') };
  if (market) query.available_markets = market;

  return Tracks.find(query).skip(offset).limit(limit);
}

async function getTrack(id) {
  return Tracks.findOne({ song_id: id });
}

async function getSeveralTracks({ ids, market }) {
  const query = { song_id: { $in: ids.split(',') } };
  if (market) query.available_markets = market;

  return Tracks.find(query);
}

module.exports = {
  getAllTracks,
  searchTracks,
  getTrack,
  getSeveralTracks,
};
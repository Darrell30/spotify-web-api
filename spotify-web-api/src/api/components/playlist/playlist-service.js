const playlistRepository = require('./playlist-repository');

async function getUserPlaylists(token) {
  return playlistRepository.fetchUserPlaylists(token);
}

module.exports = {
  getUserPlaylists,
};

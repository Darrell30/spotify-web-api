const express = require('express');
const route = express.Router();

const playlistController = require('./playlist-controller');

module.exports = (app) => {
  // Use /api/playlists as the base path
  app.use('/playlists', route);

  // Get all playlists
  route.get('/', playlistController.getAllPlaylists);

  // Get playlist by ID
  route.get('/:playlist_id', playlistController.getPlaylistById);

  // Create a new playlist
  route.post('/', playlistController.createPlaylist);

  // Update playlist
  route.put('/:playlist_id', playlistController.updatePlaylist)

  // Get tracks from a specific playlist
  route.get('/:playlist_id/tracks', playlistController.getPlaylistTracks);

  // Add track to playlist
  route.post('/:playlist_id/tracks', playlistController.addTrackToPlaylist);

  // Delete track from playlist
  route.delete('/:playlist_id/tracks', playlistController.deleteTrackFromPlaylist);
};

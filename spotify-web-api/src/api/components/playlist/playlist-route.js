const express = require('express');
const router = express.Router();
const {
  getAllPlaylists,
  getPlaylistTracks,
  addTrackToPlaylist,
  deleteTrackFromPlaylist,
  createPlaylist,
  getPlaylistById,
} = require('./playlist-controller');

router.get('/playlist', getAllPlaylists);

router.get('/:playlist_id', getPlaylistById);

router.post('/playlist', createPlaylist);

router.get('/playlist/:playlist_id/tracks', getPlaylistTracks);

router.post('/playlist/:playlist_id/tracks', addTrackToPlaylist);

router.delete('/playlist/:playlist_id/tracks', deleteTrackFromPlaylist);

module.exports = router;

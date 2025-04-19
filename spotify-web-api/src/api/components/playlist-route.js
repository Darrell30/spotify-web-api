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

// GET semua playlist
router.get('/playlist', getAllPlaylists);

// GET playlist tertentu
router.get('/:playlist_id', getPlaylistById);
// POST playlist baru
router.post('/playlist', createPlaylist);

// GET tracks dalam satu playlist
router.get('/playlist/:playlist_id/tracks', getPlaylistTracks);

// POST track ke playlist
router.post('/playlist/:playlist_id/tracks', addTrackToPlaylist);

// DELETE track dari playlist
router.delete('/playlist/:playlist_id/tracks', deleteTrackFromPlaylist);

module.exports = router;

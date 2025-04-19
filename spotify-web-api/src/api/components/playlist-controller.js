const Playlist = require('./playlist-schema');
const {
  getTracks,
  addTrack,
  deleteTrack
} = require('./playlist-service');

// GET playlist by playlist_id
const mongoose = require("mongoose");

exports.getPlaylistById = async (req, res) => {
  try {
    const { playlist_id } = req.params;

    // Validasi ObjectId
    if (!mongoose.Types.ObjectId.isValid(playlist_id)) {
      return res.status(400).json({ message: "Invalid playlist ID" });
    }

    const playlist = await Playlist.findById(playlist_id);

    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    res.status(200).json(playlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// GET semua playlist
exports.getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find();
    res.status(200).json(playlists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST playlist baru
exports.createPlaylist = async (req, res) => {
  const { display_name, playlist_id, playlist_name, tracks, user_id } = req.body;
  try {
    const newPlaylist = new Playlist({
      display_name,
      playlist_id,
      playlist_name,
      tracks: tracks || [],
      user_id
    });
    await newPlaylist.save();
    res.status(201).json(newPlaylist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET tracks dari satu playlist
exports.getPlaylistTracks = async (req, res) => {
  const { playlist_id } = req.params;
  try {
    const data = await getTracks(playlist_id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST track ke playlist
exports.addTrackToPlaylist = async (req, res) => {
  const { playlist_id } = req.params;
  const { uris } = req.body;
  try {
    const data = await addTrack(playlist_id, uris);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE track dari playlist
exports.deleteTrackFromPlaylist = async (req, res) => {
  const { playlist_id } = req.params;
  const { tracks } = req.body;
  try {
    const data = await deleteTrack(playlist_id, tracks);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

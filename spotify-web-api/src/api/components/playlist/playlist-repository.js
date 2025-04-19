const Playlist = require("../playlist-schema");

exports.getAll = async () => {
  return await Playlist.find();
};

exports.getByMongoId = async (id) => {
  return await Playlist.findById(id);
};

exports.getByPlaylistId = async (playlist_id) => {
  return await Playlist.findOne({ playlist_id });
};

exports.create = async (playlistData) => {
  const playlist = new Playlist(playlistData);
  return await playlist.save();
};

exports.save = async (playlist) => {
  return await playlist.save(); // Untuk simpan playlist yang sudah dimodifikasi
};

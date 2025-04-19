const Playlist = require('./playlist-schema');

exports.getTracks = async (playlist_id) => {
  const playlist = await Playlist.findOne({ playlist_id });
  if (!playlist) throw new Error('Playlist not found');
  return { tracks: playlist.tracks };
};

exports.addTrack = async (playlist_id, uris) => {
  let playlist = await Playlist.findOne({ playlist_id });
  if (!playlist) {
    playlist = new Playlist({ playlist_id, tracks: [] });
  }

  playlist.tracks.push(...uris);
  await playlist.save();
  return { message: 'Tracks added successfully', tracks: playlist.tracks };
};

exports.deleteTrack = async (playlist_id, tracksToRemove) => {
  const playlist = await Playlist.findOne({ playlist_id });
  if (!playlist) throw new Error('Playlist not found');

  const urisToRemove = tracksToRemove.map(track => track.uri);
  playlist.tracks = playlist.tracks.filter(uri => !urisToRemove.includes(uri));
  await playlist.save();

  return { message: 'Tracks deleted successfully', tracks: playlist.tracks };
};

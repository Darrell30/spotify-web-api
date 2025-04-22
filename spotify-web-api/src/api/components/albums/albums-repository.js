const AlbumModel = require('../../../models/albums-schema');
const mongoose = require('mongoose');

async function getAllAlbums() {
  const albums = await AlbumModel.find();
  return albums;
}

async function getAlbumById(id) {
  const query = mongoose.Types.ObjectId.isValid(id)
    ? { $or: [{ _id: id }, { album_id: id }] }
    : { album_id: id };

  const album = await AlbumModel.findOne(query).lean();

  if (!album) throw new Error('Album not found');
  return album;
}


async function getAlbumTracks(id) {
  const album = await AlbumModel.findOne({
    $or: [{ _id: id }, { album_id: id }],
  }).lean();

  if (!album) {
    throw new Error('Album not found');
  }

  if (!album.track_id || !album.track_name || album.track_id.length === 0) {
    throw new Error('Tracks not found for this album');
  }

  // Combine track_id and track_name into one array of objects
  const tracks = album.track_id.map((id, index) => ({
    id,
    name: album.track_name[index] || null,
  }));

  return tracks;
}


module.exports = {
  getAllAlbums,
  getAlbumById,
  getAlbumTracks,
};
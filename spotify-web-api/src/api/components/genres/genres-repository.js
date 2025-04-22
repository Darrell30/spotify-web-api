const genreModel = require('../../../models/genres-schema');
const mongoose = require('mongoose');

async function getAvailableGenres() {
  const genres = await genreModel.find();
  return genres;
}

async function getGenreById(id) {
  const query = mongoose.Types.ObjectId.isValid(id)
    ? { $or: [{ _id: id }, { genre_id: id }] }
    : { genre_id: id };

  const genre = await genreModel.findOne(query).lean();

  if (!genre) throw new Error('Genre not found');
  return genre;
}

module.exports = {
  getAvailableGenres,
  getGenreById,
};
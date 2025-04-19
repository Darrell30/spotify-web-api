const mongoose = require("mongoose");
const { Artist } = require('../../../models');

const getAllArtists = async () => {
  return await Artist.find();
};

const getArtistById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return null;
  return await Artist.findById(id ); 
};

const createArtist = async (data) => {
  const newArtist = new Artist(data);
  return await newArtist.save();
};

const deleteArtistById = async (id) => {
  return await Artist.findByIdAndDelete(id);
};

const updateArtist = async (id, data) => {
  const updated = await Artist.findByIdAndUpdate(id, data, { new: true });
  if (!updated) {
    const error = new Error('Artist not found');
    error.statusCode = 404;
    throw error;
  }
  return updated;
};

module.exports = {
  getAllArtists,
  getArtistById,
  createArtist,
  deleteArtistById,
  updateArtist,
};

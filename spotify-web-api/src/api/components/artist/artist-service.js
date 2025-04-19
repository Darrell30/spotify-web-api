const artistRepo = require("./artist-repository");

const getAllArtists = async () => {
  return await artistRepo.getAllArtists();
};

const getArtistById = async (id) => {
  return await artistRepo.getArtistById(id);
};

const createArtist = async (data) => {
  return await artistRepo.createArtist(data);
};

const deleteArtistById = async (id) => {
  return await artistRepo.deleteArtistById(id);
};

const updateArtist = async (id, data) => {
  return await artistRepo.updateArtist(id, data);
};

module.exports = {
  getAllArtists,
  getArtistById,
  createArtist,
  deleteArtistById,
  updateArtist,
};

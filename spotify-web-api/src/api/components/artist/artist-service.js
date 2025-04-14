const artistRepo = require("./artist-repository");

const getAllArtists = async () => {
  return await artistRepo.getAllArtists();
};

module.exports = {
  getAllArtists,
};

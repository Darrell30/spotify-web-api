const {Artist} = require('../../../models');

const getAllArtists = async () => {
  return await Artist.find();
};

module.exports = {
  getAllArtists,
};

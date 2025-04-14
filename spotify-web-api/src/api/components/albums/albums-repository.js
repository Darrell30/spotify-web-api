const Albums = require('../../../models/albums-schema');

async function getAlbums() {
  return Albums.find({});
}

/*
async function create(title) {
  return Albums.create({title});
}
*/

module.exports = {
  getAlbums,
};

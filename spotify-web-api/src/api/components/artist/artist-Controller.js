const artistService = require("./artist-service");
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getAllArtists(req, res, next) {
  try {
    const artists = await artistService.getAllArtists();
    res.json(artists);
  } catch (err) {
    next(err);
  }
}

async function getArtistById(req, res, next) {
  try {
    const artist = await artistService.getArtistById(req.params.id);
    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    return res.json({
      id: artist.artist_id,  
      name: artist.artist_name,  
      populate : artist.popularity
    });
  } catch (err) {
    next(err);
  }
}

async function createArtist(req, res, next) {
  try {
    const newArtist = await artistService.createArtist(req.body);
    res.status(201).json(newArtist);
  } catch (err) {
    next(err);
  }
}

async function deleteArtist(req, res, next) {
  try {
    const result = await artistService.deleteArtistById(req.params.id);
    if (!result) return res.status(404).json({ message: "Artist not found" });
    res.status(200).json({ message: "Artist deleted successfully" });
  } catch (err) {
    next(err);
  }
}

async function updateArtist(req, res, next) {
  try {
    const id = req.params.id;
    const updatedArtist = await artistService.updateArtist(id, req.body);
    res.status(200).json(updatedArtist);
  } catch (err) {
    next(err);
  }
}
module.exports = {
  getAllArtists,
  getArtistById,
  createArtist,
  deleteArtist,
  updateArtist,
  
};

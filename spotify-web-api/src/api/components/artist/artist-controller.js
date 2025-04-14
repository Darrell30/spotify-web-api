const artistService = require("./artist-service");

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
    if (!artist) return res.status(404).json({ message: "Artist not found" });
    res.json(artist);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllArtists,
  getArtistById,
};

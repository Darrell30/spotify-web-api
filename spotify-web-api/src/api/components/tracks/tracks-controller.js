const tracksService = require('./tracks-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getTrack(req, res, next) {
  try {
    const { id } = req.params;
    const { market } = req.query;

    const track = await tracksService.getTrack(id);

    if (!track || (market && !track.available_markets.includes(market))) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Track not found');
    }

    res.status(200).json({
      ...track.toObject(),
      available_markets: undefined,
      is_playable: track.is_playable,
    });
  } catch (error) {
    next(error);
  }
}

async function searchTracks(req, res, next) {
  try {
    const { q, market, limit, offset } = req.query;

    if (!q) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Missing required parameter: q');
    }

    const results = await tracksService.searchTracks({
      q,
      market,
      limit: Math.min(parseInt(limit) || 20, 50),
      offset: parseInt(offset) || 0,
    });

    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
}

async function getSeveralTracks(req, res, next) {
  try {
    const { ids, market } = req.query;

    let tracks;
    if (!ids) {
      tracks = await tracksService.getAllTracks();
    } else {
      tracks = await tracksService.getSeveralTracks({ ids, market });
    }

    res.status(200).json({ tracks });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getTrack,
  searchTracks,
  getSeveralTracks,
};
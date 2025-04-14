const episodesService = require('./episodes-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

// Search episodes by keyword
async function searchEpisodes(req, res, next) {
  try {
    const { q, market, limit = 20, offset = 0 } = req.query;
    if (!q) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Query "q" is required');
    }

    const result = await episodesService.searchEpisodes({ q, market, limit, offset });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

// Get a single episode by ID
async function getEpisode(req, res, next) {
  try {
    const { id } = req.params;
    const result = await episodesService.getEpisode(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

// Get several episodes by IDs
async function getSeveralEpisodes(req, res, next) {
  try {
    const { ids, market } = req.query;
    if (!ids) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Query "ids" is required');
    }

    const result = await episodesService.getSeveralEpisodes({ ids, market });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

// Get user’s saved episodes
async function getSavedEpisodes(req, res, next) {
  try {
    const { market, limit = 20, offset = 0 } = req.query;
    const result = await episodesService.getSavedEpisodes({ market, limit, offset });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  searchEpisodes,
  getEpisode,
  getSeveralEpisodes,
  getSavedEpisodes,
};

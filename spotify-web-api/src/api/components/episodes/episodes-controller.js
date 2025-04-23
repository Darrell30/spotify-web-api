const episodesService = require('./episodes-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

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

async function getEpisode(req, res, next) {
  try {
    const { id } = req.params;
    const result = await episodesService.getEpisode(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

async function getSeveralEpisodes(req, res, next) {
  try {
    const { ids, market } = req.query;

    let result;
    if (ids) {
      result = await episodesService.getSeveralEpisodes({ ids, market });
    } else {

      result = await episodesService.getAllEpisodes();
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

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

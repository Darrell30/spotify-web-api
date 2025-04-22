const chaptersService = require('./Chapters-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function GetAllChapters(request, response, next) {
  try {
    const chapters = await chaptersService.getAllChapters(
      request.offset,
      request.limit
    );
    return response.status(200).json(chapters);
  } catch (error) {
    return next(error);
  }
}

async function GetChapterById(request, response, next) {
  try {
    const { id } = request.params;

    const chapter = await chaptersService.getChapterById(id);

    if (!chapter) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Chapter not found');
    }

    return response.status(200).json(chapter);
  } catch (error) {
    return next(error);
  }
}

async function createChapters(req, res, next) {
  try {
    const newChapters = await chaptersService.createChapters(req.body);
    res.status(201).json(newChapters);
  } catch (err) {
    next(err);
  }
}

async function deleteChapters(req, res, next) {
  try {
    const result = await chaptersService.deleteChaptersById(req.params.id);
    if (!result) return res.status(404).json({ message: "Chapters not found" });
    res.status(200).json({ message: "Chapters deleted successfully" });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  GetAllChapters,
  GetChapterById,
  createChapters,
  deleteChapters,
};
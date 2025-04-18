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

module.exports = {
  GetAllChapters,
  GetChapterById,
};

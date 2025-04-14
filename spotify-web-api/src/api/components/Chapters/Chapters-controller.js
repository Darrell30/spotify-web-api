const chaptersService = require('./chapters-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function GetAllChapters(request, response, next) {
  try {
    const chapters = await chaptersService.getAllChapters();
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

/*const chaptersService = require('./chapters-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function GetAllChapters(request, response, next) {
  try {
    const chapters = await chaptersService.getAllChapters();
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

async function CreateChapter(request, response, next) {
  try {
    const { title, description, language, audio_preview_url } = request.body;

    if (!title) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Title is required');
    }

    const newChapter = await chaptersService.createChapter({
      title,
      description,
      language,
      audio_preview_url,
    });

    return response.status(201).json(newChapter);
  } catch (error) {
    return next(error);
  }
}

async function DeleteChapter(request, response, next) {
  try {
    const { id } = request.params;

    const deleted = await chaptersService.deleteChapter(id);

    if (!deleted) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Chapter not found or already deleted');
    }

    return response.status(200).json({ message: 'Chapter deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  GetAllChapters,
  GetChapterById,
  CreateChapter,
  DeleteChapter,
};*/

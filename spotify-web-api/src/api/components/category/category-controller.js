const categoryService = require('./category-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

const getCategory = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 20;
    const offset = parseInt(req.query.offset) || 0;

    const categories = await categoryService.getCategory(limit, offset);
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

async function createCategory(req, res, next) {
  try {
    const newCategory = await categoryService.createCategory(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    next(err);
  }
}

async function updateCategory(req, res, next) {
  try {
    const id = req.params.id;
    const updatedCategory = await categoryService.updateCategory(id, req.body);
    res.status(200).json(updatedCategory);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getCategory,
  createCategory,
  updateCategory,
};

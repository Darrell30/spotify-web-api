const categoryRepo = require('./category-repository');

const getCategory = async (limit, offset) => {
  return await categoryRepo.getCategory(limit, offset);
};

const createCategory = async (data) => {
  return await categoryRepo.createCategory(data);
};

const updateCategory = async (id, data) => {
  return await categoryRepo.updateCategory(id, data);
};

module.exports = {
  getCategory,
  createCategory,
  updateCategory,
};

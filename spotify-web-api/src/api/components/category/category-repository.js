const mongoose = require("mongoose");
const { Category } = require('../../../models');

const getCategory = async (limit = 20, offset = 0) => {
  return await Category.find().skip(offset).limit(limit);
};

const createCategory = async (data) => {
  const newCategory = new Category(data);
  return await newCategory.save();
};

const updateCategory = async (id, data) => {
  const updated = await Category.findByIdAndUpdate(id, data, { new: true });
  if (!updated) {
    const error = new Error('Category not found');
    error.statusCode = 404;
    throw error;
  }
  return updated;
};


module.exports = {
  getCategory,
  createCategory,
  updateCategory,
};

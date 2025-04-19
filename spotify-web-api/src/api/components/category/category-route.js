const express = require('express');
const router = express.Router();
const categoryController = require('./category-controller');

router.get('/', categoryController.getCategory);
router.post('/', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);

module.exports = router;

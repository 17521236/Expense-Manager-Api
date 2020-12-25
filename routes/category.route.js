const express = require('express')
const router = express.Router();
const categoryController = require('../controllers/category.controller')

router.get('/', categoryController.getAll);
router.post('/', categoryController.add);
router.delete('/', categoryController.deleteAll);

router.get('/:id', categoryController.getOne);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.delete);

module.exports = router;
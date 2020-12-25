const express = require('express')
const router = express.Router();
const transactionController = require('../controllers/transaction.controller')

router.get('/', transactionController.getAll);
router.post('/', transactionController.add);
router.delete('/', transactionController.deleteAll);

router.get('/:id', transactionController.getOne);
router.put('/:id', transactionController.update);
router.delete('/:id', transactionController.delete);

module.exports = router;
const express = require('express')
const router = express.Router();
const walletController = require('../controllers/wallet.controller')

router.get('/', walletController.getAll);
router.post('/', walletController.add);
router.delete('/', walletController.deleteAll);

router.get('/:id', walletController.getOne);
router.put('/:id', walletController.update);
router.delete('/:id', walletController.delete);

module.exports = router;
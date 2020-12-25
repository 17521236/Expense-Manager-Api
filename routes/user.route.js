const express = require('express')
const router = express.Router();
const userController = require('../controllers/user.controller')

router.get('/', userController.getAll);
router.post('/', userController.add);
router.delete('/', userController.deleteAll);
router.post('/forgotPassword', userController.forgotPassword);
router.post('/login', userController.login);

router.get('/:id', userController.getOne);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);


module.exports = router; 
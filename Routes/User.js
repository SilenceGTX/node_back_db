var express = require('express');
const UserController = require('../Controllers/UserController');

var router = express.Router();

router.get('/:group', UserController.getGroupUsers);
router.get('/', UserController.getAllUsers);
router.post('/', UserController.addUser);

module.exports = router;

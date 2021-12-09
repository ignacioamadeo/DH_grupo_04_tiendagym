const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/api/usersControllers')

router.get('/api/users', controllers.list);

router.get('/api/users/:id', controllers.user)


module.exports = router;
const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/api/productsControllers')

router.get('/api/products', controllers.listProducts);

router.get('/api/products/:id', controllers.oneProduct)



module.exports = router;
/* --- 
RUTEO MEDIANTE URL A APIS CONTROLADORES:
--- */

//Importo:
const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/api/productsControllers')

//Ruteo por URL a controladores:
router.get('/api/products', controllers.listProducts);
router.get('/api/products/:id', controllers.oneProduct)

//Exporto módulo:
module.exports = router;


//Flujo entero: index.js > app.js > raiz.routes > 👉🏼 ruta > controllers > models > SQL
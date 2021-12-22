/* --- 
RUTEO MEDIANTE URL A APIS CONTROLADORES:
--- */

//Importo:
const express = require('express');
const router = express.Router();
const controllers = require('../../controllers/api/usersControllers')

//Ruteo por URL a controladores:
router.get('/api/users', controllers.list);
router.get('/api/users/:id', controllers.user)

//Exporto módulo:
module.exports = router;


//Flujo entero: index.js > app.js > raiz.routes > 👉🏼 ruta > controllers > models > SQL
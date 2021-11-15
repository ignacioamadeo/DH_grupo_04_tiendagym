//HOME:

//1º Ejecuto paquetes:
const express = require("express");
const router = express.Router();

//2º Importo controlador:
const homeController = require("../controllers/homeController.js");

//3º Llamo a la propiedad de ese controlador:
router.get("/", homeController.home); //Renderiza EJS home.
router.get("/search", homeController.search); //Barra de buscador usando "query" y "for".
router.get("/construction", homeController.construction); //Renderiza EJS construcción.

//4º Exporto todo:
module.exports = router;

//En el archivo raiz.routes.js defino a través de que http voy a acceder a esta ruta.

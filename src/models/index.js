/* --- 
INDICE PARA DESACOPLE DE MODELOS 

MODELOS:
📌 1) PRODUCTOS
📌 2) USUARIOS
--- */

//📌 1) PRODUCTOS:
const Productos = require('./Productos');

//📌 2) USUARIOS:
const User = require('./Users')

module.exports= {Productos, User}

//Flujo entero: index.js > app.js > raiz.routes(desacople) > ruta >  controllers > 👉🏼 index(desacople) > models > SQL

const {body}= require('express-validator');

validaciones =[
body("prodNombre").notEmpty().withMessage('Debes completar el campo vacio').isLength({min:5}).withMessage('Deberá tener al menos 5 caracteres'),
body("prodDescrip").isLength({min:20}).withMessage('Deberá tener al menos 20 caracteres'),
]

module.exports = validaciones;
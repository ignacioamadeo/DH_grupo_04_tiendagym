const {body}=require('express-validator');

 const validaciones=[
body("firstName").notEmpty().withMessage('Ingresar un nombre').isLength({min:2}).withMessage('El nombre debe tener mas de dos caracteres'),
body("lastName").notEmpty().withMessage('Ingresar un apeliido').isLength({min:2}).withMessage('El apellido debe tener mas de dos caracteres'),
body("email").notEmpty().withMessage('Debes completar el campo').isEmail().withMessage('Debes escribir un email valido'),
body("username").notEmpty().withMessage('Debes completar el campo'),
body("password").notEmpty().withMessage('Debes completar el campo password').isLength({min:8}).withMessage('El password debe tener mas de ocho caracteres'),
]


module.exports= validaciones;
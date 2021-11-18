const {body}=require('express-validator');

 const validaciones=[
body("firstName").notEmpty().withMessage('Debes completar el campo'),
body("lastName").notEmpty().withMessage('Debes completar el campo'),
body("email").notEmpty().withMessage('Debes completar el campo').bail()
.isEmail().withMessage('Debes escribir un email valido'),
body("username").notEmpty().withMessage('Debes completar el campo'),
body("password").notEmpty().withMessage('Debes completar el campo')
]


module.exports= validaciones;
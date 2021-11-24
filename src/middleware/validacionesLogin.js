const {body}=require('express-validator');

validaciones = [
body('email').notEmpty().withMessage('Debes colocar un email').isEmail().withMessage('Debe ser un email válido'),
body('password').notEmpty().withMessage('Debes colocar un password')
]

module.exports = validaciones;
const {body}=require('express-validator');

validaciones = [
body('email').notEmpty().withMessage('Debes colocar un email').isEmail().withMessage('Debe ser un email válido').exists().withMessage('Este mail no se encuntra registrado'),
body('password').notEmpty().withMessage('Debes colocar un password').exists().withMessage('la contraseña no existe')
]

module.exports = validaciones;
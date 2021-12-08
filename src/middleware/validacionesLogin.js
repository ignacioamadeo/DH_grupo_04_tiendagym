const {body}=require('express-validator');
const User = require ('../models/Users')

validaciones = [
body('email').notEmpty().withMessage('Debes colocar un email')
.isEmail().withMessage('Debe ser un email válido').custom( async (email)=>{
  const user = await User.findByField(email)
  if(!user){
      throw new Error('El email no se encuentra registrado')
  }
}),
body('password').notEmpty().withMessage('Debes colocar un password')
]

module.exports = validaciones;
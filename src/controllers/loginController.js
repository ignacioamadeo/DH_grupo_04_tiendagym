//LOGIN:
const User=require('../models/User');
const bcrypt= require('bcryptjs');

//Renderizo el ejs correspondiente:

let loginController = {

    login:(req,res)=>{
        res.render('users/login') 
    },
    accept:(req,res)=>{
        let userToLogin= User.findByField('email', req.body.email);
        if(userToLogin){
            let isOKThePass= bcrypt.compareSync(req.body.password, userToLogin.password )
             if( isOKThePass ){
                 delete userToLogin.password;
                 req.session.userLogged = userToLogin;
                 res.redirect('/')
             }
             return res.render('users/login', {
                 errors: {
                     email:{
                         msg: 'Las credendicales son inválidas'
                     }
                 }
             })
        }
        return res.render('users/login', {
            errors: {
                email:{
                    msg: 'No se encuentra este mail en nuestra base de datos'
                }
            }
        })
}
}
/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:

module.exports=loginController;
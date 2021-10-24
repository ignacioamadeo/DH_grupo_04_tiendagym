//LOGIN:
const User=require('../models/User');
const bcrypt= require('bcryptjs');

//Renderizo el ejs correspondiente:

let loginController = {

    login:(req,res)=>{
        res.render('users/login') 
    },
    accept:(req,res)=>{
        let userToLogin= User.findByField( 'email', req.body.email);
        if(userToLogin){
            let isOKThePass= bcrypt.compareSync(req.body.password, userToLogin.password )
             if( isOKThePass ){
                 delete userToLogin.password;
                 req.session.userLogged = userToLogin;
                 res.redirect('/')
                 if (req.body.recordame != undefined){
                     res.cookie('recordame',
                     userToLogin.email, {maxAge: 60000})
                 }
             }else{
              res.render('users/login', {
                 errors: {
                     email:{
                         msg: 'Las credendicales son inválidas'
                     }
                 }
             });
            }
        } else {
         res.render('users/login', {
            errors: {
                email:{
                    msg: 'No se encuentra este mail en nuestra base de datos'
                }
            }
        });
    }
},

profile:(req,res)=>{
    res.render('users/profile',{ user: req.session.userLogged});
},

logout:(req,res)=>{
  req.session.destroy();
  res.redirect('/');  
}
}
/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:

module.exports=loginController;
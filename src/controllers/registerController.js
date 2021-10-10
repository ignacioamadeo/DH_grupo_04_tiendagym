//REGISTRO DE NUEVO USUARIO:
const User=require('../models/User')
const {validationResult}=require('express-validator')

//Renderizo el ejs correspondiente:

let registerController = {

register:(req,res)=>{
    res.render('users/register'); 
},
accepted:(req,res,next)=>{
    let errors=validationResult(req);  

    let userToCreate = {
        ...req.body,
        image: req.file.filename
    }

    if(errors.isEmpty()){
     let userCreate =User.create(userToCreate)   
    res.redirect('/login')

    }
    else{
        res.render('users/register',
         {errors:errors.mapped(),
            old: req.body
        })

}
}

}

/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:

module.exports=registerController;
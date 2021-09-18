//REGISTRO DE NUEVO USUARIO:

//Renderizo el ejs correspondiente:

let registerController = {

register:(req,res)=>{
    res.render('users/register'); 
}


}

/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:

module.exports=registerController;
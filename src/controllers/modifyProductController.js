//MODIFICAR UN PRODUCTO EXISTENTE:

//Renderizo el ejs correspondiente:

let productModifyController = {

    productModify: (req,res)=>{
        res.render('products/modifyProduct')
    }

    }
    
/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:

module.exports=productModifyController;
//REGISTRO DE NUEVO PRODUCTO:

//Renderizo el ejs correspondiente:

let productNewController = {

    productNew: (req,res)=>{
        res.render('products/newProduct') //al crear carpetas en views y agregarle archivos, la ruta en el controlador debera ser nombrada con el nombre de la carpeta a la que pertenece
    }
    
    }
    
/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:
module.exports = productNewController;
//CARRITO:

//Renderizo el ejs correspondiente:

let productCartController = {

productCart: (req,res)=>{
    res.render('products/productCart') 
}

}

/*Recordar que al crear carpetas en views y agregarle archivos, 
la ruta en el controlador debera ser nombrada con el nombre 
de la carpeta a la que pertenece*/

//Exporto todo con este nombre:

module.exports=productCartController;
const db=require('../modules/procuctsIndex.json');

let productDetailController = {

productDetail: (req,res)=>{
    let product = db.find(item => item.id == req.params.idProductDetail)
    res.render('products/productDetail', {product:product}); //al crear carpetas en views y agregarle archivos, la ruta en el controlador debera ser nombrada con el nombre de la carpeta a la que pertenece


}





}


module.exports=productDetailController;
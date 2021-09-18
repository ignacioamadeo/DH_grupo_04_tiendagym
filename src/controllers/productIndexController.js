
//1º Llamo a la base de datos (en este caso objeto json) y la asigno a la variable db:
const db=require('../modules/procuctsIndex.json');

/*2º MAndo al archivo index.ejs la base de datos a través de la variable products:
*/
let productIndexController = {
    productIndex: (req, res, next)=>{
        res.render('products/productIndex', {productInfo: db}) 
    }

}

module.exports=productIndexController;
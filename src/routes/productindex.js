const express=require('express');
const router=express.Router();
const productIndexController=require('../controllers/productIndexController.js');
const productDetailController=require('../controllers/productDetailCotroller.js');


router.get('/', productIndexController.productIndex);

router.get('/:idProductDetail', productDetailController.productDetail);


module.exports=router;
const express= require('express');
const router = express.Router();
const productCartController=require('../controllers/newProductController.js');



router.get('/', productCartController.productCart);





module.exports=router
const express=require('express');
const router=express.Router();
const productIndexController=require('../controllers/productIndexController.js');


router.get('/', productIndexController.productIndex);




module.exports=router;
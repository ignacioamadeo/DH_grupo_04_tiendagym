const express=require('express');
const router=express.Router();

router.use('/', require('./index.js'));

router.use('/productCart',require('./productCart.js'));

router.use('/productDetail', require('./productDetail.js'));

router.use('/login', require('./login.js'));

router.use('/productIndex', require('./productindex.js'));

router.use('/register', require('./register.js'));

router.use('/newProduct', require('./newProduct.js'));

router.use('/modifyProduct', require('./modifyProduct.js'));



module.exports=router;
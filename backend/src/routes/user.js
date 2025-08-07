import express from 'express';
import {getproducts,viewproduct,addquantity,serach,deletefromcart, addtocard,viewshoppingcard, reducequantity, addCheckout} from '../controllers/userfcts.js';
const router =express.Router();

router.get('/shop',getproducts);
router.get('/view-product/:productid',viewproduct);
router.post('/add-to-cart/:productid',addtocard);
router.get('/view-cart',viewshoppingcard);
router.delete('/delete-from-cart',deletefromcart);
router.put('/update-quantity',addquantity);
router.put('/reduce-quantity',reducequantity);
router.get('/search-product',serach);
router.post('/checkout',addCheckout);

export default router;
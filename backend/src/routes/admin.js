import express from 'express';
import {addproducts, editproduct, getEdittedproduct,deleteproduct,getproductsAdmin} from '../controllers/adminfcts.js';
const router =express.Router();

router.get('/products',getproductsAdmin);
router.post('/addproducts',addproducts);
router.get('/edit-products/:productid',getEdittedproduct);
router.put('/edit-products/:productid',editproduct);
router.delete('/delete-products/:productid',deleteproduct)
export default router;

import React,{ useState, useEffect } from 'react'

import {useParams} from 'react-router-dom'
import '../styles/styles.css';
import Header from '../components/navigationMenu';
import { Footer } from '../components/Footer';
import { handleAddToCard } from '../utils/homeControllers';
const ProductDetail = () => {

const {productid}=useParams();

const [product, setProduct] = useState(null);


console.log(productid);
useEffect(() => {


  fetch(`http://localhost:8081/view-product/${productid}`).then((res)=>{

  if (res.status === 202) {
    return res.json(); 
  } else if (res.status === 404) {
    throw new Error("Product not found");
  } else {
    throw new Error("An unexpected error occurred");
  }

  })
  .then((data)=>{
    setProduct(data);
  })
  .catch((err)=>alert('error occurs unable to find the data'+ err.message))

}, [productid]);

  return (
    <div>
      <Header/>
    {product ? (
      <div className='product-details'>
        <div className='detail-left'>
        <img src={product.image} alt=''/>

        </div>
        <div className='detail-right'>
        <h3>{product.name}</h3>
        <p className='category'>Category: {product.category}</p>
        <p className='product-price'>Price: ${product.price}</p>
        <p className='desc'>{product.description}</p>
        <button onClick={()=>handleAddToCard(productid)}>Add to Cart</button>
           </div>
        
      </div>
    ) : (
      <p>Product not found</p>
    )}
    <Footer/>
  </div>
  )
}

export default ProductDetail

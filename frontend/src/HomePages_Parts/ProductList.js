import React, { useEffect, useState } from 'react'
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';
import { handleAddToCard,handleImageClick } from '../utils/homeControllers';


const ProductList = () => {
 
    const navigate=useNavigate();

 const [productsarray,setproducts]=useState([]);

  
useEffect(() =>{
    fetch('http://localhost:8081/shop',{
      method:"Get",
      credentials:'include'
    })
    .then((res)=>res.json())
    .then((data)=>
    {
        setproducts(data)
        console.log("Array of products:", data);
    }
    
    ).catch((err) => console.error("Error fetching products:", err.message));
    
},[]);

  
  return (
    <div>
<div className='product_list'>
    <h2>Our Elegent Collection</h2>
    <div className='product_grid'>
        {productsarray.map((product) =>{
       
            return(
                <div className='product_card' key={product.id}>
<img src={product.image} alt='' className='product_image' onClick={()=>handleImageClick(product.id,navigate)} />
<div className='product_info'>
<h4>{product.name}</h4>
<p>${product.price}</p>
</div>
<button className='add-to-cart' onClick={()=>handleAddToCard(product.id)}> Add to Cart</button>

                </div>
            )
        })}
    </div>
</div>

    </div>
  )
}

export default ProductList


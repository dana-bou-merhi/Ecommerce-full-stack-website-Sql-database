import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { handleAddToCard,handleImageClick } from '../utils/homeControllers';
import Header from '../components/navigationMenu';
import { Footer } from '../components/Footer';
import Menu from '../components/Menu';
const SearchProduct = () => {

const [products,setproducts]=useState([]);

const [searchParams] = useSearchParams();
const searchQuery = searchParams.get("query");
const navigate=useNavigate();


const fetchdata=(query)=>{

  fetch(`http://localhost:8081/search-product/?searchquery=${query}`).then((res)=>res.json())
  .then((result)=>{
    setproducts(result)
  })
  .catch((err)=> alert(err.message))

}
 useEffect(()=>{
    if(searchQuery)
    fetchdata(searchQuery);

 },[searchQuery])
 
  return (
    <div>
      <Header/>
      <Menu/>
    <div className='product_list'>
        <h2>Our Elegent Collection</h2>
        <div className='product_grid'>
            {products.map((product) =>{
            
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
    <Footer/>
        </div>
  )
}

export default SearchProduct
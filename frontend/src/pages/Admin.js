import React, { useState,useEffect } from 'react'
import Header from '../components/navigationMenu';
import { Footer } from '../components/Footer';
import '../styles/admin.css';
import { FaEdit,FaTrash,FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { handleImageClick } from '../utils/homeControllers';
const Admin = () => {
const [products,setproducts]=useState([]);
const navigate =useNavigate();

useEffect(() =>{
  fetch('http://localhost:8081/admin/products',{
    method:"Get",
    credentials:'include'
  })
  .then((res)=>{
    if(res.status===401){
      navigate('/unauthenticated');
    
 
    }
    else{
     return res.json();
    }
  })
  .then((data)=>
  {
      setproducts(data)
      //console.log("Array of products:", data);
  }
  
  ).catch((err) => console.error("Error fetching products:", err.message));
  
},[navigate]);


  const handDelete=(productid)=>{
if(window.confirm('Are you sure you want to delete this item?')){

  fetch(`http://localhost:8081/admin/delete-products/${productid}`,{
    method:"DELETE",
  }).then((res)=>{
    alert("Item deleted successfully")

    setproducts((prevProducts) =>
    prevProducts.filter((product) => product.id !== productid)
  );
})
  .catch((err)=>alert(err.message))
}
 else{
  alert('Failed to delete');
 }

  }

  return (
    <div>
      <Header/>
      <div className='admin-page'>

      <div className='addproduct-container'>
        <button className='addprobuctbtn' onClick={()=>navigate('/admin/add-product')}> <FaPlus className='icon' size={17}/>Add Product</button>
        
        </div>

    <div className='product-display'>
      <table className='product-display-table'>
    <thead>
      <tr>
    <td>product image</td>
    <td>product name</td>
    <td>product price</td>
    <td>product category</td>
    <td >action</td>
    </tr>
    </thead>

    {products.map((prod)=>{

    return(
      <tr>
     <td className='imagecol'><img onClick={()=>handleImageClick(prod.id,navigate)} src={prod.image} alt='' /></td>
     <td>{prod.name}</td>
     <td>${prod.price}</td>
     <td>{prod.category}</td>
     <td colSpan={6}>

      <button className='updatebtn' onClick={()=>navigate(`/admin/edit-product/${prod.id}`)}><FaEdit className='icon' size={30} /> Edit</button>
      <button className='updatebtn' onClick={()=>handDelete(prod.id)}><FaTrash className='icon' size={30}/> Delete</button>
     </td>

      </tr>
    )


    })}
    
    </table>

    </div>

    </div>
    <Footer/>
    </div>
  )
}

export default Admin
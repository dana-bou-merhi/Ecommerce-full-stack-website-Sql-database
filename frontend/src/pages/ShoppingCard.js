import React, { useEffect, useState } from 'react'
//import { FaPlus,FaMinus,FaTimes } from 'react-icons/fa';
import '../styles/styles.css';
import Header from '../components/navigationMenu';
import { Footer } from '../components/Footer';
import { FaTrash,FaPlus,FaMinus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ShoppingCard = () => {

   const [shoppingcard,setShoppingcard]=useState([]);   
   const navigate =useNavigate(); 
   let totalquantity =0;
 let totalprice =0;

 useEffect(()=>{
  fetch(`http://localhost:8081/view-cart`,{
    method:"Get",
    credentials:'include'
  }).then((res)=>{
    if(res.status===201){
      return res.json();
    }
    else{
      navigate('/unauthenticated');
    }
  })
  .then((data)=>{
    setShoppingcard(data);
  })
  .catch((err)=>{
    alert("Error occurs upon fetching from database");
  })
 })


 const handleAddQuantity=(id)=>{
  fetch(`http://localhost:8081/update-quantity?productid=${id}`,{
    method:"PUT"
  }).then((res)=>res.json())
  .then((result)=>{
    console.log(result.message)
  
  }).catch((err)=>alert(err.message))

 }  
  const handleReduceQuantity=(quan,id)=>{

  fetch(`http://localhost:8081/reduce-quantity?productid=${id}&quantity=${quan}`,{
    method:"PUT",
  }).then((res)=>res.json())
  .then((result)=>{
    console.log(result.message);
  }).catch((err)=>alert(err.message));
      
  }

  const handleDeleteFromCart=(id)=>{
    fetch(`http://localhost:8081/delete-from-cart?productid=${id}`,{
      method:"DELETE",
    }).then((res)=>res.json())
    .then((result)=>{
      console.log(result.message)
      alert(result.message);
    }).catch((err)=>alert(err.message));
  }



  return (
    <>
    <Header/>
 <div className='cart_container'> 
 <div className='cart_left'>
  <div className='cart_header'>
<h1>Shoppimg Cart</h1>
<h1> Items</h1>
<FaTrash className='delete_cart'/>
  </div>
<div className='cart_detail' >

{shoppingcard.length >0 ? 

( shoppingcard.map((item)=>{

  const prodtotalprice=item.price *item.quantity;
  // to see the total nbr of items taken
  totalquantity=totalquantity+ parseInt(item.quantity) ;
  totalprice=totalprice+prodtotalprice;
 
  return(

<div className='cart_item' key={item.id}>
  <div className='product_detail'> 
  <img src={item.image} alt=''/>
  <div className='product_info'>
     <h3>{item.name}</h3>
      </div>
  
     </div>

    <div className='quantity'>
     <button onClick={()=>{handleReduceQuantity(item.quantity,item.id)}}>
      <FaMinus/>
     </button>
      <span>{item.quantity}</span>
      <button onClick={()=>{handleAddQuantity(item.id)}}>
        <FaPlus/>
      </button>
    </div>

    <div className='price'> ${prodtotalprice}</div>
    <div className='total'>
    <div className='cart_item_remove' onClick={()=>handleDeleteFromCart(item.id)}>
  
  <FaTrash/> Remove

</div>
    </div>

</div>


  )
}))

: (<p> Your Card is empty </p>) }

</div>
<div className='cart_right'>

<h2>Cart Summery</h2>

 <div className='summary_item'>

   <span>Items:</span>  
   <span>{totalquantity}</span>
  </div>

 <div className='cart_summary'>

   <div className='summary_item'>
    <span>Shipping</span>
    <span>Free</span>
   </div>

 <div className='summary_item total_cost'>
  <span>Total Cost</span>
  <span>${totalprice}</span>

 </div>
 <button className='checkout_btn'> <a href='/checkout'> CHECKOUT</a></button>

   </div>

     </div>

     </div>
 </div>
  <Footer/>
  </>
  )
}

export default ShoppingCard

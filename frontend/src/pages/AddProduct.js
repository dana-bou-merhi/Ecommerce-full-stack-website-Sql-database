import React, { useState } from 'react'
import '../styles/admin.css';
import Header from '../components/navigationMenu';
import { Footer } from '../components/Footer';
const AddProduct = () => {

  const [productname,setproductname]=useState('');
  const [productprice,setproductprice]=useState('');
  const [productcategory,setproductcat]=useState('');
  const [productimg,setproductimg]=useState();
  const [productdecs,setproductdesc]=useState('');

const addproduct=()=>{


fetch('http://localhost:8081/admin/addproducts',{
method:"POST",

headers:{
  "Content-Type":"application/json"
},
credentials:'include',
body:JSON.stringify({

name:productname.trim(),
price:productprice.trim(),
cat:productcategory.trim(),
desc:productdecs.trim(),
image:productimg.trim(),

})

}).then((res)=>res.json())
.then((data)=>alert(data.message))
.catch((err)=> {
 console.log('Error',err);
})

 setproductname('');
 setproductcat('');
 setproductdesc('');
 setproductdesc('');
 setproductimg('');
 setproductprice('');


}



  return (
    <>
    <Header/>
    <div className='admin-container'>
    <div className='add-product'>
    <div className='add-container'>
<div className='admin-form-container'>
  <form>
   <h3>Add a New Product</h3>

   <input type='text' placeholder=' product name' name='name' className='box' value={productname} onChange={(e)=>setproductname(e.target.value)}/>
   <input type='number' placeholder=' product price' name='price' className='box' value={productprice} onChange={(e)=>setproductprice(e.target.value)}/>
   <input type='text' placeholder=' product category' name='cat' className='box' value={productcategory}  onChange={(e)=>setproductcat(e.target.value)}/>
   <textarea placeholder=' description' name='desc'className='box' cols={20} rows={4} value={productdecs}  onChange={(e)=>setproductdesc(e.target.value)}></textarea>
   <input type='text'  name='image' placeholder='image url' className='box' value={productimg} onChange={(e)=>setproductimg(e.target.value)}/> 
<button className='btn' name='add-product' onClick={(e)=>{

  e.preventDefault();
  addproduct();
}}> Add Button</button>
   </form>

</div>

    </div>

    </div>
<Footer/>
    </div>
    </>
  )
}

export default AddProduct

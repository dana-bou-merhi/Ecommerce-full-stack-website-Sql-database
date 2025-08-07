import React ,{useEffect, useState}from 'react'
import '../styles/admin.css';
import Header from '../components/navigationMenu';
import { Footer } from '../components/Footer';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [product,setproduct]=useState({name:'',price:'',cat:'',desc:'',image:''});
  const [error,seterror]=useState(null);
const {productid}=useParams();
const navigate =useNavigate();

  useEffect(()=>{
    console.log(productid);
    fetch(`http://localhost:8081/admin/edit-products/${productid}`).then((result)=>{
        if(result.status===201){
            return result.json();
        }
        else{

          throw new Error("Failed to fetch")
        }
    }).then((data)=>setproduct({
     name:data.name,
     price:data.price,
     cat:data.category,
     desc:data.description,
     image:data.image



    }))
    .catch((err)=> seterror(err.message));


  },[productid])


    const handleSubmit = (e) => {
        e.preventDefault();
      fetch(`http://localhost:8081/admin/edit-products/${productid}`,{

      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(product)

      }).then((res)=>res.json())
      .then((data)=>{
        if (data.message){
          alert(data.message);
          navigate('/shop');

        } 
      })
      .catch((err)=> {
        alert('error updating product');
      })
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setproduct((prev) => ({
          ...prev,
          [name]: value, 
        }));
      };

  return (

    <div className='admin-container'>
<Header/>

{ error? (<p>Error: {error}</p>) :product ?(
    <div className='add-product'>
<div className='add-container'>
<div className='admin-form-container'>
<form onSubmit={handleSubmit}>
<h3>Edit your Product</h3>

<input type='text' placeholder='enter product name' name='name' value={product.name} onChange={handleChange} className='box' />
<input type='number' placeholder='enter product price' name='price' value={product.price} onChange={handleChange} className='box'/>
<input type='text' placeholder='enter product category' name='cat' value={product.cat} onChange={handleChange} className='box'/>
<textarea placeholder='enter  description' name='desc'className='box' cols={20} rows={4} value={product.desc}onChange={handleChange} ></textarea>
<input type='text'  name='image' placeholder='image url' className='box'  value={product.image} onChange={handleChange}/> 
<button className='btn' type='submit'>Edit Product</button>

</form>

</div>

</div>

</div>


):(<p>Loading product details....</p>)

}

<Footer/>
</div>

  )
}

export default EditProduct
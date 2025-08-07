import React, { useEffect, useState } from 'react'
import '../styles/styles.css';
import visa from '../assests/visaa.png';
import mastercard from '../assests/master.png';
import bkash from '../assests/bkash.png';
import Header from '../components/navigationMenu';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const [orderItem,setOrderItems]=useState([]);
    const [oname,setOname]=useState('');
    const [street,setStreet] =useState('');
    const [appartment,setAppartment]=useState('');
    const [town,setTown]=useState('');
    const [phone,setPhone]=useState('');

   const navigate =useNavigate();


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
            setOrderItems(data);
        })
        .catch((err)=>{
          alert("Error occurs upon fetching from database");
        })
       })
        
       const totalPrice = orderItem.length > 0 ? orderItem.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0) : 0;

      const handleAddCheckout=()=>{
        fetch('http://localhost:8081/checkout',{
          method:'POST',
          headers:{"Content-Type":"application/json"},
          credentials:'include',
          body:JSON.stringify({
          name:oname.trim(),
          appartment:appartment.trim(),
          town:town.trim(),
          phone:phone.trim(),
          price:totalPrice,
          })
        })
        .then((res)=>{return res.json()})
        .then((result) =>{
          alert(result.message)
        navigate('/shop')
        })
        .catch((err)=>{
          console.log('errors happens upon fetching')
        })

     setOname("");
     setAppartment("");
     setPhone("");
     setStreet(" ");
     setTown("");

      }

  return (
    <div>
        <Header/>
    <div className="checkout-container">
 <section>
        <div className='billing-form'>
          <h1>Billing Details</h1>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">Order Name</label>
              <input type="text" id="firstName" name="firstName" value={oname} required  onChange={(e)=>setOname(e.target.value)}/>
            </div>

            <div className="form-group">
            <label htmlFor="streetAddress">Street Address</label>
            <input type="text" id="sterrtadd" name="street" value={street} onChange={(e)=>setStreet(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="apartment">Apartment, floor, etc. (optional)</label>
              <input type="text" id="apartment" name="apartment" value={appartment} onChange={(e)=>setAppartment(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="townCity">Town/City</label>
              <input type="text" id="townCity" name="townCity" value={town} required onChange={(e)=>setTown(e.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" value={phone} required onChange={(e)=>setPhone(e.target.value)} />
            </div>

            <div className="payment-options">
         <div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={visa} alt="Visa" style={{ width: '50px', height: 'auto', marginRight: '5px' }} />
  <img src={mastercard} alt="MasterCard" style={{ width: '70px', height: 'auto', marginRight: '5px' }} />
  <img src={bkash} alt="Bkash" style={{ width: '60px', height: 'auto', marginRight: '5px' }} />
</div>

            <div className='radio-class'>
              <input type="radio" id="bank" name="paymentMethod" value="bank"  />
              <label htmlFor="bank">Bank</label>

            </div>
            <div className='radio-class'>
            <br></br>

              <input type="radio" id="cod" name="paymentMethod" value="cod"  />
              <label htmlFor="cod" >Cash on Delivery </label>
              
            </div>
          </div>
          <br></br>

          <div className="coupon-section">
          <br></br>

            <input type="text" placeholder="Enter coupon code" className="coupon-input" />
            <button className="coupon-button">Apply Coupon</button>
          </div>

          </form>
        </div>
        
         
       <div className="checkout-summary">
          {orderItem.map(product => (
     
            <div key={product.id} className="checkout-summary-item">
              <img src={product.image} alt={product.name} />
              <div className="details">
                <p>{product.name} x {product.quantity}</p>
                
                <p className="price">${(product.price * product.quantity).toFixed(2)}</p>
              </div>
            </div>
           
          ))}
          
          <div className="summary-totals">
           <div>
              <span className="total-label">Subtotal:</span>
              <span className="total-price">${totalPrice.toFixed(2)}</span>
          </div>
            <hr />
           
          </div>

          <button className="place-order-button"  onClick={handleAddCheckout}>Place Order</button>
        </div>
      </section>

    </div>
  <Footer/>
    </div>
  )
}

export default Checkout
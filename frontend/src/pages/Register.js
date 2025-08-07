import React, { useState } from 'react'
import '../styles/styles.css';
import authimage from '../assests/electronicsecomm.jpeg';
import { Footer } from '../components/Footer';
import Header from '../components/navigationMenu';

import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState(' ');
    const [password,setPassword]=useState('');
    const navigate =useNavigate();
     const [error,seterror] =useState('');
   

    const registration = () => {

      console.log({ name, email, password });

      fetch('http://localhost:8081/auth/register', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
        }),
      })
        .then((res) => {
          if (res.ok) {
            alert("Account created successfully");
            navigate('/login');
          } else {
            return res.json().then((data) => {
              seterror(data.message);
             // alert(`Error: ${data.message}`);
             
            });
          }
        })
        .catch((err) => {
          console.error(err);
          seterror(err);
          alert("A network error occurred");
        });
      


    };
    

  return (
    <div>
      <Header pageName='register'/>
        
        <section className="section">
    <div className="auth_container">
    <div className="auth_img">
        <img src={authimage} alt="" className="auth_image" />
      </div>

      <div className="auth_content">
        <form action="" className="auth_form">
          <h2 className="form_title">Create your account</h2>
          <p className="auth_p">Enter your details below</p>
          <div className="form_group">
            <input type="text" placeholder="Name" value={name}  className="form_input"  onChange={(e) =>setName(e.target.value)}/>
          </div>
          <div className="form_group">
            <input type="email" value={email} placeholder="Email" className="form_input" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form_group form_pass">
            <input
              type="password" value={password}
              placeholder="Password"
              className="form_input"  onChange={(e) =>setPassword(e.target.value)}  />
          </div>


              <div className="form_group">
                   <button className="form_btn"  onClick={
                   (e) => {
                  e.preventDefault();
                  registration();}}> 
                    Register
                    </button>
               </div>
         
          <div className="form_group">
            <p className='error'> {error}</p>
            <span>
              Already have an account?
              <a href="/login" className="form_auth_link"> Login</a></span>
          </div>
        </form>
      </div>
    </div>
  </section>
  <Footer/>
 
    </div>
  )
}
export default Register;
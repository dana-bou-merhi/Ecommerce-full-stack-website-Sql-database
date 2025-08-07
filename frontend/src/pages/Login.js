import React,{useState} from 'react'
import authimage from '../assests/electronicsecomm.jpeg';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import Header from '../components/navigationMenu';

const Login = () =>
 {
    const [email,setEmail]=useState(' ');
    const [password,setPassword]=useState('');
    const [error,seterror]=useState('');
const navigate=useNavigate();

    const handleLogin=(e)=>
    { e.preventDefault();

      console.log('Email:', email, 'Password:', password);

      fetch('http://localhost:8081/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials:'include',
        body: JSON.stringify({
          email: email.trim(),
          password: password.trim(),
        }),
      })
        .then((res) => res.json()) 
        .then((data) => {
          console.log('Response:', data);
          if (data.login) {
            alert("Logged in successfully "+data.useremail);
            alert(data.message);
            navigate('/shop')
          } else if (data.Error) {
            seterror(data.Error)
            //alert(data.Error);
          } else if (data.message) {
            seterror(data.message)
           // alert(data.message);
          }
        })
        .catch((err) => alert("Can't fetch to the database"));
setEmail('');
setPassword('');

    }

  return (
    <div>
      <Header pageName='login'/>
 
 <section className="section">
    <div className="auth_container">
    <div className="auth_img">
        <img src={authimage} alt="" className="auth_image" />
      </div>

      <div className="auth_content">
        <form action="" className="auth_form">
          <h2 className="form_title">Login Information</h2>
          <p className="auth_p">Enter your details below</p>
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
            <button className="form_btn" onClick={handleLogin}> Login
            </button>
          </div>
         
          <div className="form_group">
            <p className='error'>{error}</p>
            <span>
              Dont't have an account?
              <a href="/register" className="form_auth_link"> Register</a></span>
          </div>
        </form>
      </div>
    </div>
  </section>
     <Footer/>
    </div>
  )
}

export default Login
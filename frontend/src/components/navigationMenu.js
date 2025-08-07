import React,{useState} from 'react'
import searchimage from '../assests/search.png';
import heartimage from '../assests/heart.png';
import cardimage from '../assests/cart.png';
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';


const NavigationMenu = ({pageName}) => {

  const [searchQuery, setSearchQuery] = useState("");
  const navigate =useNavigate();


  const handleLogout = () => {
    fetch('http://localhost:8081/auth/logout', {
      method: 'GET',
      credentials: 'include', 
    })
      .then((res) => {
     
        if (res.status === 200) {
          return res.json(); 
        } else if (res.status === 400) {
          throw new Error("No active session to log out.");
        } else if (res.status === 500) {
          throw new Error("Error occurred while logging out. Try again later.");
        } else {
          throw new Error(`Unexpected status code: ${res.status}`);
        }
      })
      .then((result) => {
        alert(result.message);
        navigate('/login'); 
      })
      .catch((err) => {
        console.error('Error during logout:', err.message);
        alert(err.message); 
      });
  };
  

  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
    navigate(`/search?query=${searchQuery}`); 
  };

  return (
    <nav className="nav">
    <div className="container nav_container">
      <div className="nav_logo">EXCLUSIVE</div>
      <ul className="nav_list">
      <li className="nav_item"><a href="/login" className="nav_link">Login</a></li>
        <li className="nav_item"><a href="/shop" className="nav_link">Home</a></li>
        <li className="nav_item"><a href="/shopping-card" className="nav_link">Shopping Card</a></li>
        <li className="nav_item"><a href="/checkout" className="nav_link">Checkout</a></li>
        <li className="nav_item"><a href="/admin" className="nav_link">Admin</a></li>
        <li className="nav_item">
          <a href='/login' className='nav_link'  onClick={handleLogout}>Sign out </a>
        </li>
      </ul>
      <div className="nav_items">

        {pageName !== 'login' && pageName !== 'register' && (

          <>
           <form action="#" className="nav_form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="nav_input"
            placeholder="search here...." value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}
          /> 
          <button type='submit'className='searchbtn'> 
          <img src={searchimage} alt="" className="nav_search" />
          </button>           
         
        </form>

        <img src={heartimage} alt="" className="nav_heart" />
        
         <a href='/shopping-card'> <img src={cardimage} alt="" className="nav_cart" /> </a> 
          
          
          </>
        )}
      </div>
   
    </div>
  </nav>
  )
}

  const Header = ({ pageName }) => {
    return (
      <div>
        
        <NavigationMenu pageName={pageName} />
        
      </div>
    );
  };

export default Header
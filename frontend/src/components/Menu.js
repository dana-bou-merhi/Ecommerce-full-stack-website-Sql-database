import React from 'react'
import '../styles/styles.css';
import { useNavigate } from 'react-router-dom';
const Menu = () => {

  const navigate =useNavigate();

  return (
    <div className='menu-wrapper'>
<div className='menu-list'>

<div className='item'>
<a href='#Phones' onClick={()=>navigate(`/search?query=Phones`)}>Phones</a>
</div>

<div className='item'>
<a href='#Laptop' onClick={()=>navigate(`/search?query=laptop`)}>Laptop</a>
</div>

<div className='item'>
<a href='#Games' onClick={()=>navigate(`/search?query=games`)}>Games</a>
</div>
<div className='item'>
<a href='#Home Electronics' onClick={()=>navigate(`/search?query=home electronics`)}>Home Electronics</a>
</div>

</div>



    </div>
  )
}

export default Menu
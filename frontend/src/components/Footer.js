import React from 'react'
import '../styles/styles.css';
import {BsInstagram, BsTwitterX} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
export const Footer = () => {
  return (
<div>
<div className='footer'>
    <div className='footer_content'>
    <div className='footer_name'> 
    <h2>Exclusive</h2>
    </div>
    <div className='footer_socials'>
<FaFacebook className='footer_icon'/>
< BsInstagram className='footer_icon'/>
<BsTwitterX className='footer_icon'/>

    </div>

    </div>
  <div className='copy'>
<p>Copyright @Exclusive 2024.All right reserved</p>

  </div>
</div>

</div>
  )
}

import React from 'react'
import '../styles/styles.css';
import Header from '../components/navigationMenu';
import { Footer } from '../components/Footer';
const NoAccess = () => {
  return (
    <div>
        <Header/>
    <div className="no-access-container">
    <h1 className="no-access-message">You don't have access to this page. </h1>
  </div>
  <Footer/>
  </div>
  )
}

export default NoAccess
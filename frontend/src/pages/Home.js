import React from 'react'
import Header from '../components/navigationMenu';
import ImageSlider from '../components/ImageSlider';
import ProductList from '../HomePages_Parts/ProductList';
import { Footer } from '../components/Footer';
import TopCate from '../HomePages_Parts/TopCat';

const Home = () => {
  return (
   <div>
    <Header/>
    <ImageSlider/>
  
    <ProductList/>
  <TopCate/>
    <Footer/>
   </div>
  )
}

export default Home
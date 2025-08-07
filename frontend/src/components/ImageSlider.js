import React,{useEffect,useState} from 'react'
import electronics from '../assests/electronics.jpg';
import allcollection from '../assests/electonicsCollection.png'
import eleccoll from '../assests/collection.png';
import gaming from '../assests/gaming.jpg';

import '../styles/styles.css';
import Menu from './Menu';
const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { url: allcollection, alt: 'Electronics' },
    {url:eleccoll,alt:'electrnicCollection'},
    { url: gaming, alt: 'gaming' },
   {url:electronics, alt:'Laptop'}
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className='menucontainer'>
      <Menu/>
    <div className="slideshow-container">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`slide ${index === currentSlide ? 'active' : ''}`}
        style={{ backgroundImage: `url(${slide.url})` }}
      />
    ))}
    <div className="dots-container">
      {slides.map((_, index) => (
        <span
          key={index}
          className={`dot ${index === currentSlide ? 'active' : ''}`}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </div>
  </div>


  </div>
  )
}

export default ImageSlider
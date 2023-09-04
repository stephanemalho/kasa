import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const Carousel = ({house}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ranking = `${currentImageIndex + 1}/${house.pictures.length}`

  const nextImage = () => {
    if (currentImageIndex === house.pictures.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };
  
  const prevImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(house.pictures.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="image-container">
    <AiOutlineLeft size={60} onClick={prevImage} className="carousel-icon-left"  />
    <img src={house.pictures[currentImageIndex]} alt={house.title} />
    <span className="ranking-img">{ranking}</span>
    <AiOutlineRight size={60} onClick={nextImage} className="carousel-icon-right" />
  </div>
  )
}

export default Carousel
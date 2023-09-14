import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { HandlePrevious, handleNext } from "../../../../utils";

const Carousel = ({ house }) => {
  //State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ranking = `${currentImageIndex + 1}/${house.pictures.length}`;
  // Behavior
  const nextImage = handleNext(currentImageIndex, house, setCurrentImageIndex);
  const prevImage = HandlePrevious(currentImageIndex, house, setCurrentImageIndex);
  //JSX
  return (
    <div className="image-container">
      <AiOutlineLeft
        onClick={prevImage}
        className="carousel-icon-left"
      />
      <img src={house.pictures[currentImageIndex]} alt={house.title} />
      <span className="ranking-img">{ranking}</span>
      <AiOutlineRight
        onClick={nextImage}
        className="carousel-icon-right"
      />
    </div>
  );
};

export default Carousel;
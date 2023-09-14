import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { arrayRanking, next, previous } from "../../../../utils";

const Carousel = ({ house }) => {
  //State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ranking = arrayRanking(currentImageIndex, house);
  // Behavior
  const nextImage = next(currentImageIndex, house, setCurrentImageIndex);
  const prevImage = previous(currentImageIndex, house, setCurrentImageIndex);
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



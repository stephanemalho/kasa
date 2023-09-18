import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { arrayRanking, next, previous } from "../../../../utils";

const Carousel = ({ house }) => {
  //State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ranking = arrayRanking(currentImageIndex, house);

  console.log("ranking", ranking);
  console.log('house: ', house);
  // Behavior
  const nextImage = next(currentImageIndex, house, setCurrentImageIndex);
  const prevImage = previous(currentImageIndex, house, setCurrentImageIndex);
  //JSX
  return (
    <div className="image-container">
      {house.pictures.length > 1 ?<AiOutlineLeft
        onClick={prevImage}
        className="carousel-icon-left"
      /> : null }
      <img src={house.pictures[currentImageIndex]} alt={house.title} />
      {house.pictures.length > 1 ? <span className="ranking-img">{ranking}</span> : null }
      {house.pictures.length > 1 ? <AiOutlineRight
        onClick={nextImage}
        className="carousel-icon-right"
      /> : null }
    </div>
  );
};

export default Carousel;



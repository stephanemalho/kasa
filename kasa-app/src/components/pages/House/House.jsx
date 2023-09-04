import React, { useState } from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import { useParams } from "react-router-dom";
import housings from "../../../data/housing";
import Collapse from "../../layout/main/house/Collapse";
import OwnerInfo from "../../layout/main/house/OwnerInfo";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const House = () => {
  const { id } = useParams();
  const house = housings.find((house) => house.id === id);
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

  console.log("point length", currentImageIndex );

  console.log(id);
  console.log(house);
  return (
    <>
      <Header />
      <section className="house-section">
        <div className="image-container">
          <AiOutlineLeft size={60} onClick={prevImage} className="carousel-icon-left"  />
          <img src={house.pictures[currentImageIndex]} alt={house.title} />
          <span className="ranking-img">{ranking}</span>
          <AiOutlineRight size={60} onClick={nextImage} className="carousel-icon-right" />
        </div>
        <div className="house-content">
          <OwnerInfo />
          <div className="collapses-content">
            <Collapse title="Description" houseInfo={house.description} />
            <Collapse
              title="Equipements"
              key={house.id}
              houseList={house.equipments}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default House;

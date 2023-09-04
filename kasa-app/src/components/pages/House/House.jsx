import React from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import { useParams } from "react-router-dom";
import housings from "../../../data/housing";
import Collapse from "../../layout/main/house/Collapse";
import OwnerInfo from "../../layout/main/house/OwnerInfo";

const House = () => {
  const { id } = useParams();
  const house = housings.find((house) => house.id === id);

  console.log(id);
  console.log(house);
  return (
    <>
      <Header />
      <section className="house-section">
        <div className="image-container">
          <img src={house.pictures[0]} alt={house.title} />
        </div>
        <div className="house-content">
          <OwnerInfo />
          <div className="collapses-content">
            <Collapse title="Description" houseInfo={house.description} />
            <Collapse title="Equipements" key={house.id} houseList={house.equipments}  />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default House;

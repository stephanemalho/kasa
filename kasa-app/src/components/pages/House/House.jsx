import React from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import { useParams } from "react-router-dom";
import housings from "../../../data/housing";

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
          <div className="head-house-content">
          <div className="house-content__title">
            <h2>{house.title}</h2>
            <p>{house.location}</p>
          </div>
          <div className="house-content__host">
            <div className="house-content__host__name">
              <p>{house.host.name}</p>
            </div>
            <div className="house-content__host__avatar">
              <img src={house.host.picture} alt={house.host.name} />
            </div>
          </div>
          </div>
          <div className="house-content__tags">
            <ul>
              {house.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="house-content__rating">
            <p>{house.rating}</p>
          </div>
          <div className="house-content__description">
            <p>{house.description}</p>
          </div>
          <div className="house-content__equipments">
            <ul>
              {house.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default House;

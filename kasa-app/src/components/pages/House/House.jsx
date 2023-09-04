import React from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import { useParams } from "react-router-dom";
import housings from "../../../data/housing";
import MainHouse from "../../layout/main/house/MainHouse";

const House = () => {
  const { id } = useParams();
  const house = housings.find((house) => house.id === id);

  return (
    <>
      <Header />
      <MainHouse house={house} />
      <Footer />
    </>
  );
};

export default House;

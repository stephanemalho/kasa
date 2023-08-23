import React from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import { useParams } from "react-router-dom";

const House = () => {

  const { id } = useParams();

  return (
    <>
      <Header />
      <h1>House ${id}</h1>
      <Footer />
    </>
  );
};

export default House;

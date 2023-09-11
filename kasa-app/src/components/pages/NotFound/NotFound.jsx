import React from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import Title from "../../ReusableUI/Title";
import NotFoundBlock from "../../layout/NotFoundContainer/NotFoundBlock";

const NotFound = () => {
  return (
    <>
      <Header />
      <Title title="404" className="title-not-found" />
      <NotFoundBlock />
      <Footer />
    </>
  );
};

export default NotFound;

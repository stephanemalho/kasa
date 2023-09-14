import React from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import Title from "../../ReusableUI/Title";
import NotFoundBlock from "../../layout/NotFoundContainer/NotFoundBlock";
import { heading } from "../../../variables/constants";

const NotFound = () => {
  return (
    <>
      <Header />
      <Title title={heading.notFound} className="title-not-found" />
      <NotFoundBlock />
      <Footer />
    </>
  );
};

export default NotFound;

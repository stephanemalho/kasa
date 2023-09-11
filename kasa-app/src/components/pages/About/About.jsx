import React from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import BackgroundSection from "../../ReusableUI/BackgroundSection";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <BackgroundSection bgUrl="backgroundUrl" />
      </main>
      <Footer />
    </>
  );
};

export default About;

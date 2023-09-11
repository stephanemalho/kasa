import React from "react";
import Header from "../../layout/header/Header";
import Footer from "../../layout/footer/Footer";
import BackgroundSection from "../../ReusableUI/BackgroundSection";
import AboutDescription from "../../layout/main/about/AboutDescription";

const About = ({about}) => {

  return (
    <>
      <Header />
      <main>
        <BackgroundSection bgUrl="backgroundAboutUrl" />
        <AboutDescription about={about} />
      </main>
      <Footer />
    </>
  );
};

export default About;

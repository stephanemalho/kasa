import React from "react";
import BackgroundSection from "../../ReusableUI/BackgroundSection";
import HousingSection from "./housing/HousingSection";

const MainHome = () => {
  return (
    <main>
      <BackgroundSection titleStyle="display-title" bgUrl="backgroundUrl" />
      <HousingSection />
    </main>
  );
};

export default MainHome;

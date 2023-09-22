import React from "react";
import BackgroundSection from "../../ReusableUI/BackgroundSection";
import HousingSection from "./housing/HousingSection";
import { main } from "../../../variables/constants";

const MainHome = () => {
  return (
    <main>
      <BackgroundSection titleStyle="display-title" bgUrl="backgroundUrl" title={main.title} />
      <HousingSection />
    </main>
  );
};

export default MainHome;

import React from "react";
import Title from "../../../ReusableUI/Title";
import { main } from "../../../../variables/constants";

const BackgroundSection = () => {
  return (
    <section className="backgroundUrl">
      <Title className={"display-title"} title={main.title} />
    </section>
  );
};

export default BackgroundSection;

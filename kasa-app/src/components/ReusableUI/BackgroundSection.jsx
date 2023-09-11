import React from "react";
import Title from "./Title";
import { main } from "../../variables/constants";

const BackgroundSection = ({ titleStyle,bgUrl }) => {
  return (
    <section className={bgUrl}>
      <Title className={titleStyle} title={main.title} />
    </section>
  );
};

export default BackgroundSection;

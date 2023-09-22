import React from "react";
import Title from "./Title";
// import { main } from "../../variables/constants";

const BackgroundSection = ({ titleStyle, bgUrl, title }) => {
  return (
    <section className={bgUrl}>
      <Title className={titleStyle} title={title ? title : null} />
    </section>
  );
};

export default BackgroundSection;

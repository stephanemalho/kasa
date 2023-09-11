import React from "react";
import Collapse from "../../collapse/Collapse";
import { aboutCollapses } from "./getAboutConfig";

const AboutDescription = ({ about }) => {
  const aboutBox = aboutCollapses(about);

  return (
    <div className="about-section">
      {aboutBox.map((data) => (
        <Collapse key={data.id} width={"about-width"} {...data} />
      ))}
    </div>
  );
};

export default AboutDescription;

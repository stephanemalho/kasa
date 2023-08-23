import React from "react";

const CardTitle = ({ title }) => {
  return (
    <div className="housing-card__content">
      <h2 className="housing-card__title">{title}</h2>
    </div>
  );
};

export default CardTitle;

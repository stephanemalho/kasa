import React from "react";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import { useNavigate } from "react-router-dom";

const CardArticle = ({ id, cover, title }) => {
  
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/house/${id}`);
  };

  return (
    <article
      onClick={() => handleClick(id)}
      className="housing-card__container"
      key={id}
    >
      <CardImage cover={cover} title={title} />
      <CardTitle title={title} />
    </article>
  );
};

export default CardArticle;

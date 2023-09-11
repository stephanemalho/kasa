import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundBlock = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="not-found-block">
      <p className="p-not-found">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <div onClick={handleClick} className="btn-not-found">
        Retourner sur la page d’accueil
      </div>
    </div>
  );
};

export default NotFoundBlock;

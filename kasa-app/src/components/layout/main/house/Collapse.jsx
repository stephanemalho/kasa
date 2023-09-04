import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Collapse = ({ title, houseInfo, houseList }) => {
  const [isOpen, setisOpen] = useState(false);

  const handleMoreInfo = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="collapses">
    <div
      className={
        isOpen ? "house-content__opened " : "house-content__collapse"
      }
      onClick={handleMoreInfo}
    >
      <p>{title}</p>
      {isOpen ? (
        <FiChevronDown className="chevron" size="30" />
      ) : (
        <FiChevronUp className="chevron" size="30" />
      )}
      <div
        className={
          isOpen
            ? "house-content__description-open"
            : "house-content__description-hidde"
        }
      >
        <p>{houseInfo}</p>
        {houseList && (
          <ul className="house-content__equipments" >
            {houseList.map((house) => (
              <li key={house}>{house}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div> 
  );
};
export default Collapse;

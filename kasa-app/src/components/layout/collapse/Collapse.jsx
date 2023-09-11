import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Collapse = ({ title, houseInfo, houseList, width }) => {
  // State
  const [isOpen, setisOpen] = useState(false);
  // Behavior
  const handleMoreInfo = () => setisOpen(!isOpen);
  // JSX
  return (
      <div
        className={`collapses ${width && width} ${
          isOpen && "collapses-height"
        }`}
      >
        <div
          className={
            isOpen
              ? `content__opened ${width && width}`
              : `content__collapse ${width && width}`
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
                ? "content__description-open"
                : "content__description-hidde"
            }
          >
            <p>{houseInfo}</p>
            {houseList && (
              <ul className="content__equipments">
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

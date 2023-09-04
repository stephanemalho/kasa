import React from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating({ rating }) {
  const maxRating = 5;
  const filledStars = parseInt(rating);
  const halfStar = rating - filledStars >= 0.5;

  return (
    <div>
      {Array.from({ length: maxRating }, (_, index) => (
        <span key={index}>
          {index < filledStars ? (
            <FaStar color="#FF6060" />
          ) : index === filledStars && halfStar ? (
            <FaStar halfColor="#FF6060" />
          ) : (
            <FaStar color="#E3E3E3" />
          )}
        </span>
      ))}
    </div>
  );
}

export default StarRating;

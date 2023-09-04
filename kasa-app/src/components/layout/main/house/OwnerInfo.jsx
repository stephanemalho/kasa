import React from 'react'
import { useParams } from 'react-router-dom';
import housings from '../../../../data/housing';
import StarRating from './StarRating';

const OwnerInfo = () => {
  const { id } = useParams();
  const house = housings.find((house) => house.id === id);

  return (
    <div className="head-house-content">
    <div className="house-content__title">
      <h2>{house.title}</h2>
      <p>{house.location}</p>
      <ul className="house-content__tags">
        {house.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
    <div className="house-content__host">
      <div className="house-content__user">
        <div className="house-content__user-identity">
          <p className="house-content__host__name">{house.host.name}</p>
          <img
            className="house-content__host__avatar"
            src={house.host.picture}
            alt={house.host.name}
          />
        </div>
      </div>
      <div className="house-content__rating">
        <StarRating rating={house.rating} />
      </div>
    </div>
  </div>
  )
}

export default OwnerInfo
import React from 'react'

const CardImage = ({ cover , title}) => {
  return (
    <img className="housing-card__img" src={cover} alt={title} />
  )
}

export default CardImage
import React from 'react'
import Carousel from './Carousel'
import HouseDescription from './HouseDescription'

const MainHouse = ({house}) => {
  return (
    <section className="house-section">
        <Carousel house={house} />
        <HouseDescription house={house} />
      </section>
  )
}

export default MainHouse
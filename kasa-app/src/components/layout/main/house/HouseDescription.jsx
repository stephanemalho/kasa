import React from 'react'
import OwnerInfo from './OwnerInfo'
import Collapse from './Collapse'
import { collapses } from './getCollapsConfig'

const HouseDescription = ({house}) => {

  const boxes = collapses(house);

  return (
    <div className="house-content">
          <OwnerInfo />
          <div className="collapses-content">
            {boxes.map((house) => (
              <Collapse
                key={house.id}
                {...house}
              />
            ))}
          </div>
        </div>
  )
}

export default HouseDescription
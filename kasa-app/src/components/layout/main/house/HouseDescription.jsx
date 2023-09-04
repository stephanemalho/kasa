import React from 'react'
import OwnerInfo from './OwnerInfo'
import Collapse from './Collapse'

const HouseDescription = ({house}) => {
  return (
    <div className="house-content">
          <OwnerInfo />
          <div className="collapses-content">
            <Collapse title="Description" houseInfo={house.description} />
            <Collapse
              title="Equipements"
              key={house.id}
              houseList={house.equipments}
            />
          </div>
        </div>
  )
}

export default HouseDescription
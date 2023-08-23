import housings from "../../../../../data/housing"
import CardImage from "./detail/CardImage"
import CardTitle from "./detail/CardTitle"

const HousingCard = () => {
  return (
    <>
      { housings.map(housing => {
        return (
          <article className="housing-card__container" key={housing.id}>
            <CardImage cover={housing.cover} title={housing.title} />
            <CardTitle title={housing.title} />
          </article>
        )
      }
      )}
    </>
  )
}

export default HousingCard
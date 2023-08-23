import housings from "../../../../../data/housing";
import CardArticle from "./detail/CardArticle";

const HousingCard = () => {
  return (
    <>
      {housings.map((housing) => {
        return (
          <CardArticle key={housing.id} id={housing.id} cover={housing.cover} title={housing.title} />
        );
      })}
    </>
  );
};

export default HousingCard;
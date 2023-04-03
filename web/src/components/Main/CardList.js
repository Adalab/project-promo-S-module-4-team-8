import { Link } from "react-router-dom";
import Card from "./Card";

function CardList({ cardsToShowP }) {
  const loqsea = cardsToShowP.map((eachCard, index) => {
    return (
      <li className="eachCard" key={eachCard.idProjects}>
        <Link to={`/card/` + eachCard.idProjects}>
          <Card data={eachCard} avatar={eachCard.image} />
        </Link>
      </li>
    );
  });
  return <ul className="ulCard">{loqsea}</ul>;
}

export default CardList;

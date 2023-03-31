import { Link } from "react-router-dom";
import Card from "./Card";

function CardList({ cardsToShowP }) {
  const loqsea = cardsToShowP.map((eachCard, index) => {
    return (
      <li className="eachCard" key={index}>
        <Link to={`/card/` + index}>
          <Card data={eachCard} avatar={eachCard.photo} />
        </Link>
      </li>
    );
  });
  return <ul className="ulCard">{loqsea}</ul>;
}

export default CardList;

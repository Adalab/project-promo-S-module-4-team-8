

import Card from "./Card";

function CardList({ cardsToShowP }) {
  const loqsea = cardsToShowP.map((eachCard) => {
    return (
      <li className="eachCard" key={eachCard.idProjects}>
        <a href={'http://localhost:4000/api/projects/detail/' + eachCard.idProjects} target='_blank' rel='noreferrer'>
          <Card data={eachCard} avatar={eachCard.image} />
        </a>
      </li >
    );
  });
  return <ul className="ulCard">{loqsea}</ul>;
}

export default CardList;



import { Link } from "react-router-dom";
import objectToExport from "../../services/localStorage";
import CardList from "./CardList";
import api from '../../services/api'
import "../../styles/layout/Landing.scss";
import { useEffect, useState } from 'react';

function Landing({ foundCard, idCard }) {
  // const projectsCard = objectToExport.get("cardsLs", []);
  const [cardsToShow, setProjectsCard] = useState([])
  // const cardsToShow = projectsCard.slice(0, 4);

  useEffect(() => {
    api.listPorjectApi()
      .then(data => {
        console.log(data);
        setProjectsCard(data)
      })
  }, []);

  return (
    <main className="mainLanding">
      <section className="mainLanding__section">
        <label className="btn">
          <Link className="mainLanding__link" to="/create">
            Crea un nuevo proyecto
          </Link>
        </label>
      </section>
      <section className="mainLanding__sectionCard">
        <CardList
          cardsToShowP={cardsToShow}
          foundCard={foundCard}
          idCard={idCard}
        />
      </section>
    </main>
  );
}
export default Landing;

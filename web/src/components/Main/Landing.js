import { Link } from "react-router-dom";
// import objectToExport from "../../services/localStorage";
import CardList from "./CardList";
import "../../styles/layout/Landing.scss";

function Landing({ foundCard, idCard, cardsToShow }) {


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
        />
      </section>
    </main>
  );
}
export default Landing;

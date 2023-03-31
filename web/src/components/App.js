import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";
import logo from "../images/logo-adalab.png";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CreateProject from "./Main/CreateProject";
import Landing from "./Main/Landing";
import CardDetail from "./Main/CardDetail";
import objectToExport from "../services/localStorage";
import { useLocation, matchPath } from "react-router-dom";

function App() {
  const projectsCard = objectToExport.get("cardsLs", []);

  const cardsToShow = projectsCard.slice(0, 4);
  console.log(cardsToShow);
  const { pathname } = useLocation();
  const routeData = matchPath("/card/:id", pathname);
  const cardId = routeData !== null ? routeData.params.id : "";
  console.log(cardId);

  const foundCard = cardsToShow.find((index) => index === cardId);

  // console.log(foundCard);
  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/card/:id"
          element={<CardDetail foundCard={foundCard} />}
        />
        <Route
          path="/create"
          element={<CreateProject projectsCard={projectsCard} />}
        />
        <Route path="/" element={<Landing foundCard={foundCard} />} />
      </Routes>
      <Footer logo={logo}></Footer>
    </>
  );
}

export default App;

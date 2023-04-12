import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";
import logo from "../images/logo-adalab.png";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CreateProject from "./Main/CreateProject";
import Landing from "./Main/Landing";
import { useEffect, useState } from 'react';
import api from '../services/api';

function App() {

  const [projectsCard, setProjectsCard] = useState([])
  const cardsToShow = projectsCard;

  useEffect(() => {
    api.listProjectApi()
      .then(data => {
        console.log(data);
        setProjectsCard(data)
      })
  }, []);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/create"
          element={<CreateProject
          />}
        />
        <Route path="/" element={<Landing cardsToShow={cardsToShow}
        />} />
      </Routes>
      <Footer logo={logo}></Footer>
    </>
  );
}

export default App;

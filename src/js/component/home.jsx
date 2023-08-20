import React from "react";
import GrupoCartas from "./cartas.jsx";
import Jumbotron from "./jumbotron.jsx";
import NavBar from "./navbar.jsx";
import Footer from "./footer";

const Home = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="main container-xl" style={{ paddingTop: "80px" }}>
        <Jumbotron />
        <GrupoCartas />
      </div>
      <Footer />
    </>
  );
};

export default Home;

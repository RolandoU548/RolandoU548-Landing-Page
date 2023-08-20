import "./jumbotron.css";
import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron px-5 pb-5 rounded">
      <h1 className="display-4">Hola, Mundo!</h1>
      <p className="lead">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui non sequi
        praesentium est fugiat ipsum incidunt quas ipsam, in, nesciunt commodi.
        Suscipit aliquam aut corrupti tenetur vel ea qui illum.
      </p>
      <a className="btn btn-primary btn-lg" href="#" role="button">
        Learn more
      </a>
    </div>
  );
};
export default Jumbotron;

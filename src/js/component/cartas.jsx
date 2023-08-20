import propTypes from "prop-types";
import React from "react";
import "./cartas.css";

const GrupoCartas = () => {
  return (
    <div className="cartas mx-3 my-2">
      <div className="row justify-content-center g-5">
        <div className="col-10 col-md-6 col-xl-3 p-0">
          <Carta
            tittle="GUEPARDO"
            content="El animal más rápido en tierra es el guepardo, capaz de alcanzar velocidades de hasta 100 km/h.
                "
            buttonLabel="IR A WIKIPEDIA"
            img="https://www.oasysparquetematico.com/wp-content/uploads/2018/04/shutterstock_410749480.jpg"
            link="https://es.wikipedia.org/wiki/Acinonyx_jubatus"
          />
        </div>
        <div className="col-10 col-md-6 col-xl-3 p-0">
          <Carta
            tittle="COLIBRÍ ABEJA"
            content="El colibrí abeja es considerado el ave más pequeña, con tan solo 5 centímetros de longitud.
                "
            buttonLabel="IR A WIKIPEDIA"
            img="https://i.pinimg.com/736x/ca/a4/be/caa4be1c4628c905fffe2ae93dfc86f3.jpg"
            link="https://es.wikipedia.org/wiki/Mellisuga_helenae"
          />
        </div>
        <div className="col-10 col-md-6 col-xl-3 p-0">
          <Carta
            tittle="TAIPÁN"
            content="El taipán es una de las serpientes más venenosas y peligrosas, nativa de Australia."
            buttonLabel="IR A WIKIPEDIA"
            img="https://www.infoserpientes.com/Imagenes/taipan-del-interior.jpg"
            link="https://es.wikipedia.org/wiki/Oxyuranus_microlepidotus"
          />
        </div>
        <div className="col-10 col-md-6 col-xl-3 p-0">
          <Carta
            tittle="TU MAMÁ"
            content="Uno de los animales más pesados, sino el más pesado, llegando a pesar 7 toneladas."
            buttonLabel="IR A INCICLOPEDIA"
            img="https://s1.eestatic.com/2019/04/24/social/la_jungla_-_social_393471719_121170685_864x486.jpg"
            link="https://inciclopedia.org/wiki/Madre"
          />
        </div>
      </div>
    </div>
  );
};

const Carta = (props) => {
  return (
    <div className="card text-center m-2">
      <img src={props.img} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.tittle}</h5>
        <p className="card-text">{props.content}</p>
      </div>
      <div className="card-footer">
        <a href={props.link} target="_blank" className="btn btn-primary">
          {props.buttonLabel}
        </a>
      </div>
    </div>
  );
};

Carta.propTypes = {
  tittle: propTypes.string,
  content: propTypes.string,
  buttonLabel: propTypes.string,
  link: propTypes.string,
};

export default GrupoCartas;

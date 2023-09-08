import React from "react";

const Home = (props) => {
  return (
    <section className="home" id='home'>
      <div className="home__container">
        <h1 className="home__title">“Música para el alma”</h1>
        <h2 className="home__subtitle"> Sumérgete en el universo musical</h2>
        <p className="home__registration">
          "Deja que la música te guíe. ¡Regístrate y déjate llevar!"
        </p>
        <button className="button button__text" onClick={props.OpenRegister}>
          Registrate AQUI!!!
        </button>
      </div>
    </section>
  );
};

export default Home;

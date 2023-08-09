import React from "react";
import logo from "../images/Logo pagina.png";
import { useMatch } from "react-router-dom";

const Header = (props) => {
  return (
    <>
      <header
        className={`header ${props.userLogin ? "header__header-user" : ""}`}
      >
        <img className="header__logo" alt="Logo Music and Music" src={logo} />
        {props.userLogin ? (
          <img
            className="header__image-user"
            alt="foto de usuario"
            src={""}
          ></img>
        ) : (
          ""
        )}
        {props.children}
        {useMatch("homePage") && (
          <button className="button button__text" onClick={props.OpenLogin}>
            Login
          </button>
        )}
        {useMatch("/") && (
          <button
            className="button button__text"
            onClick={console.log("cierro secion perro")}
          >
            Cerrar Seccion
          </button>
        )}

        <div className="header__blur"></div>
      </header>
    </>
  );
};

export default Header;

import React, { useEffect} from "react";
import logo from "../images/Logo pagina.png";
import { useMatch } from "react-router-dom";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";
const Header = (props) => {
  const CurrentUser = React.useContext(CurrentUserContext);
  useEffect(() => {});
  return (
    <>
      <header
        className={`header ${props.userLogin ? "header__header-user" : ""}`}
      >
        <img className="header__logo" alt="Logo Music and Music" src={logo} />
        {props.userLogin ? (
          <>
            <img
              className="header__image-user"
              alt="foto de usuario"
              src={CurrentUser.avatar}
            />
            <h2 className="header__name-user">{CurrentUser.name}</h2>
          </>
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
          <button className="button button__text" onClick={props.CloseSection}>
            Cerrar Seccion
          </button>
        )}

        <div className="header__blur"></div>
      </header>
    </>
  );
};

export default Header;

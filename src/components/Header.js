import React from "react";
import logo from '../images/Logo pagina.png'
const Header = (props) => {
  return (
    <>
    <div className="header">
        <img className="header__logo" alt="Logo Music and Music" src={logo}/>
        {props.children}
        <button className="button button__text" onClick={props.OpenLogin}>
            Login 
        </button>
        <div className="header__blur"></div>
      </div>
    </>
  );
};

export default Header;

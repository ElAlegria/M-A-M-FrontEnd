import React from "react";
import logo from '../images/Logo pagina.png'
const Header = () => {
  return (
    <>
    <div className="header">
        <img className="header__logo" src={logo}/>
        <div >
        <button className="button button__text">
            Home 
        </button>
        <button className="button button__text">
            Home 
        </button>
        </div>
        <button className="button button__text">
            Home 
        </button>
      </div>
    </>
  );
};

export default Header;

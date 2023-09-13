import React from "react";
import logoMAM from "../images/Logo_footer.png";
const Footer = (props) => {
  return (
    <>
      <footer className={`Footer ${props.footerUser ?"Footer__user":""}`}>
        <img
          className="Footer__logo"
          src={logoMAM}
          alt="Logo Music and Music"
        />
        <p className="Footer__copyright">
          @ 2023 Music and Music | Design by ElAlegria
        </p>
      </footer>
    </>
  );
};

export default Footer;

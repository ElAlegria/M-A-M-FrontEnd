import React from "react";
import ImageFront from "../images/investment-949111_1920.jpg";

const Homepage = (props) => {
  return (
    <>
      <div className="homepage">
        <img
          className="homepage__image"
          alt="imagen de la portada"
          src={ImageFront}
        ></img>
        {props.children}
      </div>
    </>
  );
};

export default Homepage;

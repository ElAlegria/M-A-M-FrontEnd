import React from "react";

const Into = (props) => {
  return (
    <>
      <div className={`Into ${props.reverse ? 'Into__reverse': ''}`}>
        <div className="Into__container">
        <h2 className="Into__title">{props.title}</h2>
        <ul className="Into__list">
          <li className="Into__text">{props.text1}</li>
          <li className="Into__text">{props.text2}</li>
          <li className="Into__text">{props.text3}</li>
        </ul>
        </div>
        <img className="Into__image" alt={props.title} src={props.image} />
      </div>
    </>
  );
};

export default Into;

import React, { useContext } from "react";
// import { CurrentUserContext } from "../Context/CurrentUserContext";

const Card = ({ card }) => {
  const [isLike, setIsLike] = React.useState(false);

  const handleLikeClick = () => {
    setIsLike(!isLike);
  };
  return (
    <>
      <li key={card._id} className="card">
        <img src={card.link} alt={card.name} className="card__image" />
        <div className="card__information">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-container">
            <button
              type="button"
              className={`card__like-button ${
                isLike ? "card__like-button_on" : ""
              }`}
              onClick={handleLikeClick}
            ></button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Card;

// , onCardClick, like, onCardLike, onDeleteCard    
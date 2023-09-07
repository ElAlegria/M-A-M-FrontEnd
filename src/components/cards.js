import React from "react";

const Card = ({ card }) => {
  const [isLike, setIsLike] = React.useState(true);

  const handleLikeClick = () => {
    setIsLike(!isLike);
    card.like = isLike;
  };

  return (
    <>
      <li key={card.id} className="card">
        <img src={card.image} alt={card.title} className="card__image" />
        <div className="card__information">
          <h2 className="card__title">{card.title}</h2>
          <div className="card__like-container">
            <button
              type="button"
              className={`card__like-button ${
                card.like ? "card__like-button_on" : ""
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

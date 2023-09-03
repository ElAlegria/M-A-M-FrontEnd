import React from "react";
import Card from "./cards";
const Main = ({ cards, myList }) => {

  const cardsGenerate = {
    card: cards
      .slice()
      .reverse()
      .map((card) => {
        return <Card key={card._id} card={card} onCardLike={card.likes} />
      }),
    cardFav: cards
      .filter((obj) => obj.likes === true)
      .map((card) => {
        return <Card key={card._id} card={card} onCardLike={card.likes} />;
      }),
  };

  return (
    <section className="Artist">
      <h2 className="Artist__title">
        "Artistas Destacados: Los Más Populares del Momento"
      </h2>
      <ul className="Artist__cards">{!myList ? cardsGenerate.card : cardsGenerate.cardFav}</ul>
    </section>
  );
};

export default Main;

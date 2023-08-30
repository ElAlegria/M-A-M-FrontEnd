import React from "react";
import Card from "./cards";
const Artist = ({ cards, MyArtistFav, onCardLike, myList }) => {
  const cardsGenerate = (items) =>
    items
      .slice()
      .reverse()
      .map((card) => {
        return <Card key={card._id} card={card} onCardLike={onCardLike} />;
      });

  return (
    <section className="Artist">
      <h2 className="Artist__title">
        "Artistas Destacados: Los Más Populares del Momento"
      </h2>
      <ul className="Artist__cards">
        {myList ? cardsGenerate(MyArtistFav) : cardsGenerate(cards)}
      </ul>
    </section>
  );
};

export default Artist;

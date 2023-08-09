import React, { useState } from "react";
import Card from "./Cards";
import { useMatch } from "react-router-dom";
const Artist = ({ cards,MyArtistFav, onCardLike, myList }) => {
  const cardsGenerate = (items) =>
    items
      .slice()
      .reverse()
      .map((card) => {
        return (
          <Card
            key={card._id}
            card={card}
            // onCardClick={onCardClick}
            onCardLike={onCardLike}
            // onDeleteCard={onDeleteCard}
          />
        );
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

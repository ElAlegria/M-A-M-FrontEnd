import React from "react";
import Card from "./cards";
const Main = ({ cards, myList, handleOnSearch, MyFavCards}) => {
  const [search, setSearch] = React.useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const cardsGenerate = {
    card: cards
      .slice()
      .reverse()
      .map((card) => {
        return <Card key={card.id} card={card} onCardLike={card.likes} />;
      }),
    cardFav: MyFavCards.map((card) => {
      return <Card key={card.id} card={card} onCardLike={card.like} />;
    }),
  };

  return (
    <section className="Artist">
      <h2 className="Artist__title">
        "Artistas Destacados: Los Más Populares del Momento"
      </h2>
      <div className={`${!myList ? "Artist__search-container" : "Artist__Off"}`}>
        <input
          className="Artist__search-input"
          type="text"
          name="search"
          onChange={handleChange}
          placeholder="Buscar..."
        />
        <button
          className="Artist__search-button"
          onClick={() => {
            return handleOnSearch(search);
          }}
        >
        </button>
      </div>
      <ul className="Artist__cards">
        {!myList ? cardsGenerate.card : cardsGenerate.cardFav}
      </ul>
    </section>
  );
};

export default Main;

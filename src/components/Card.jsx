import { useState, useEffect } from "react";

import "../styles/card.css";

export default function Card({ pokemon, shuffle, handleScore }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
          { mode: "cors" }
        );
        const pokeData = await response.json();
        if (!ignore) {
          setSrc(pokeData.sprites.other["official-artwork"].front_default);
        }
      } catch {
        console.log("error");
      }
    })();
    return () => (ignore = true);
  }, [pokemon]);

  return (
    <div
      onClick={() => {
        shuffle();
        handleScore(pokemon);
      }}
      className="card"
    >
      {src ? <img src={src} alt={pokemon} /> : <p>Loading...</p>}
      <div className="poke-ball"></div>
    </div>
  );
}

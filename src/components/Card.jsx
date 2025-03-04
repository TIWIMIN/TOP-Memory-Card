import { useState, useEffect } from "react";

export default function Card({ pokemon, shuffle, handleScore }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
          { mode: "cors" }
        );
        const pokeData = await response.json();
        setSrc(pokeData.sprites.other["official-artwork"].front_default);
      } catch {
        console.log("error");
      }
    })();
  }, [pokemon]);

  return (
    <div
      onClick={() => {
        shuffle();
        handleScore(pokemon);
      }}
    >
      {src ? <img src={src} alt={pokemon} /> : <p>Loading...</p>}
    </div>
  );
}

import { useState, useEffect } from "react";

export default function Card({ pokemon, shuffle }) {
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
      } catch {}
    })();
  }, []);

  return (
    <div onClick={() => shuffle()}>
      {src ? <img src={src} alt={pokemon} /> : <p>Loading...</p>}
    </div>
  );
}

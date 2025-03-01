import { useState, useEffect } from "react";

export default function Card() {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        setSrc(response.sprites.other["official-artwork"].front_default);
      });
  }, []); 

  return (
    <div>
      {src ? <img src={src} alt="Ditto" /> : <p>Loading...</p>}
    </div>
  );
}

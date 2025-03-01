import { useState, useEffect } from "react";

import Card from "./Card.jsx";

export default function Board() {
  const [pokeIndexes, setPokeIndexes] = useState([]);

  const setBoard = () => {
    let pokeIndexAvailable = [];
    const tempPokeIndexes = [];
    for (let i = 0; i < 1025; i++) {
      pokeIndexAvailable.push(i + 1);
    }
    for (let i = 0; i < 16; i++) {
      const randomPokeIndex =
        pokeIndexAvailable[
          Math.floor(Math.random() * pokeIndexAvailable.length)
        ];
      pokeIndexAvailable = pokeIndexAvailable.filter(
        (index) => index !== randomPokeIndex
      );
      tempPokeIndexes.push(randomPokeIndex);
    }
    setPokeIndexes(tempPokeIndexes);
  };

  useEffect(() => {
    setBoard();
    console.log("hi");
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setBoard();
        }}
      >
        RESET BOARD
      </button>
      {pokeIndexes.map((pokeIndex) => (
        <Card pokemon={pokeIndex} key={pokeIndex} />
      ))}
    </>
  );
}

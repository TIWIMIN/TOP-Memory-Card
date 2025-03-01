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

  const fisherYatesShuffle = () => {
    const tempPokeIndexes = [...pokeIndexes];
    for (let i = 0; i < tempPokeIndexes.length; i++) {
      const swapIndex =
        Math.floor(Math.random() * (tempPokeIndexes.length - i)) + i;
      const tempValue = tempPokeIndexes[swapIndex];
      tempPokeIndexes[swapIndex] = tempPokeIndexes[i];
      tempPokeIndexes[i] = tempValue;
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
        <Card
          pokemon={pokeIndex}
          key={pokeIndex}
          shuffle={fisherYatesShuffle}
        />
      ))}
    </>
  );
}

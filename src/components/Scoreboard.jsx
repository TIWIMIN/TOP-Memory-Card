import { useState } from "react";

export default function Scoreboard({ pokeSet }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  if (pokeSet.size !== score) setScore(pokeSet.size);
  if (score > bestScore) setBestScore(score);
  return (
    <>
      <h3>current score: {score}</h3>
      <h3>best score: {score}</h3>
    </>
  );
}

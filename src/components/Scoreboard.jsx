import { useState } from "react";

export default function Scoreboard({ pokeSet }) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  if (pokeSet.size !== score) setScore(pokeSet.size);
  if (score > bestScore) setBestScore(score);
  return (
    <>
      <h3 className="score">current score: {score}</h3>
      <h3 className="score">best score: {score}</h3>
    </>
  );
}

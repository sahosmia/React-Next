import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [currentMove, setCurrentMove] = useState(0);
  const xIs = currentMove % 2 === 0;

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    setHistory([...history, nextSquares]);
    setCurrentMove(nextHistory.length - 1);
    console.log(nextSquares);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="">
      <div className="">
        <Board xIs={xIs} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;

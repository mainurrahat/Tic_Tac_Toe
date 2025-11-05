import React, { useState } from "react";
import Square from "./Square.jsx";

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [XIsnext, setXIsnext] = useState(true);
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (XIsnext ? "X" : "O");
  }
  function handClick(i) {
    if (square[i] || calculateWinner(square)) {
      return;
    }
    const nextSquare = square.slice();
    if (XIsnext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }

    setSquare(nextSquare);
    setXIsnext(!XIsnext);
  }
  function calculateWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

  return (
    <>
      <div>{status}</div>
      <div className="grid grid-cols-3 gap-0.5 w-max mx-auto mt-4">
        <Square value={square[0]} onSquareClick={() => handClick(0)}></Square>
        <Square value={square[1]} onSquareClick={() => handClick(1)}></Square>
        <Square value={square[2]} onSquareClick={() => handClick(2)}></Square>
        <Square value={square[3]} onSquareClick={() => handClick(3)}></Square>
        <Square value={square[4]} onSquareClick={() => handClick(4)}></Square>
        <Square value={square[5]} onSquareClick={() => handClick(5)}></Square>
        <Square value={square[6]} onSquareClick={() => handClick(6)}></Square>
        <Square value={square[7]} onSquareClick={() => handClick(7)}></Square>
        <Square value={square[8]} onSquareClick={() => handClick(8)}></Square>
      </div>
    </>
  );
}

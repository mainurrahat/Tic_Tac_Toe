import React from "react";
import Square from "./Square.jsx";

export default function Board() {
  const [square, setSquare] = React.useState(Array(9).fill(null));
  function handClick(i) {
    const nextSquare = square.slice();
    nextSquare[i] = "X";
    setSquare(nextSquare);
  }

  return (
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
  );
}

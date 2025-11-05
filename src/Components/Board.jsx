import React, { useState, useEffect } from "react";
import Square from "./Square.jsx";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [XIsnext, setXIsnext] = useState(true);
  const winner = calculateWinner(square);

  // 🧠 Show toast only when winner appears
  useEffect(() => {
    if (winner) {
      toast.success(`🎉 Winner: ${winner}!`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  }, [winner]);

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
    nextSquare[i] = XIsnext ? "X" : "O";
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
      <div className="text-center text-xl font-semibold">{status}</div>

      <div className="grid grid-cols-3 gap-0.5 w-max mx-auto mt-4">
        {square.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => handClick(index)}
          />
        ))}
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}

import React from "react";
import Square from "./Square";

export default function Board() {
  return (
    <div className="grid grid-cols-3 gap-0.5 w-max mx-auto mt-4">
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </div>
  );
}

import React from "react";
import Square from "./Square.jsx";

export default function Board() {
  return (
    <div className="grid grid-cols-3 gap-0.5 w-max mx-auto mt-4">
      <Square Value="1"></Square>
      <Square Value="2"></Square>
      <Square Value="3"></Square>
      <Square Value="4"></Square>
      <Square Value="5"></Square>
      <Square Value="6"></Square>
      <Square Value="7"></Square>
      <Square Value="8"></Square>
      <Square Value="9"></Square>
    </div>
  );
}

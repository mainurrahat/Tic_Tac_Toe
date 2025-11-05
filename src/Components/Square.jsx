import React from "react";
function hanleClick() {
  alert("Square clicked!");
}
const Square = ({ Value }) => {
  return (
    <div>
      <button
        onClick={hanleClick}
        className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
      >
        {Value}
      </button>
    </div>
  );
};

export default Square;

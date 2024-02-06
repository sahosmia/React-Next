import React from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="border border-black w-20 h-20 font-bold text-lg"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;

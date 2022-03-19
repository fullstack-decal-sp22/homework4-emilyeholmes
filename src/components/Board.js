import React, { useState } from "react";
import './styles/Board.css';
import Square from "./Square";

function Board() {

  const [count, setCount] = useState(0);
  let squares = [null] * 9;

  function getTurn() {
    if (count % 2 == 0) {
      return "X";
    } else {
      return "O";
    }
  }

  let status = `Next player: ${getTurn()}`;

  function handleClick(i) {
    setCount(count + 1);
  }

  function renderSquare(i) {
    return <Square func={handleClick} count={count} />;
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div class="status" className="status">{status}</div>
    </div>
  )
}

export default Board;
import React, { useState } from "react";
import './styles/Board.css';
import Square from "./Square";

function Board() {

  const [count, setCount] = useState(0);
  const [squares, setSquares] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);

  function getTurn() {
    if (count % 2 === 0) {
      return "X";
    } else {
      return "O";
    }
  }

  //  let status = `Next player: ${getTurn()}`;
  const [status, setStatus] = useState(`Next player: ${getTurn()}`);

  function handleClick(i) {
    setCount(count + 1);
    let squarey = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    let j;
    for (j = 0; j < squares.length; j++) {
      squarey[j] = squares[j]
    }
    squarey[i] = getTurn();
    setSquares(squarey);
  }

  function calculateWinner(squares) {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setStatus(`Winner: ${calculateWinner(squares)}`);
        return squares[a];
      }
    }
    return null;
  }

  function renderSquare(i) {
    return <Square func={handleClick} count={count} num={i} check={calculateWinner} squares={squares} />;
  }

  function checkWin() {
    if (calculateWinner(squares) != null) {
      status = `Winner: ${calculateWinner(squares)}`;
    } else {
      status = `Next player: ${getTurn()}`
    }
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
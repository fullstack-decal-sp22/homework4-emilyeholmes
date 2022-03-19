import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './styles/Square.css';

// function switchPlayer(letter) {
//     if (letter === "X") {
//         return "O";
//     }
//     else {
//         return "X";
//     }
// }

// this.handleClick = this.handleClick.bind(this);



// function handleClick() {
//     this.setCount(this.count + 1);
//     this.setSquareText(getText());
// }

function Square(props) {

    const [clicked, setClicked] = useState(false);
    const [squareText, setSquareText] = useState(" ");

    function getText(props) {
        if ((props.count % 2) === 0) {
            return "X";
        } else {
            return "O";
        }
    }

    return (
        <button className="square" onClick={() => {
            if (clicked === false) {
                setClicked(true);
                setSquareText(getText(props));
                props.func(props.num);
                props.check(props.squares);
            }
        }}>
            {squareText}
        </ button>
    )
}

export default Square;
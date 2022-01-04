import React, { useState } from 'react';
import './TicTacToe.css';

function TicTacToe() {
  const emptyBoard = Array(9).fill("");
  const [board, setboard] = useState(emptyBoard);
  const handleCellClick = (index) => {
    setboard(board.map((item, itemIndex) => itemIndex === index ? "X" : item));
  }
  return (
    <main>
       <h1 className='title' >jogo da velha</h1>
    <div className='board'>
   {board.map((item, index) => (
      <div
     key={index}
       className= {`cell ${item}`}
       onClick={() => handleCellClick(index)}
       >
         {item}
     </div>
   ))}
    </div>
    </main>
  );
}

export default TicTacToe;

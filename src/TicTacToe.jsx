import React, { useEffect, useState } from 'react';
import './TicTacToe.css';

function TicTacToe() {

  const emptyBoard = Array(9).fill("");
  const [board, setboard] = useState(emptyBoard);


  const [currentPlayer, setCurrentPlayer] = useState("O");
  const [winner, setWinner] = useState(null);

  const handleCellClick =
    (index) => {
      if (winner) {
        console.log("Jogo Finalizado");
        return null;
      }

      if (board[index] !== "") {
        console.log("Posição Ocupada");
        return null;
      }

      setboard(board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item));
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }
  //função para verificar se ganhou o jogo
  const checkWinner = () => {
    const possibleWaysToWin = [    //possibilidades de vencer
      [board[0], board[1], board[2]],    //horizontal
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],

      [board[0], board[3], board[6]],    //vertical
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],

      [board[0], board[4], board[8]],    //diagonal
      [board[2], board[4], board[6]],
    ];

    possibleWaysToWin.forEach(cells => {
      if (cells.every(cell => cell === "O")) setWinner("O");
      if (cells.every(cell => cell === "X")) setWinner("X");
    });
   
  }
  const checkDraw = () => {
    if (board.every((cell) => cell !== "") && winner === null) {
      setWinner("E");
    }
  };
  checkDraw();
  useEffect(checkWinner, [board]);

  const resetGame = () => {
    setCurrentPlayer("O");
    setboard(emptyBoard);
    setWinner(null);

  }


  return (
    <main>
      <h1 className='title' >jogo da velha</h1>
      <div className={`board ${winner ? "game-over" : ""}`}>
        {board.map((item, index) => (
          <div
            key={index}
            className={`cell ${item}`}
            onClick={() => handleCellClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      {winner &&
        <footer>
          {winner === "E" ? 
          <h2 className="winner-message">
            <span className={winner}>Empatou!</span>
          </h2>
          :
          <h2 className="winner-message">
              <span className={winner}> {winner} </span>venceu!
          </h2>
          }
          <button onClick={resetGame}> Recomeçar jogo!</button>
        </footer>
      }
    </main>
  );
}

export default TicTacToe;

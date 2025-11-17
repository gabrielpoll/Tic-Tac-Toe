let Cell = () => {
  let value = "";

  const getValue = () => value;
  const setValue = (symbol) => value = symbol;
  const isEmpty = () => value === "";

  return { getValue, setValue, isEmpty };
};

let Gameboard = () => {
  const board = [];
  for (let i = 0; i < 3; i++) {
    board[i] = [];
    for (let ii = 0; ii < 3; ii++) {
      board[i][ii] = Cell();
    }
  };
  return { board };
};

let Player = (name, symbol) => {
  let playerName = name;
  let playerSymbol = symbol;
  let playerTurn = false;
  let wins = 0;

  const getName = () => playerName;

  const getSymbol = () => playerSymbol;

  const isTurn = () => playerTurn;

  const setTurn = (bool) => {
    playerTurn = bool;
  };

  const addWin = () => {
    wins++;
  };

  const getWins = () => wins;

  return {
    getName,
    getSymbol,
    isTurn,
    setTurn,
    addWin,
    getWins
  };
};
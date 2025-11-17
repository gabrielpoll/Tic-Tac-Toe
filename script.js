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

let GameController = () => {
  const board = Gameboard();
  const player1 = Player("Player 1", "X");
  const player2 = Player("Player 2", "O")

  player1.setTurn(true);
  player2.setTurn(false);

  const playMove = (row, col) => {
    const cell = board.board[row][col];
    if (!cell.isEmpty()) return;

    const currentPlayer = player1.isTurn() ? player1 : player2;
    cell.setValue(currentPlayer.getSymbol());
  };

  const switchPlayer = () => {
    if (player1.isTurn()) {
      player1.setTurn(false);
      player2.setTurn(true);
    } else {
        player2.setTurn(false);
        player1.setTurn(true);
    }
  };

  const checkWinner = () => {};

  const checkTie = () => {};

  const resetGame = () => {};

  const getBoard = () => {};

  return {
    playMove,
    switchPlayer,
    checkWinner,
    checkTie,
    resetGame,
    getBoard
  };
};
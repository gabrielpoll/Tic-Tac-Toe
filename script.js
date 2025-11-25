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

  const resetWins = () => wins = 0;

  const getWins = () => wins;

  return {
    getName,
    getSymbol,
    isTurn,
    setTurn,
    addWin,
    getWins,
    resetWins
  };
};

let GameController = () => {
  let board = Gameboard();
  let player1 = Player("Player 1", "X");
  let player2 = Player("Player 2", "O")

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

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      const row = board.board[i];
      const a = row[0].getValue();
      const b = row[1].getValue();
      const c = row[2].getValue();
      if (a === b && b === c && a !== "") {
        return a;
      }
    };
    for (let i = 0; i < 3; i++) {
      const a = board.board[0][i].getValue();
      const b = board.board[1][i].getValue();
      const c = board.board[2][i].getValue();
      if (a === b && b === c && a !== "") {
        return a;
      }
    }
    let a = board.board[0][0].getValue();
    let b = board.board[1][1].getValue();
    let c = board.board[2][2].getValue();
    if (a === b && b === c && a !== "") {
      return a;
    };

    let aa = board.board[0][2].getValue();
    let bb = board.board[1][1].getValue();
    let cc = board.board[2][0].getValue();
    if (aa === bb && bb === cc && aa !== "") {
      return aa;
    };

    return null;
  };

  const checkTie = () => {
    let checkWin = checkWinner();
    if (checkWin !== null) {
      return false;
    };

    for (let i = 0; i < 3; i++) {
      for (let ii = 0; ii < 3; ii++) {
        let cell = board.board[i][ii];
        if (cell.isEmpty()) {
          return false;
        }
      }
    }
    return true;
  };

  const resetGame = () => {
    for (let i = 0; i < 3; i++) {
      for (let ii = 0; ii < 3; ii++) {
        let cell = board.board[i][ii];
        cell.setValue("");
      }
    }
    player1.setTurn(true);
    player2.setTurn(false);
  };

  const getBoard = () => board;

  return {
    playMove,
    switchPlayer,
    checkWinner,
    checkTie,
    resetGame,
    getBoard
  };
};
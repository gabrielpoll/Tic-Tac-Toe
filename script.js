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

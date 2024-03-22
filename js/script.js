const gameBoard = (function() {
    // 2D array for gameboard
    let board = [];
    let rows = 3;
    let columns = 3;

    for (let i = 0; i < rows; i++) {
        board[i] = [];

        for (let j = 0; j < columns; j++) {
            board[i][j] = j;                    // temp value
        }
    };

})();
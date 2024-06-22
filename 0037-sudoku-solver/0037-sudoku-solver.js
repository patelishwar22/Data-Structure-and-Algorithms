function solveSudoku(board) {
    function isValid(row, col, num) {
        // Check if the number already exists in the row or column
        for (let i = 0; i < 9; i++) {
            if (board[row][i] == num || board[i][col] == num) {
                return false;
            }
        }
        
        // Check if the number already exists in the 3x3 sub-box
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[startRow + i][startCol + j] == num) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    function backtrack(row, col) {
        if (row == 9) {
            return true;
        }
        
        if (col == 9) {
            return backtrack(row + 1, 0);
        }
        
        if (board[row][col] != '.') {
            return backtrack(row, col + 1);
        }
        
        for (let num = 1; num <= 9; num++) {
            if (isValid(row, col, num.toString())) {
                board[row][col] = num.toString();
                if (backtrack(row, col + 1)) {
                    return true;
                }
                board[row][col] = '.';
            }
        }
        
        return false;
    }
    
    backtrack(0, 0);
}
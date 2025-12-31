function hasFourLights(board: string[][]): boolean {
  const rows = board.length
  const cols = board[0].length

  // Go through the light board
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const color = board[i][j]
      if (color === '.') continue

      //* Validate 4 in a horizontal line (cols)
      if (j + 3 < cols) {
        let count = 1

        for (let k = 1; k <= 3; k++) {
          if (board[i][j + k] === color) {
            count += 1
          } else {
            break
          }
        }

        if (count === 4) return true
      }

      //* Validate 4 in a vertical line (rows)
      if (i + 3 < rows) {
        let count = 1

        for (let k = 1; k <= 3; k++) {
          if (board[i + k][j] === color) {
            count += 1
          } else {
            break
          }
        }

        if (count === 4) return true
      }
    }
  }

  return false
}

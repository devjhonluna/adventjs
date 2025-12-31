function hasFourInARow(board: string[][]): boolean {
  const rows = board.length
  const cols = board[0].length

  const directions:number[][] = [
    [0, 1], // horizontal
    [1, 0], // vertical
    [1, 1], // diagonal derecha
    [1, -1] // diagonal izquierda
  ]

  function checkLine(row, col, color, stepRow, stepCol) {
    for (let k = 1; k < 4; k++) {
      const newRow = row + stepRow * k
      const newCol = col + stepCol * k

      if (
        newRow < 0 ||
        newRow >= rows ||
        newCol < 0 ||
        newCol >= cols ||
        board[newRow][newCol] !== color
      ) {
        return false
      }
    }
    return true
  }

  // Recorrer el tablero
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const color = board[i][j]
      if (color === '.') continue

      // Verificar 4 en línea en todas las direcciones
      for (const [dr, dc] of directions) {
        if (checkLine(i, j, color, dr, dc)) {
          return true
        }
      }
    }
  }

  return false

}

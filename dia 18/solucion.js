/*
El panel de luces navideñas 🎄✨ del taller ha sido un éxito total. Pero los elfos quieren ir un paso más allá: ahora quieren detectar si hay una línea de 4 luces del mismo color también en diagonal.

El panel sigue siendo una matriz donde cada celda puede ser:

'.' → luz apagada
'R' → luz roja
'G' → luz verde
Ahora tu función debe devolver true si existe una línea de 4 luces del mismo color encendidas y alineadas, ya sea horizontal ↔, vertical ↕ o diagonal ↘↙.
*/

function hasFourInARow(board) {
  const rows = board.length
  const cols = board[0].length

  const directions = [
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

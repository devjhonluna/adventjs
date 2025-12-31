/*
En el Polo Norte han montado un panel de luces navideñas 🎄✨ para decorar el taller. Cada luz puede estar encendida con un color o apagada.

El panel se representa como una matriz donde cada celda puede ser:

'.' → luz apagada
'R' → luz roja
'G' → luz verde
Los elfos quieren saber si en el panel existe una línea de 4 luces del mismo color encendidas y alineadas (solo horizontal ↔ o vertical ↕). Las luces apagadas ('.') no cuentan.
*/

function hasFourLights(board) {
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

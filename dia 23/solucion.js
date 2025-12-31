/*
Papá Noel 🎅 tiene que repartir regalos en un pueblo representado como un mapa en cuadrícula.

Cada celda del mapa puede ser:

'S' → Punto de partida de Papá Noel
'G' → Casa que debe recibir un regalo
'.' → Camino libre
'#' → Obstáculo (no se puede pasar)
Papá Noel realiza entregas independientes para cada regalo. Sale de 'S', entrega el regalo en una casa 'G' y vuelve inmediatamente a 'S' para recoger el siguiente. Sin embargo, para este reto, solo queremos calcular la suma de las distancias mínimas de ida desde 'S' hasta cada casa 'G'.

Tu tarea

Escribe la función minStepsToDeliver(map) que devuelva el número total de pasos necesarios para llegar a todas las casas con regalos desde la posición inicial.
*/

function minStepsToDeliver(map) {
  const rows = map.length
  const cols = map[0].length

  let startRow, startCol
  const giftPositions = []

  // 1. Buscar S y todas las casas G
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (map[r][c] === 'S') {
        startRow = r
        startCol = c
      }
      if (map[r][c] === 'G') {
        giftPositions.push([r, c])
      }
    }
  }

  // 2. BFS individual para cada casa G
  function bfsToGift(targetRow, targetCol) {
    // Matriz de visitados para este BFS específico
    const visited = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => false)
    )

    const queue = [[startRow, startCol, 0]]
    visited[startRow][startCol] = true

    while (queue.length > 0) {
      const [r, c, steps] = queue.shift()

      // Si encontramos la casa G específica
      if (r === targetRow && c === targetCol) {
        return steps
      }

      // Movimientos
      const moves = [
        [r - 1, c], // arriba
        [r + 1, c], // abajo
        [r, c - 1], // izquierda
        [r, c + 1] // derecha
      ]

      for (const [nr, nc] of moves) {
        if (
          nr >= 0 &&
          nr < rows &&
          nc >= 0 &&
          nc < cols &&
          map[nr][nc] !== '#' &&
          !visited[nr][nc]
        ) {
          visited[nr][nc] = true
          queue.push([nr, nc, steps + 1])
        }
      }
    }

    // Si no se alcanza esta casa G específica
    return -1
  }

  // 3. Ejecutar BFS para cada casa G y sumar distancias
  let totalSteps = 0

  for (const [giftRow, giftCol] of giftPositions) {
    const distance = bfsToGift(giftRow, giftCol)

    // Si alguna casa G es inalcanzable
    if (distance === -1) {
      return -1
    }

    totalSteps += distance
  }

  return totalSteps
}

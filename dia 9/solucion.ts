type Board = string
type Moves = string
type Result = 'fail' | 'crash' | 'success'

function moveReno(board: Board, moves: Moves): Result {
    const boardAway = board
    .split('\n')
    .slice(1, -1)
    .map((e) => e.split(''))
  const row = boardAway.findIndex((r) => r.includes('@'))
  const col = boardAway[row].indexOf('@')
  let puntoActual = [col, row] // Renombrado para claridad

  const movesMap = {
    U: [0, -1],
    D: [0, 1],
    L: [-1, 0],
    R: [1, 0]
  }

  for (const move of moves) {
    // 1. Obtenemos el vector de movimiento
    const desplazamiento = movesMap[move]

    // 2. Calculamos NUEVA posición sin modificar la actual
    const nuevaPosicion = [
      puntoActual[0] + desplazamiento[0], // Nueva columna
      puntoActual[1] + desplazamiento[1] // Nueva fila
    ]

    const [nuevaCol, nuevaFila] = nuevaPosicion // Desestructuración clara

    // 3. Verificamos si la nueva posición es inválida
    const fueraDeLimites =
      nuevaFila < 0 ||
      nuevaFila >= boardAway.length ||
      nuevaCol < 0 ||
      nuevaCol >= boardAway[0].length

    if (fueraDeLimites) {
      return 'crash'
    }

    // 4. Verificamos obstáculos y objetivo
    const celdaDestino = boardAway[nuevaFila][nuevaCol]

    if (celdaDestino === '#') {
      return 'crash'
    }

    if (celdaDestino === '*') {
      return 'success'
    }

    // 5. SOLO AHORA actualizamos la posición actual
    puntoActual = nuevaPosicion
  }

  return 'fail'
}

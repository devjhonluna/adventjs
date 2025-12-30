/*
Los elfos han construido un reno 🦌 robot aspirador (@) para limpiar un poco el taller de cara a las navidades.

El reno se mueve sobre un tablero para recoger cosas del suelo (*) y debe evitar obstáculos (#).

Recibirás dos parámetros:

board: un string que representa el tablero.
moves: un string con los movimientos: 'L' (izquierda), 'R' (derecha), 'U' (arriba), 'D' (abajo).
Reglas del movimiento:

Si el reno recoge algo del suelo (*) durante los movimientos → devuelve 'success'.
Si el reno se sale del tablero o choca contra un obstáculo (#) → devuelve 'crash'.
Si el reno no recoge nada ni se estrella → devuelve 'fail'.
Ten en cuenta que si el reno recoge algo del suelo, ya es 'success', indepentientemente de si en movimientos posteriores se chocase con un obstáculo o saliese del tabler.

Importante: Ten en cuenta que en el board la primera y última línea están en blanco y deben descartarse.
*/

function moveReno(board, moves) {
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

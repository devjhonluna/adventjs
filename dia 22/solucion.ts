function canEscape(maze: string[][]): boolean {
  const rows = maze.length
  const cols = maze[0].length

  // Encontrar la posición inicial de manera más eficiente
  let startPos = null
  for (let i = 0; i < rows && !startPos; i++) {
    for (let j = 0; j < cols && !startPos; j++) {
      if (maze[i][j] === 'S') {
        startPos = { row: i, col: j }
      }
    }
  }

  if (!startPos) return false // Si no hay punto inicial, no hay escape

  const visited = maze.map((row) => row.map(() => false))

  // DFS simplificado
  const DFS = (row:number, col:number) => {
    // Casos base en un solo lugar
    const isOutOfBounds = row < 0 || row >= rows || col < 0 || col >= cols
    if (isOutOfBounds || maze[row][col] === '#' || visited[row][col]) {
      return false
    }
    if (maze[row][col] === 'E') return true

    visited[row][col] = true

    // Usar array de direcciones para reducir repetición
    const directions = [
      [-1, 0], // Arriba
      [1, 0], // Abajo
      [0, -1], // Izquierda
      [0, 1] // Derecha
    ]

    // Buscar en todas las direcciones
    return directions.some(([dr, dc]) => DFS(row + dr, col + dc))
  }

  return DFS(startPos.row, startPos.col)
}

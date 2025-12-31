type Position = [number, number];
function minStepsToDeliver(map: string[][]): number {
  const rows: number = map.length;
  const cols: number = map[0].length;
  
  let startRow: number = -1;
  let startCol: number = -1;
  const giftPositions: Position[] = [];
  
  // 1. Buscar S y todas las posiciones de G
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (map[r][c] === 'S') {
        startRow = r;
        startCol = c;
      } else if (map[r][c] === 'G') {
        giftPositions.push([r, c]);
      }
    }
  }
  
  // Verificar que se encontró S
  if (startRow === -1 || startCol === -1) {
    return -1;
  }
  
  let totalSteps: number = 0;
  
  // 2. Ejecutar un BFS separado para cada G
  for (const [giftRow, giftCol] of giftPositions) {
    // BFS específico para esta G
    const visited: boolean[][] = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(false));
    
    const queue: [number, number, number][] = [[startRow, startCol, 0]];
    visited[startRow][startCol] = true;
    
    let foundDistance: number = -1;
    
    while (queue.length > 0) {
      const [r, c, steps] = queue.shift()!;
      
      // Si encontramos esta G específica
      if (r === giftRow && c === giftCol) {
        foundDistance = steps;
        break;
      }
      
      // Movimientos posibles
      const moves: Position[] = [
        [r - 1, c], // arriba
        [r + 1, c], // abajo
        [r, c - 1], // izquierda
        [r, c + 1]  // derecha
      ];
      
      for (const [nr, nc] of moves) {
        if (
          nr >= 0 && nr < rows &&
          nc >= 0 && nc < cols &&
          map[nr][nc] !== '#' &&
          !visited[nr][nc]
        ) {
          visited[nr][nc] = true;
          queue.push([nr, nc, steps + 1]);
        }
      }
    }
    
    // 3. Si esta G es inalcanzable, devolver -1 inmediatamente
    if (foundDistance === -1) {
      return -1;
    }
    
    // 4. Acumular las distancias mínimas
    totalSteps += foundDistance;
  }
  
  return totalSteps;
}

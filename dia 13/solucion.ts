type Factory = string[]
type Result = 'completed' | 'broken' | 'loop'
      
function runFactory(factory: Factory): Result {
  // Número de filas y columnas
    const rows = factory.length;
    const cols = factory[0].length;

    // Posición inicial
    let currentRow = 0;
    let currentCol = 0;

    // Set para posiciones visitadas
    const visited = new Set();

    // Bucle principal
    while (true) {
        // Verificar límites
        if (currentRow < 0 || currentRow >= rows || currentCol < 0 || currentCol >= cols) {
            return 'broken';
        }

        // Verificar si ya visitamos esta posición
        const posKey = `${currentRow},${currentCol}`;
        if (visited.has(posKey)) {
            return 'loop';
        }

        // Agregar a visitados
        visited.add(posKey);

        // Obtener el símbolo actual
        const symbol = factory[currentRow][currentCol];



        // Comprobar si es la salida
        if (symbol === '.') {
            return 'completed';
        }
        
        const moveSymbols={
          '>':currentCol++,
          '<':currentCol--,
          '^':currentRow--,
          'v':currentRow++,
        }

        // Mover según la dirección
        if (symbol === '>') {
            currentCol++;
        } else if (symbol === '<') {
            currentCol--;
        } else if (symbol === '^') {
            currentRow--;
        } else if (symbol === 'v') {
            currentRow++;
        }
        // No hay más símbolos, así que no necesitamos else
    }
}

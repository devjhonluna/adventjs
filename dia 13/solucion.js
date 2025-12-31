/*
Simula el recorrido de un regalo dentro de una fábrica y devuelve cómo termina. Para ello debes crear una función runFactory(factory).

factory es un string[] donde cada celda puede ser:

> < ^ v movimientos
. salida correcta
Ten en cuenta que todas las filas tienen la misma longitud y que no habrá otros símbolos.

El regalo siempre empieza en la posición (0,0) (arriba a la izquierda). En cada paso lee la celda actual y se mueve según la dirección. Si llega a una celda con un punto (.) significa que ha salido correctamente de la fábrica.

Resultado

Devuelve uno de estos valores:

'completed' si llega a un .
'loop' si visita una posición dos veces
'broken' si sale fuera del tablero
*/

function runFactory(factory) {
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

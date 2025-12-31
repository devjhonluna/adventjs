/*
¡El almacén vertical de Santa se ha modernizado! Ahora, además de apilar los regalos, hay un robot 🤖 en el almacen que recoje los regalos si hay una fila completa.

El almacén es una matriz con # regalos y . espacios vacíos. Debes crear una función clearGifts que reciba el estado del almacén y un array con las columnas donde se dejan caer los regalos.

Reglas de la caída:

El regalo cae por la columna indicada desde arriba.
Se coloca en la celda vacía (.) más baja de esa columna.
Si la columna está llena, el regalo se ignora.
Regla del robot de limpieza:

Si al colocar un regalo, una fila se completa totalmente con regalos (#), esa fila desaparece.
Todas las filas que estaban por encima de la fila eliminada bajan una posición.
Al eliminarse una fila, aparece una nueva fila vacía (.) en la parte superior para mantener el tamaño del almacén.
*/

function clearGifts(warehouse, drops) {
  function cleanFullRows() {
    const cols = warehouse[0].length
    let row = warehouse.length - 1

    while (row >= 0) {
      if (warehouse[row].every((cell) => cell === '#')) {
        warehouse.splice(row, 1)
        warehouse.unshift(new Array(cols).fill('.'))
      } else {
        row--
      }
    }
  }

  // Iterate over each column in which a gift is left
  drops.forEach((colIndex) => {
    // Search the column for the first "." from the bottom up
    for (let row = warehouse.length - 1; row >= 0; row--) {
      const item = warehouse[row][colIndex]

      // If the "." is found, the gift is given; otherwise, it is ignored
      if (item === '.') {
        warehouse[row][colIndex] = '#'
        cleanFullRows()
        break
      }
    }
  })

  return warehouse
}

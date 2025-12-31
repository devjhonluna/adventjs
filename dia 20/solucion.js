/*
En el taller de Santa, los elfos están guardando regalos 🎁 en un almacén vertical. Los regalos se dejan caer uno a uno por una columna y se van apilando.

El almacén es una matriz con # regalos y . espacios vacíos. Debes crear una función dropGifts que reciba el estado del almacén y un array con las columnas donde se dejan caer los regalos.

Reglas de la caída:

El regalo cae por la columna indicada desde arriba.
Se coloca en la celda vacía (.) más baja de esa columna.
Si la columna está llena, el regalo se ignora.
*/

function dropGifts(warehouse, drops) {
  const resultado = warehouse.map(fila => [...fila]);
  
  drops.forEach(col => {
    for (let i = resultado.length - 1; i >= 0; i--) {
      if (resultado[i][col] === '.') {
        resultado[i][col] = '#';
        return; // Sale del forEach para este regalo
      }
    }
  });
  
  return resultado;
}

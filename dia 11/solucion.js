/*
El grinch quiere robar los regalos de Navidad del almacén. Para ello necesita saber qué regalos no tienen vigilancia.

El almacén se representa como un array de strings (string[]), donde cada regalo (*) está protegido si su posición está junto a una cámara (#). Cada espacio vacío se representa con un punto (.).

Tu tarea es contar cuántos regalos están sin vigilancia, es decir, que no tienen ninguna cámara adyacente (arriba, abajo, izquierda o derecha).

Ten en cuenta: solo se considera como "adyacente" las 4 direcciones cardinales, no en diagonal.

Los regalos en las esquinas o bordes pueden estar sin vigilancia, siempre que no tengan cámaras directamente al lado.
*/

function findUnsafeGifts(warehouse) {
  let count = 0
  for (let indexV = 0; indexV < warehouse.length; indexV++) {
    let row = warehouse[indexV]

    for (let indexH = 0; indexH < row.length; indexH++) {
      let char = row[indexH]

      if (
        char === '*' &&
        ![
          warehouse[indexV + 1]?.[indexH],
          warehouse[indexV - 1]?.[indexH],
          warehouse[indexV]?.[indexH + 1],
          warehouse[indexV]?.[indexH - 1]
        ].includes('#')
      ) {
        count++
      }
    }
  }

  return count
}

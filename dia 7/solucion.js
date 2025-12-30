/*
¡Es hora de decorar el árbol de Navidad 🎄! Escribe una función que reciba:

height → la altura del árbol (número de filas).
ornament → el carácter del adorno (por ejemplo, "o" o "@").
frequency → cada cuántas posiciones de asterisco aparece el adorno.
El árbol se dibuja con asteriscos *, pero cada frequency posiciones, el asterisco se reemplaza por el adorno.

El conteo de posiciones empieza en 1, desde la copa hasta la base, de izquierda a derecha. Si frequency es 2, los adornos aparecen en las posiciones 2, 4, 6, etc.

El árbol debe estar centrado y tener un tronco # de una línea al final. Cuidado con los espacios en blanco, nunca hay al final de cada línea.
*/

function drawTree(height, ornament, frequency) {
  let counter = 1
  let tree = ''

  for (let i = 1; i <= height; i++) {
    // Calculate the number of characters and spaces in each row
    const charactersNumber = 2 * i - 1
    const spacesNumber = height - i
    let row = ' '.repeat(spacesNumber)

    // Iterate through each character in that row to decide which character to place
    for (let j = 0; j < charactersNumber; j++) {
      row += counter % frequency === 0 ? ornament : '*'
      counter++
    }

    tree += row + '\n'
  }

  tree += ' '.repeat(height - 1) + '#'
  return tree
}

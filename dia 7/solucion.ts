function drawTree(height: number, ornament: string, frequency: number): string {
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

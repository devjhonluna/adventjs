type Hand = 'L' | 'R'

interface Glove {
  hand: Hand
  color: string
}

function matchGloves(gloves: Glove[]): string[] {
  const inventory = {}
  const pairs = []

  for (const { hand, color } of gloves) {
    // Inicializar si no existe
    if (!inventory[color]) {
      inventory[color] = { L: 0, R: 0 }
    }

    const oppositeHand = hand === 'L' ? 'R' : 'L'

    if (inventory[color][oppositeHand] > 0) {
      pairs.push(color)
      inventory[color][oppositeHand]--
    } else {
      inventory[color][hand]++
    }
  }

  return pairs
}

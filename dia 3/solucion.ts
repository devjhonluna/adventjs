function drawGift(size: number, symbol: string): string {
  if (size < 2) return ''
  let giftDraw: string = ''

  const firstLine = symbol.repeat(size)
  const lastLine = firstLine

  giftDraw += firstLine
  giftDraw += '\n'
  for (let i = 0; i < size - 2; i++) {
    const spaceForMiddleLine = ' '
    const middleLine = symbol + spaceForMiddleLine.repeat(size - 2) + symbol
    giftDraw += middleLine
    giftDraw += '\n'
  }
  giftDraw += lastLine
  return giftDraw
}

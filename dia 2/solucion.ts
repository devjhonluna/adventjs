function manufactureGifts(
  giftsToProduce: Array<{ toy: string, quantity: number }>
): string[] {
  // Code here
  return giftsToProduce.flatMap(gift=>
  Array(Math.max(0,gift.quantity)).fill(gift.toy)
  )

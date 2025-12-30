function filterGifts(gifts: string[]): string[] {

  return gifts.filter(present=>!present.includes("#"))
}

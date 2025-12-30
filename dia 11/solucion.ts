function findUnsafeGifts(warehouse: string[]): number {
  const w:number = warehouse[0].length
  const re = new RegExp(`(?<!#)(?<!#.{${w}})\\*(?!#)(?!.{${w}}#)`, 'g')
  return [...warehouse.join().matchAll(re)].length
}

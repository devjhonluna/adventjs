type Gift = string | number | boolean
type Workshop = Record<string, any>
type Path = string[]

function findGiftPath(workshop: Workshop, gift: Gift): Path {
  for (let item in workshop) {
    // 2. Si encontramos directamente el valor
    if (workshop[item] === gift) {
      return [item]; // Devolvemos la clave
    }
    
    // 3. Si el valor es un objeto (otra caja)
    const isObj=typeof workshop[item] === 'object' 
    const isntNull=workshop[item] !== null

    if ( !isObj || !isntNull ) continue 
    const camino = findGiftPath(workshop[item], gift);     
    if (camino.length === 0) continue
    return [item, ...camino]; // Agregamos la clave actual al camino
  }
  return []
}

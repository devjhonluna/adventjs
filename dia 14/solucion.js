/*
En el Polo Norte, los elfos han simplificado su sistema de almacenamiento para evitar errores.
Ahora guardan los regalos en un objeto mágico con profundidad limitada, donde cada valor aparece una sola vez.

Santa necesita una forma rápida de saber qué camino de claves debe seguir para encontrar un regalo concreto.

Tu tarea es escribir una función que, dado un objeto y un valor, devuelva el array de claves que hay que recorrer para llegar a ese valor.

Reglas:

El objeto tiene como máximo 3 niveles de profundidad.
El valor a buscar aparece como mucho una vez.
El objeto solo contiene otros objetos y valores primitivos (strings, numbers, booleans).
Si el valor no existe, devuelve un array vacío.*/

function findGiftPath(workshop, gift) {
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
  
  // 5. Si no encontramos nada
  return [];
}

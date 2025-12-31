/*
Santa quiere repartir regalos de la forma más eficiente posible 🎁. Tiene una lista de regalos, cada uno con un peso, y un trineo que solo puede cargar hasta un peso máximo.

Los regalos se entregan en orden, y Santa no puede cambiar ese orden. Cuando un regalo no cabe en el trineo actual, Santa envía el trineo y prepara uno nuevo.

Tu tarea es escribir una función que calcule el número mínimo de trineos necesarios para entregar todos los regalos.

Eso sí, ten en cuenta que a veces hay un regalo que no cabe en el trineo, entonces hay que devolver null porque ese trineo no sirve para ese pack de regalos.
*/

function packGifts(gifts, maxWeight) {
  let trineo = 0
  let current = 0

  for (let i = 0; i < gifts.length; i++) {
    if (gifts[i] > maxWeight) return null
    if (current + gifts[i] > maxWeight) {
      trineo++
      current = gifts[i]
    } else {
      current += gifts[i]
    }
  }
  if (current > 0) trineo++
  return trineo
}

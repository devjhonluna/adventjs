/*
En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos 🎁.

Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

Le pasan dos parámetros:

size: el tamaño del regalo cuadrado
symbol: el carácter que el elfo usa para hacer el borde (cuando no se equivoca 😅)
El regalo debe cumplir:

Debe ser un cuadrado de size x size.
El interior siempre está vacío (lleno de espacios), porque el elfo "aún no sabe dibujar el relleno".
Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero se le perdió el regalo.
El resultado final debe ser un string con saltos de línea \n.
Sí, es un reto fácil… pero no queremos que despidan al becario. ¿Verdad?
*/

function drawGift(size, symbol) {
    if (size < 2) return ""
  let giftDraw = ""

  const firstLine = symbol.repeat(size)
  const lastLine = firstLine

  giftDraw += firstLine
  giftDraw += "\n"
  for (let i = 0; i < size - 2; i++) {
    const spaceForMiddleLine = " "
    const middleLine = symbol + spaceForMiddleLine.repeat(size - 2) + symbol
    giftDraw += middleLine
    giftDraw += "\n"
  }
  giftDraw += lastLine
  return giftDraw
}

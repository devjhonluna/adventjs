/*
¡Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.

Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos a los niños en 2025.

Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa una instrucción:

> Se mueve a la siguiente instrucción
+ Incrementa en 1 el valor actual
- Decrementa en 1 el valor actual
[ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
{y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {
Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.
*/

function execute(code) {
  let total = 0
  let i = 0

  const functions = {
    '+': () => total++,
    '-': () => total--,
    '[': () => total === 0 && (i = code.indexOf(']', i)),
    ']': () => total !== 0 && (i = code.lastIndexOf('[', i)),
    '{': () => total === 0 && (i = code.indexOf('}', i))
  }

  while (i < code.length) {
    functions[code[i]]?.()
    i++
  }

  return total
}

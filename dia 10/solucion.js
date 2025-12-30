/*
🎄 Profundidad de Magia Navideña
En el Polo Norte, Santa Claus está revisando las cartas mágicas 📩✨ que recibe de los niños de todo el mundo. Estas cartas usan un antiguo lenguaje navideño en el que los corchetes [ y ] representan la intensidad del deseo.

Cuanto más profunda sea la anidación de los corchetes, más fuerte es el deseo. Tu misión es averiguar la máxima profundidad en la que se anidan los [].

Pero ¡cuidado! Algunas cartas pueden estar mal escritas. Si los corchetes no están correctamente balanceados (si se cierra antes de abrir, sobran cierres o faltan cierres), la carta es inválida y debes devolver -1.
*/

function maxDepth(s) {
  let stack = 0, maxStack = 0
  const inc = {'[':1, ']':-1}

  for(const c of s) {
    stack += inc[c]
    
    if(stack < 0)
      return -1

    maxStack = Math.max(maxStack, stack)
  }

  return [-1,maxStack][+!stack]
}

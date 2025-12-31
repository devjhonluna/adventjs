/*
En el Polo Norte, los elfos tienen dos árboles binarios mágicos que generan energía 🌲🌲 para mantener encendida la estrella navideña ⭐️. Sin embargo, para que funcionen correctamente, los árboles deben estar en perfecta sincronía como espejos 🪞.

Dos árboles binarios son espejos si:

Las raíces de ambos árboles tienen el mismo valor.
Cada nodo del primer árbol debe tener su correspondiente nodo en la posición opuesta en el segundo árbol.
*/

function isTreesSynchronized(tree1, tree2) {
  const areMirrors = (a, b) =>
    a === b ||
    (a?.value === b?.value &&
      areMirrors(a.left, b.right) &&
      areMirrors(a.right, b.left))
  return [areMirrors(tree1, tree2), tree1?.value ?? '']
}

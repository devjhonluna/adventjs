/*
En el taller de Santa, los elfos han encontrado una montaña de guantes mágicos totalmente desordenados. Cada guante viene descrito por dos valores:

hand: indica si es un guante izquierdo (L) o derecho (R)
color: el color del guante (string)
Tu tarea es ayudarles a emparejar guantes: Un par válido es un guante izquierdo y uno derecho del mismo color.

Debes devolver una lista con los colores de todos los pares encontrados. Ten en cuenta que puede haber varios pares del mismo color. El orden se determina por el que se pueda hacer primero el par.
*/

function matchGloves(gloves) {
    const inventory = {};
    const pairs = [];
    
    for (const { hand, color } of gloves) {
        // Inicializar si no existe
        if (!inventory[color]) {
            inventory[color] = { L: 0, R: 0 };
        }
        
        const oppositeHand = hand === 'L' ? 'R' : 'L';
        
        if (inventory[color][oppositeHand] > 0) {
            pairs.push(color);
            inventory[color][oppositeHand]--;
        } else {
            inventory[color][hand]++;
        }
    }
    
    return pairs;
}

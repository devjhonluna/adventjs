/*
Santa 🎅 quiere saber cuál es la primera letra no repetida en el nombre de un juguete 🎁.

Escribe una función que reciba un string y devuelva la primera letra que no se repite, ignorando mayúsculas y minúsculas al contar, pero devolviendo la letra tal como aparece en el string.

Si no hay ninguna, devuelve una cadena vacía ("").
*/

function findUniqueToy(toy) {
   let normalizedToy = toy.toLowerCase();

    // Count the number of times each letter appears
    const mapper = normalizedToy.split("").reduce((map, char) => {
        if (!map[char]) map[char] = 0;
        map[char]++;
        return map;
    }, {})

    // Iterate over the original text and find the first letter whose counter has been 1
    for (let i = 0; i < toy.length; i++) {
        const originalChar = toy[i];
        const normalizedChar = originalChar.toLowerCase();
        if (mapper[normalizedChar] === 1) {
            return originalChar;
        }
    }

    return "";
}

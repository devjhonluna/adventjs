/*
Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:

[1++][2-][3+][<]
Escribe una función que descifre el PIN a partir del código.

El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

Las operaciones se aplican en orden al número y son:

+ suma 1
- resta 1
El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

También existe el bloque especial [<], que repite el dígito del bloque anterior.

Si al final hay menos de 4 dígitos, se debe devolver null.
*/

function decodeSantaPin(code) {
  let pin = "";
  let last = 0;
  code.replace(/\[(<|\d)([+\-]*)]/g, (_, base, ops) => {
    const delta = (ops.replace(/-/g, "").length * 2) - ops.length;
    const val = base === '<' 
        ? last 
        : (parseInt(base) + delta) % 10;
    last = (val + 10) % 10;
    pin += last;
    
    return ""; // nomas para el effect del replace
  });
  return pin.length === 4 ? pin : null;
}

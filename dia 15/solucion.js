/*
Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe tener:

Cabecera con letras de columna (A, B, C…).
El contenido de la tabla son los valores de los objetos.
Los valores deben estar alineados a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.
La función recibe un segundo parámetro sortBy que indica el nombre del campo por el que se deben ordenar las filas. El orden será alfabético ascendente si los valores son strings y numérico ascendente si son números.
*/

function drawTable(data, sortBy) {
 if (!data.length) return ''

  const keys = Object.keys(data[0])
  const sorted = data.slice().sort((a, b) => 
    +(a[sortBy] > b[sortBy]) - +(a[sortBy] < b[sortBy])
  )
  const widths = keys.map(k => Math.max(1, ...sorted.map(r => String(r[k]).length)))
  const line = '+' + widths.map(w => '-'.repeat(w + 2)).join('+') + '+'
  const rowFmt = (vals) => 
    '| ' + vals.map((v, i) => String(v).padEnd(widths[i])).join(' | ') + ' |'
  
  const table=[
    line,
    // 65=A
    rowFmt(keys.map((_, i) => String.fromCharCode(65 + i))),
    line,
    ...sorted.map(item => rowFmt(keys.map(k => item[k]))),
    line
  ].join('\n')
  return table
}

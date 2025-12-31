type Data = Array<Record<string, string | number>>
type SortBy = string

function drawTable(data: Data, sortBy: SortBy): string {
 if (!data.length) return ''

  const keys = Object.keys(data[0])
  const sorted = data.slice().sort((a, b) => 
    +(a[sortBy] > b[sortBy]) - +(a[sortBy] < b[sortBy])
  )
  const widths = keys.map(k => Math.max(1, ...sorted.map(r => String(r[k]).length)))
  const line = '+' + widths.map(w => '-'.repeat(w + 2)).join('+') + '+'
  const rowFmt = (vals: (string|number)[]) => 
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

function execute(code: string): number {
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

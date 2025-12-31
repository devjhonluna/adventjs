function dropGifts(warehouse: string[][], drops: number[]): string[][] {
  const resultado = warehouse.map(fila => [...fila]);
  
  drops.forEach(col => {
    for (let i = resultado.length - 1; i >= 0; i--) {
      if (resultado[i][col] === '.') {
        resultado[i][col] = '#';
        return; // Sale del forEach para este regalo
      }
    }
  });
  
  return resultado;
}

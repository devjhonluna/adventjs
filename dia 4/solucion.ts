function decodeSantaPin(code: string): string {
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

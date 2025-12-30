function maxDepth (s: string): number {
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

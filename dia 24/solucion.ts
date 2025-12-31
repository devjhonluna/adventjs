function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined
): [boolean, string] {
  const areMirrors = (a, b) =>
    a === b ||
    (a?.value === b?.value &&
      areMirrors(a.left, b.right) &&
      areMirrors(a.right, b.left))
  return [areMirrors(tree1, tree2), tree1?.value ?? '']
}

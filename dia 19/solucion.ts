function revealSantaRoute(routes: string[][]): string[] {
   if(routes.length === 0) return []

  const result = [routes[0][0]]

  const routesMap = new Map(routes)

  let run = true
  while(run) {
    const to = routesMap.get(result.at(-1))
    result.push(to)
    if(!routesMap.has(to)) {
      run = false
      break;
    }
  }

  return result
}

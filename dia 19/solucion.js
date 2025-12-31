/*
¡El GPS del trineo se ha vuelto loco! 😱 Papá Noel tiene los tramos de su viaje, pero están todos desordenados.

Tu misión es reconstruir la ruta completa desde el origen hasta el destino final.

Ten en cuenta: El primer elemento del array es siempre el primer tramo del viaje. A partir de ahí, debes ir conectando los destinos con los siguientes orígenes.
*/

function revealSantaRoute(routes) {
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

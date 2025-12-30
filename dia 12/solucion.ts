function elfBattle(elf1: string, elf2: string): number {
  const INITIAL_HEALTH = 3
  let health1 = INITIAL_HEALTH,
    health2 = INITIAL_HEALTH

  // Función de daño que hace explícita la relación A-B
  function getDamage(attacker: string, defender: string) {
    const attackRules = {
      A: { damage: 1, blockedBy: 'B' }, // A es bloqueado por B
      F: { damage: 2, blockedBy: null } // F no puede ser bloqueado
    }

    const rule = attackRules[attacker]
    if (!rule) return 0

    // Condición explícita: B bloquea A
    if (rule.blockedBy === defender) {
      return 0
    }

    return rule.damage
  }

  for (let i = 0; i < elf1.length; i++) {
    // Calcular daños mutuos explícitamente
    const damageFromElf1 = getDamage(elf1[i], elf2[i])
    const damageFromElf2 = getDamage(elf2[i], elf1[i])

    // Aplicar daños
    const newHealth2 = health2 - damageFromElf1
    const newHealth1 = health1 - damageFromElf2

    // Verificar estado después de aplicar daños
    const bothDead = newHealth1 <= 0 && newHealth2 <= 0
    const oneDead = newHealth1 <= 0 !== newHealth2 <= 0

    // Actualizar salud
    health1 = newHealth1
    health2 = newHealth2

    // Lógica de terminación robusta
    if (bothDead) {
      return 0 // Empate por muerte simultánea
    }

    if (oneDead) {
      // Batalla termina cuando uno muere
      break
    }
  }

  // Lógica de resultado final
  if (health1 <= 0 && health2 <= 0) return 0
  if (health1 <= 0) return 2
  if (health2 <= 0) return 1
  if (health1 === health2) return 0

  return health1 > health2 ? 1 : 2
}

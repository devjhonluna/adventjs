/*
Dos elfos están jugando una batalla por turnos. Cada uno tiene un mazo de movimientos que se representan como un string donde cada carácter es una acción.

A Ataque normal: causa 1 punto de daño si no es bloqueado
B Bloqueo: bloquea un ataque normal (A)
F Ataque fuerte: causa 2 puntos de daño, no puede ser bloqueado
Ambos elfos comienzan con 3 puntos de vida. El primer elfo que llegue a 0 puntos de vida o menos pierde y la batalla termina inmediatamente (no se siguen procesando más movimientos).

Reglas por ronda

Si ambos usan ataque (A o F), ambos reciben daño según el tipo.
B bloquea A, pero no bloquea F.
Todo se resuelve simultáneamente.
Tu tarea

Devuelve el resultado de la batalla como un número:

1 → si el Elfo 1 gana
2 → si el Elfo 2 gana
0 → si empatan (ambos llegan a 0 a la vez o terminan con la misma vida)
*/

function elfBattle(elf1, elf2) {
 const INITIAL_HEALTH = 3;
  let health1 = INITIAL_HEALTH, health2 = INITIAL_HEALTH;

  // Función de daño que hace explícita la relación A-B
  function getDamage(attacker, defender) {
    const attackRules = {
      'A': { damage: 1, blockedBy: 'B' }, // A es bloqueado por B
      'F': { damage: 2, blockedBy: null }  // F no puede ser bloqueado
    };
    
    const rule = attackRules[attacker];
    if (!rule) return 0;
    
    // Condición explícita: B bloquea A
    if (rule.blockedBy === defender) {
      return 0;
    }
    
    return rule.damage;
  }

  for (let i = 0; i < elf1.length; i++) {
    // Calcular daños mutuos explícitamente
    const damageFromElf1 = getDamage(elf1[i], elf2[i]);
    const damageFromElf2 = getDamage(elf2[i], elf1[i]);
    
    // Aplicar daños
    const newHealth2 = health2 - damageFromElf1;
    const newHealth1 = health1 - damageFromElf2;
    
    // Verificar estado después de aplicar daños
    const bothDead = newHealth1 <= 0 && newHealth2 <= 0;
    const oneDead = (newHealth1 <= 0) !== (newHealth2 <= 0);
    
    // Actualizar salud
    health1 = newHealth1;
    health2 = newHealth2;
    
    // Lógica de terminación robusta
    if (bothDead) {
      return 0; // Empate por muerte simultánea
    }
    
    if (oneDead) {
      // Batalla termina cuando uno muere
      break;
    }
  }

  // Lógica de resultado final
  if (health1 <= 0 && health2 <= 0) return 0;
  if (health1 <= 0) return 2;
  if (health2 <= 0) return 1;
  if (health1 === health2) return 0;
  
  return health1 > health2 ? 1 : 2;
}

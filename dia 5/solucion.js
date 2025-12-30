/*
Los elfos tienen un timestamp secreto: es la fecha y hora exacta en la que Papá Noel despega con el trineo 🛷 para repartir regalos por el mundo. Pero en el Polo Norte usan un formato rarísimo para guardar la hora: YYYY*MM*DD@HH|mm|ss NP (ejemplo: 2025*12*25@00|00|00 NP).

Tu misión es escribir una función que reciba:

fromTime → fecha de referencia en formato elfo (YYYY*MM*DD@HH|mm|ss NP).
takeOffTime → la misma fecha de despegue, también en formato elfo.
La función debe devolver:

Los segundos completos que faltan para el despegue.
Si ya estamos en el despegue exacto → 0.
Si el despegue ya ocurrió → un número negativo indicando cuántos segundos han pasado desde entonces.
🎯 Reglas
Convierte el formato elfo a un timestamp primero. El sufijo NP indica la hora oficial del Polo Norte (sin husos horarios ni DST), así que puedes tratarlo como si fuera UTC.
Usa diferencias en segundos, no en milisegundos.
Redondea siempre hacia abajo (floor): solo segundos completos.
*/

function timeUntilTakeOff(fromTime, takeOffTime) {
 const elfDates = [fromTime, takeOffTime]
  const timestamps = []

  // Parse the elf date to UTC date (miliseconds)
  elfDates.forEach(elfDate => {
    // Remove the suffix
    elfDate = elfDate.replace(" NP", "")
    
    // Split the date and time
    const [ date, time ] = elfDate.split("@")
    const [ year, month, day ] = date.split("*")
    const [ hours, minutes, seconds ] = time.split("|")

    // Obtain the miliseconds (UTC)
    const miliseconds = Date.UTC(year, month - 1, day, hours, minutes, seconds)
    timestamps.push(miliseconds)
  })

  // Calculate the difference between the timestamps (ms)
  const [ fromTimeMs, takeOffTimeMs ] = timestamps;
  const timeDifferenceMs = takeOffTimeMs - fromTimeMs;

  // Parse to seconds
  const timeDifferenceSeconds = Math.floor(timeDifferenceMs / 1000)
  return timeDifferenceSeconds
}

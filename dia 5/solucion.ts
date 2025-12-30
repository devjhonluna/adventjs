type ElfDateTime =
  `${number}*${number}*${number}@${number}|${number}|${number} NP`

function timeUntilTakeOff(
  fromTime: ElfDateTime,
  takeOffTime: ElfDateTime
): number {
    function parseDate(timeToParse: ElfDateTime): Date {
    const [datePart, timePart] = timeToParse.split('@')

    const [yearStr, monthStr, dayStr] = datePart.split('*')

    const [hmsPart] = timePart.split(' ')
    const [hourStr, minStr, secStr] = hmsPart.split('|')

    const year = Number(yearStr)
    const month = Number(monthStr) - 1
    const day = Number(dayStr)
    const hour = Number(hourStr)
    const min = Number(minStr)
    const sec = Number(secStr)

    return new Date(Date.UTC(year, month, day, hour, min, sec))
  }

  const from = parseDate(fromTime)
  const to = parseDate(takeOffTime)

  const diffMs = to.getTime() - from.getTime()

  return Math.floor(diffMs / 1000)
}

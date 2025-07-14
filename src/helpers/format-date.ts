import dayjs from 'dayjs'

const formatDays = (days: number): string => {
  const lastTwoDigits = days % 100
  const lastDigit = days % 10

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${days} дней назад`
  } else if (lastDigit === 1) {
    return `${days} день назад`
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return `${days} дня назад`
  } else {
    return `${days} дней назад`
  }
}

const formatHours = (hours: number) => {
  const lastDigit = hours % 10

  if (hours >= 5 && hours <= 20) {
    return `${hours} часов назад`
  } else if (lastDigit === 1) {
    return `${hours} час назад`
  } else {
    return `${hours} часа назад`
  }
}

const formatMinutes = (minutes: number) => {
  const lastDigit = minutes % 10

  if (minutes >= 5 && minutes <= 20) {
    return `${minutes} минут назад`
  } else if (lastDigit === 1) {
    return `${minutes} минуту назад`
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return `${minutes} минуты назад`
  } else {
    return `${minutes} минут назад`
  }
}

const formatDate = (date: string) => {
  const shiftDays = dayjs().diff(date, 'day')
  if (shiftDays > 0) return formatDays(shiftDays)

  const shiftHours = dayjs().diff(date, 'hour')
  if (shiftHours > 0) return formatHours(shiftHours)

  const shifMinutes = dayjs().diff(date, 'minutes')
  return formatMinutes(shifMinutes)
}

export { formatMinutes, formatHours, formatDays }
export default formatDate

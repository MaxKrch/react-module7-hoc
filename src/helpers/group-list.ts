import dayjs from 'dayjs'
import type {
  AggregatedByDate,
  AggregatedByMonth,
  AggregatedByYearh,
  DataFromResponse,
} from '../types'

export function groupByMonth(data: DataFromResponse[]): AggregatedByMonth[] {
  const result: Record<string, number> = {}

  data.forEach(({ date, amount }) => {
    const month = dayjs(date).format(`MMM`)

    result[month] = (result[month] || 0) + amount
  })

  return Object.entries(result).map(([month, amount]) => ({ month, amount }))
}

export function groupByYear(data: DataFromResponse[]): AggregatedByYearh[] {
  const result: Record<number, number> = {}

  data.forEach(({ date, amount }) => {
    const year = dayjs(date).get('year')
    result[year] = (result[year] || 0) + amount
  })

  return Object.entries(result).map(([year, amount]) => ({
    year: Number(year),
    amount,
  }))
}

export function groupByDate(data: DataFromResponse[]): AggregatedByDate[] {
  const result: Record<string, number> = {}

  data.forEach(({ date, amount }) => {
    const shortDate = dayjs(date).format(`YYYY-MM-DD`)
    result[shortDate] = (result[shortDate] || 0) + amount
  })

  return Object.entries(result).map(([shortDate, amount]) => ({
    date: shortDate,
    amount,
  }))
}

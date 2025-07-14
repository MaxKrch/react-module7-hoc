import type { AggregatedByDate } from '../types'

export function sortByDate(data: AggregatedByDate[]): AggregatedByDate[] {
  return [...data].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )
}

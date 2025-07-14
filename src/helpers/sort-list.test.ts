import type { AggregatedByDate } from '../types'
import { sortByDate } from './sort-list'

describe(`Helper: sortList`, () => {
  const mockList: AggregatedByDate[] = [
    {
      date: `2018-01-03 12:10:00`,
      amount: 1,
    },
    {
      date: `2017-12-03 12:10:00`,
      amount: 2,
    },
    {
      date: `2018-01-03 10:10:00`,
      amount: 3,
    },
  ]

  it(`should return sorted by date array`, () => {
    const expectedList = [
      {
        date: `2017-12-03 12:10:00`,
        amount: 2,
      },
      {
        date: `2018-01-03 10:10:00`,
        amount: 3,
      },
      {
        date: `2018-01-03 12:10:00`,
        amount: 1,
      },
    ]

    const receivedList = sortByDate(mockList)

    expect(receivedList).toEqual(expectedList)
  })
})

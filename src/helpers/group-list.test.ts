import type {
  AggregatedByDate,
  AggregatedByMonth,
  AggregatedByYearh,
} from '../types'
import { groupByDate, groupByMonth, groupByYear } from './group-list'

const mockList = [
  {
    date: `2017-12-03 12:10:00`,
    amount: 1,
  },
  {
    date: `2018-01-01 10:10:00`,
    amount: 2,
  },
  {
    date: `2018-01-01 12:10:00`,
    amount: 3,
  },
  {
    date: `2018-01-06 12:10:00`,
    amount: 4,
  },
  {
    date: `2018-12-03 10:10:00`,
    amount: 5,
  },
]

describe(`Helper SortingItems`, () => {
  describe(`SortByYearh`, () => {
    it(`should list grouoped correctly by year`, () => {
      const expectedList: AggregatedByYearh[] = [
        {
          year: 2017,
          amount: 1,
        },
        {
          year: 2018,
          amount: 14,
        },
      ]

      const receivedList = groupByYear(mockList)
      expect(receivedList).toEqual(expectedList)
    })
  })

  describe(`SortByMonth`, () => {
    it(`should list grouoped correctly by month`, () => {
      const expectedList: AggregatedByMonth[] = [
        {
          month: `Dec`,
          amount: 6,
        },
        {
          month: `Jan`,
          amount: 9,
        },
      ]

      const receivedList = groupByMonth(mockList)
      expect(receivedList).toEqual(expectedList)
    })
  })

  describe(`SortByDa`, () => {
    it(`should list grouoped correctly by date`, () => {
      const expectedList: AggregatedByDate[] = [
        {
          date: `2017-12-03`,
          amount: 1,
        },
        {
          date: `2018-01-01`,
          amount: 5,
        },
        {
          date: `2018-01-06`,
          amount: 4,
        },
        {
          date: `2018-12-03`,
          amount: 5,
        },
      ]

      const receivedList = groupByDate(mockList)
      expect(receivedList).toEqual(expectedList)
    })
  })
})

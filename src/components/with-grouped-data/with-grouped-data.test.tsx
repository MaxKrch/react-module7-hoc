import { render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'

vi.mock(`../../helpers`, () => ({
  groupByDate: vi.fn(() => []),
  groupByMonth: vi.fn(() => []),
  groupByYear: vi.fn(() => []),
  sortByDate: vi.fn(() => []),
}))

import {
  groupByDate,
  groupByMonth,
  groupByYear,
  sortByDate,
} from '../../helpers'

import withGroupedData from './with-grouped-data'
import MonthTable from '../aggregation-app/components/month-table'
import YearTable from '../aggregation-app/components/year-table'
import SortTable from '../aggregation-app/components/sort-table'

describe('HOC: withGroupedData', () => {
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

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders component with data grouped by month', async () => {
    const PreparedComponent = withGroupedData(`byMonth`)(mockList)(MonthTable)

    render(<PreparedComponent />)

    await waitFor(() =>
      expect(screen.getByText(`Month Table`)).toBeInTheDocument()
    )
  })

  it('renders component with data grouped by year', async () => {
    const PreparedComponent = withGroupedData('byYearh')(mockList)(YearTable)

    render(<PreparedComponent />)

    await waitFor(() =>
      expect(screen.getByText(`Year Table`)).toBeInTheDocument()
    )
  })

  it('renders component with data grouped by date (and sorted)', async () => {
    const PreparedComponent = withGroupedData('byDate')(mockList)(SortTable)

    render(<PreparedComponent />)

    await waitFor(() =>
      expect(screen.getByText(`Sort Table`)).toBeInTheDocument()
    )
  })

  it('calls groupByMonth when type is BY_MONTH', async () => {
    const PreparedComponent = withGroupedData(`byMonth`)(mockList)(MonthTable)

    render(<PreparedComponent />)

    await waitFor(() => {
      expect(groupByMonth).toHaveBeenCalledTimes(1)
      expect(groupByMonth).toHaveBeenCalledWith(mockList)
    })
  })

  it('calls groupByYear when type is BY_YEARH', async () => {
    const PreparedComponent = withGroupedData('byYearh')(mockList)(YearTable)

    render(<PreparedComponent />)

    await waitFor(() => {
      expect(groupByYear).toHaveBeenCalledTimes(1)
      expect(groupByYear).toHaveBeenCalledWith(mockList)
    })
  })

  it('calls groupByDate and sortByDate when type is BY_DATE', async () => {
    const PreparedComponent = withGroupedData('byDate')(mockList)(SortTable)

    render(<PreparedComponent />)

    await waitFor(() => {
      expect(groupByDate).toHaveBeenCalledWith(mockList)
      expect(sortByDate).toHaveBeenCalledTimes(1)
    })
  })
})

import { render, screen, waitFor } from '@testing-library/react'
import AggregationApp from './aggregation-app'
import { vi } from 'vitest'
import * as withGroupedDataModule from '../with-grouped-data'

global.fetch = vi.fn()

const mockTableText = `MockTable`
const MockTable = () => <div>{mockTableText}</div>

describe('AggregationApp (class component)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders without crashing and shows nothing initially', () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      json: async () => ({ list: [] }),
    } as Response)

    render(<AggregationApp />)

    expect(screen.queryByText(mockTableText)).not.toBeInTheDocument()
  })

  it('fetches data and renders all three tables', async () => {
    const mockList = [
      {
        date: '2024-01-01',
        value: 1,
      },
    ]

    vi.mocked(fetch).mockResolvedValueOnce({
      json: async () => ({ list: mockList }),
    } as Response)

    vi.spyOn(withGroupedDataModule, 'default').mockImplementation(
      () => () => () => MockTable
    )

    render(<AggregationApp />)

    await waitFor(() => {
      expect(screen.getAllByText(mockTableText)).toHaveLength(3)
    })
  })

  it('logs error if fetch fails', async () => {
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    const errorText = 'Network error'
    vi.mocked(fetch).mockRejectedValueOnce(errorText)

    render(<AggregationApp />)

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        `Что-то пошло не так: ${errorText}`
      )
    })
  })
})

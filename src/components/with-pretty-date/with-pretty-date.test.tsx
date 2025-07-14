import { vi, type Mock } from 'vitest'

vi.mock('../../helpers/format-date', () => {
  return {
    default: vi.fn(),
  }
})

import { screen, render } from '@testing-library/react'
import withPrettyDate from './with-pretty-date'
import formatDate from '../../helpers/format-date'

describe('HOC: withPretty', () => {
  const mockDate = '2024-12-31 23:23:59'
  const mockComponentText = 'Test Component'
  const mockComponent = () => <div>{mockComponentText}</div>

  beforeEach(() => {
    ;(formatDate as Mock).mockClear()
  })

  it('should render passed Component', () => {
    const PreparedComponent = withPrettyDate(mockDate)(mockComponent)

    render(<PreparedComponent />)

    expect(screen.getByText(mockComponentText)).toBeInTheDocument()
  })

  it('should call formatDate once and with correct date', () => {
    const PreparedComponent = withPrettyDate(mockDate)(mockComponent)

    render(<PreparedComponent />)

    expect(formatDate).toHaveBeenCalledTimes(1)
    expect(formatDate).toHaveBeenCalledWith(mockDate)
  })
})

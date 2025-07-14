import { render, screen } from '@testing-library/react'
import withHightlightCategory from './with-hightlight-category'

describe('HOC: withHighlightCategory', () => {
  const popularText = /Popular!/i
  const newText = /New/i
  const videoText = `Video`
  const articleText = `Article`

  const PreparedVideo = withHightlightCategory(() => <div>{videoText}</div>)
  const PreparedArticle = withHightlightCategory(() => <div>{articleText}</div>)

  it('wraps Video with Popular when views > 1000', () => {
    render(<PreparedVideo views={2525} />)

    expect(screen.getByText(videoText)).toBeInTheDocument()
    expect(screen.getByText(popularText)).toBeInTheDocument()
  })

  it('wraps Video with New when views < 100', () => {
    render(<PreparedVideo views={15} />)

    expect(screen.getByText(videoText)).toBeInTheDocument()
    expect(screen.getByText(newText)).toBeInTheDocument()
  })

  it('wraps Article with Popular when views > 1000', () => {
    render(<PreparedArticle views={1099} />)

    expect(screen.getByText(articleText)).toBeInTheDocument()
    expect(screen.getByText(popularText)).toBeInTheDocument()
  })

  it('wraps Article with New when views < 100', () => {
    render(<PreparedArticle views={1} />)

    expect(screen.getByText(articleText)).toBeInTheDocument()
    expect(screen.getByText(newText)).toBeInTheDocument()
  })

  it('renders component without wrapper when views are between 100 and 1000', () => {
    render(<PreparedVideo views={150} />)

    expect(screen.getByText(videoText)).toBeInTheDocument()

    expect(screen.queryByText(popularText)).not.toBeInTheDocument()
    expect(screen.queryByText(newText)).not.toBeInTheDocument()
  })
})

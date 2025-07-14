import type { ComponentType } from 'react'
import type { ArticleItem, VideoItemWithViews } from '../../../types'
import Article from './article'
import Video from './video'
import withHightlightCategory from '../../with-hightlight-category'

type ListProps = {
  list: (ArticleItem | VideoItemWithViews)[]
}

export default function List(props: ListProps) {
  return props.list.map((item) => {
    let Component: ComponentType<any>
    switch (item.type) {
      case 'video':
        Component = Video
        break

      case 'article':
        Component = Article
        break
    }

    const ComponentWithHighlightCategory = withHightlightCategory(Component)

    const key = item.type === `video` ? item.url : item.title

    return (
      <li key={key}>
        <ComponentWithHighlightCategory {...item} />
      </li>
    )
  })
}

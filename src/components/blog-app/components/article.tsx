import type { ArticleItem } from '../../../types'

export default function Article(props: ArticleItem) {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{props.title}</a>
      </h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  )
}
